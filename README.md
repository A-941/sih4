# MediKiosk - AI-Powered Patient Clinical Intake Kiosk & Doctor EMR

An intelligent, accessible, dual-interface web application prototype designed for Indian Hospital Outpatient Departments (OPDs), built for **Smart India Hackathon (SIH)**.

---

## 🌟 Key Features

### 1. Patient Intake Kiosk (Step-by-Step Wizard)
- **11 Regional Languages**: हिन्दी (Hindi), English, ગુજરાતી (Gujarati), தமிழ் (Tamil), తెలుగు (Telugu), বাংলা (Bengali), मराठी (Marathi), ಕನ್ನಡ (Kannada), മലയാളം (Malayalam), ਪੰਜਾਬੀ (Punjabi), and ଓଡ଼ିଆ (Odia).
- **AI Virtual Health Assistant ("Dr. Medi")**: 2D animated cartoon doctor avatar with lip-syncing mouth animation during Web Speech synthesis, eye blinking, expressive mood changes, and contextual multilingual speech bubbles.
- **Smart Speech-to-Text & Auto-Fill**: Real-time animated speech transcription that automatically detects spoken symptoms and checks corresponding symptom cards, setting duration and severity.
- **Expanded 10-Department AI Problem Router**: General Medicine, Ayurveda & Panchakarma, Orthopedics, Pediatrics, Dermatology, Cardiology, ENT, Gynecology, Pulmonology, and Ophthalmology with automatic symptom-based routing.
- **Clinical Re-Confirmation Protocol**: Emergency double-check mechanism for acute/severe symptoms (e.g., chest pain radiation, resting breathlessness).
- **AYUSH & Holistic Intake**: Interactive assessment for Agni (Appetite/Digestion), Nidra (Sleep Quality), and Koshtha (Bowel Habits).
- **Camera Document OCR Scanner**: Simulated optical viewfinder with corner alignment brackets, laser sweep animation, and automatic extraction of past prescriptions & vitals.
- **Patient-Centric Checkout & Payments**: Appointment slot confirmation, UPI QR Code payment simulation (GPay/PhonePe/Paytm), Cash at counter, PMJAY free waiver, and 1-click refund/cancellation.

### 2. Doctor EMR Dashboard
- **Patient Queue Sidebar**: Real-time queue sorted with 🚨 Red-Flag Urgent triage prioritization.
- **Glanceable Clinical Intake Summary (SOAP Layout)**: Emergency alert banner with 1-click STAT ECG order, 🟢 Confirmed (2x Checked) confidence badges, voice transcripts, AYUSH vitals, and OCR records.
- **Interactive Doctor Tools**: 1-Click Clinical Override modal, quick prescription pad with preset medicine chips, provisional diagnosis, and digital sign-off.

---

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS CDN, FontAwesome 6
- **Voice & Speech**: Web Speech API (SpeechSynthesis & SpeechRecognition)
- **State Management**: LocalStorage with real-time cross-tab synchronization
- **Audio & Visuals**: Web Audio API Synthesizer & HTML5 Canvas Waveform

---

## 🚀 Getting Started

### 1. Direct Browser Launch
Open `index.html` directly in any modern web browser (Google Chrome or Microsoft Edge recommended for full Web Speech API support).

### 2. Local HTTP Server
Run with PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📂 Project Structure
```text
sih/
├── index.html          # Main application container (Kiosk + Doctor EMR)
├── server.ps1          # Lightweight PowerShell static HTTP server
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── css/
│   └── styles.css      # Theme variables, animations, viewfinder, thermal ticket
└── js/
    ├── app.js          # App orchestrator & mode switcher
    ├── audio.js        # Web Speech APIs (TTS/STT) & audio engine
    ├── avatar.js       # Dr. Medi 2D animated avatar component
    ├── emr.js          # Doctor EMR dashboard & queue controller
    ├── kiosk.js        # Patient Kiosk wizard state machine & AI auto-router
    ├── mockData.js     # Preloaded realistic OPD clinical cases
    ├── ocrSimulator.js # Camera document scanner & OCR extractor
    └── translations.js # Complete 11 Indian regional language dictionaries
```

---

## 👥 Hackathon Team & Credits
Developed for **Smart India Hackathon (SIH)** - Healthcare & Biomedical Track.
