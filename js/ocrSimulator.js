// Interactive Camera Document & Prescription OCR Scanner Simulator
class MediOCRSimulator {
  constructor() {
    this.isCameraActive = false;
    this.stream = null;
    this.sampleDocuments = [
      {
        id: "sample-1",
        title: "Civil Hospital Prescription (Hypertension & Lipid)",
        doctor: "Dr. K. S. Verma (Consultant Physician)",
        extractedMeds: [
          "Tab Amlodipine 5mg - 1 Tab OD (Morning after food)",
          "Tab Atorvastatin 10mg - 1 Tab HS (Bedtime)",
          "Tab Ecosprin 75mg - 1 Tab OD (After lunch)"
        ],
        extractedLabs: [
          "Blood Pressure: 150/94 mmHg (Stage 1 HTN)",
          "Serum Cholesterol: 218 mg/dL",
          "HbA1c: 6.4% (Pre-diabetic)"
        ],
        confidenceScore: "98.4% (Tesseract Multi-script OCR)"
      },
      {
        id: "sample-2",
        title: "Community Health Center Rx (Infection & Fever)",
        doctor: "Dr. Meera Nair (Medical Officer)",
        extractedMeds: [
          "Tab Paracetamol 650mg - 1 Tab TDS (SOS for fever)",
          "Cap Amoxicillin + Clav 625mg - 1 Cap BD (5 Days)",
          "Syp Ascoril-LS - 10ml TDS (Warm water)"
        ],
        extractedLabs: [
          "Body Temperature: 102.4°F",
          "SpO2: 97% on room air",
          "Pulse Rate: 94 bpm"
        ],
        confidenceScore: "96.2% (Tesseract Multi-script OCR)"
      },
      {
        id: "sample-3",
        title: "AYUSH Clinical Prescription (Digestive & Lifestyle)",
        doctor: "Vaidya R. K. Shastri (BAMS, MD)",
        extractedMeds: [
          "Avipattikar Churna - 3g with warm water before meals",
          "Sutshekhar Ras - 1 Tab BD after meals",
          "Triphala Kwath - 20ml HS"
        ],
        extractedLabs: [
          "Nadi Pariksha: Pitta-Vata Vitiation",
          "Jatharagni: Mandagni with Amlapitta",
          "Tongue: White coated (Ama present)"
        ],
        confidenceScore: "97.8% (Tesseract Multi-script OCR)"
      }
    ];
  }

  // Interactive Scan Execution Pipeline
  runInteractiveScan(sampleIndex = 0, onProgress, onComplete) {
    const doc = this.sampleDocuments[sampleIndex] || this.sampleDocuments[0];
    let step = 0;
    
    const steps = [
      { progress: 25, text: "📷 Optical Viewfinder: Detecting Document Corners & Perspective..." },
      { progress: 50, text: "🔍 De-skewing Image & Applying High-Contrast Binarization..." },
      { progress: 75, text: "⚡ Tesseract AI: Reading Doctor Handwriting & Indian Drug Formulary..." },
      { progress: 100, text: "✅ MediNER AI: Past Medications & Lab Values Extracted Successfully!" }
    ];

    const timer = setInterval(() => {
      if (step < steps.length) {
        if (onProgress) onProgress(steps[step].progress, steps[step].text);
        if (window.mediAudio) window.mediAudio.playSound('scan');
        step++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete(doc);
      }
    }, 650);
  }
}

window.mediOCR = new MediOCRSimulator();
