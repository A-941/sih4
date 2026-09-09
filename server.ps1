param (
    [int]$Port = 8080
)

$baseDir = $PSScriptRoot
$ip = [System.Net.IPAddress]::Loopback

try {
    $listener = New-Object System.Net.Sockets.TcpListener($ip, $Port)
    $listener.Start()
} catch {
    $Port = 8085
    $listener = New-Object System.Net.Sockets.TcpListener($ip, $Port)
    $listener.Start()
}

Write-Host "==============================================" -ForegroundColor Green
Write-Host "  AYUSH MediKiosk (SIH) Server is LIVE!" -ForegroundColor Cyan
Write-Host "  URL: http://localhost:$Port/index.html" -ForegroundColor Yellow
Write-Host "==============================================" -ForegroundColor Green

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $writer = New-Object System.IO.StreamWriter($stream)
        
        $requestLine = $reader.ReadLine()
        if (-not $requestLine) {
            $client.Close()
            continue
        }
        
        $parts = $requestLine.Split(" ")
        if ($parts.Length -lt 2) {
            $client.Close()
            continue
        }
        
        $urlPath = $parts[1]
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }
        if ($urlPath.Contains("?")) {
            $urlPath = $urlPath.Substring(0, $urlPath.IndexOf("?"))
        }
        
        $cleanPath = $urlPath.TrimStart("/\").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $baseDir $cleanPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $header = "HTTP/1.1 200 OK`r`n" +
                      "Content-Type: $contentType`r`n" +
                      "Content-Length: $($bytes.Length)`r`n" +
                      "Access-Control-Allow-Origin: *`r`n" +
                      "Connection: close`r`n`r`n"
            
            $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
            $stream.Flush()
        } else {
            $msg = "<html><body><h1>404 Not Found</h1></body></html>"
            $msgBytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $header = "HTTP/1.1 404 Not Found`r`n" +
                      "Content-Type: text/html; charset=utf-8`r`n" +
                      "Content-Length: $($msgBytes.Length)`r`n" +
                      "Connection: close`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($msgBytes, 0, $msgBytes.Length)
            $stream.Flush()
        }
        
        $client.Close()
    } catch {
        # Continue on connection errors
    }
}
