param (
    [int]$Port = 3000
)

$baseDir = $PSScriptRoot

# Find available port
$listener = $null
while ($Port -lt 3100) {
    try {
        $testListener = New-Object System.Net.HttpListener
        $prefix = "http://localhost:$Port/"
        $testListener.Prefixes.Add($prefix)
        $testListener.Start()
        $listener = $testListener
        Write-Host "==============================================" -ForegroundColor Green
        Write-Host "  MediKiosk (SIH) Server is LIVE!" -ForegroundColor Cyan
        Write-Host "  Local URL: http://localhost:$Port/" -ForegroundColor Yellow
        Write-Host "==============================================" -ForegroundColor Green
        break
    } catch {
        $Port++
    }
}

if (-not $listener) {
    Write-Error "Could not bind to any available port between 3000 and 3100."
    exit 1
}

# Auto launch browser
Start-Process "http://localhost:$Port/"

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css"
    ".js"    = "application/javascript"
    ".json"  = "application/json"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".wav"   = "audio/wav"
    ".mp3"   = "audio/mpeg"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        $cleanPath = $urlPath.TrimStart("/\").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $baseDir $cleanPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($mimeTypes.ContainsKey($ext)) {
                $response.ContentType = $mimeTypes[$ext]
            } else {
                $response.ContentType = "application/octet-stream"
            }
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.OutputStream.Close()
    }
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
