// Mock OPD Patients Data for MediKiosk
window.INITIAL_PATIENTS = [
  {
    id: "pat-101",
    tokenNumber: "#OPD-101",
    name: "Ramesh Patel",
    age: 54,
    gender: "Male",
    mobile: "98250 12345",
    abhaId: "91-4523-8890-1209",
    language: "gu",
    department: "Cardiology",
    roomAssigned: "Room 102 (Cardiac Bay)",
    createdAt: new Date(Date.now() - 25 * 60000).toISOString(),
    status: "Intake Complete",
    isRedFlag: true,
    isConfirmed: true, // 2x Checked with Red-Flag protocol
    chiefComplaints: [
      { id: "chest_pain", name: "Chest Pain / Tightness", severity: "Severe (10/10)", duration: "Started Today (< 24 hrs)" },
      { id: "breathless", name: "Shortness of Breath", severity: "Severe", duration: "Started Today (< 24 hrs)" }
    ],
    voiceTranscript: "મને આજે સવારથી છાતીમાં ખૂબ ભારે દબાણ થાય છે અને ડાબા હાથમાં દુખાવો વધતો જાય છે. શ્વાસ લેવામાં ગભરામણ થાય છે.",
    reconfirmationResponse: {
      question: "Is this chest pain constant or coming in sudden intense spikes? Does it radiate to your left arm, jaw, or shoulder?",
      answer: "Constant heavy pressure radiating to left arm / jaw (Immediate Emergency)",
      isUrgent: true,
      timestamp: new Date(Date.now() - 23 * 60000).toISOString()
    },
    ayushProfile: {
      agni: "Mandagni (Low / Sluggish)",
      nidra: "Poor / Insomnia (<4 hours)",
      koshtha: "Krura (Hard / Constipated)",
      diet: "Vegetarian"
    },
    ocrDocuments: [
      {
        docType: "Prior Rx (Civil Hospital)",
        fileName: "old_prescription_oct2025.jpg",
        extractedMeds: ["Tab Amlodipine 5mg (OD)", "Tab Atorvastatin 10mg (HS)", "Tab Aspirin 75mg"],
        extractedLabs: ["BP: 154/96 mmHg", "Heart Rate: 98 bpm", "ECG: Sinus Tachycardia (Oct 2025)"]
      }
    ],
    doctorNotes: {
      overrideNotes: "",
      provisionalDiagnosis: "Acute Coronary Syndrome (ACS) - Rule out NSTEMI / Angina Pectoris",
      rxList: [
        { name: "Tab Sorbitrate 5mg", dosage: "1 tab sublingual STAT", duration: "STAT" },
        { name: "Tab Clopidogrel 300mg + Aspirin 300mg", dosage: "STAT Loading dose", duration: "STAT" },
        { name: "Urgent 12-Lead ECG & Trop-I", dosage: "Immediate", duration: "Emergency Bay" }
      ],
      doctorAdvice: "Immediate bedside ECG and cardiac monitor attachment. Shift to ICU/Emergency Bay.",
      signedAt: null,
      signedBy: null
    }
  },

  {
    id: "pat-102",
    tokenNumber: "#OPD-102",
    name: "Sunita Devi",
    age: 38,
    gender: "Female",
    mobile: "94140 87654",
    abhaId: "42-9901-3412-7781",
    language: "hi",
    department: "General Medicine",
    roomAssigned: "Room 105",
    createdAt: new Date(Date.now() - 18 * 60000).toISOString(),
    status: "Intake Complete",
    isRedFlag: false,
    isConfirmed: true,
    chiefComplaints: [
      { id: "fever", name: "Fever & Chills", severity: "Moderate (102°F)", duration: "2 - 3 Days" },
      { id: "cough", name: "Cough & Cold", severity: "Moderate", duration: "2 - 3 Days" }
    ],
    voiceTranscript: "तीन दिन से तेज बुखार आ रहा है, गले में बहुत खराश है और रात को सूखी खांसी की वजह से सो नहीं पा रही हूँ।",
    reconfirmationResponse: null,
    ayushProfile: {
      agni: "Samagni (Normal / Balanced)",
      nidra: "Disturbed / Frequent Waking",
      koshtha: "Madhyama (Regular / Smooth)",
      diet: "Vegetarian"
    },
    ocrDocuments: [
      {
        docType: "Pharmacy Receipt",
        fileName: "rx_paracetamol_slip.jpg",
        extractedMeds: ["Tab Paracetamol 650mg (SOS)", "Cough Syrup TusQ-DX (10ml TDS)"],
        extractedLabs: ["SpO2: 98% on room air", "Temp: 101.8°F"]
      }
    ],
    doctorNotes: {
      overrideNotes: "",
      provisionalDiagnosis: "Acute Viral Upper Respiratory Tract Infection (URTI)",
      rxList: [
        { name: "Tab Paracetamol 650mg", dosage: "1 tab TDS (after meals)", duration: "5 Days" },
        { name: "Tab Levocetirizine 5mg", dosage: "1 tab HS (night)", duration: "5 Days" },
        { name: "Steam Inhalation + Warm Saline Gargle", dosage: "TDS", duration: "5 Days" }
      ],
      doctorAdvice: "Hydration with warm fluids. Review in OPD if fever persists beyond 5 days with CBC/Widal.",
      signedAt: null,
      signedBy: null
    }
  },

  {
    id: "pat-103",
    tokenNumber: "#AYU-103",
    name: "Manish Trivedi",
    age: 46,
    gender: "Male",
    mobile: "97123 45678",
    abhaId: "18-3490-6712-8823",
    language: "en",
    department: "AYUSH / Integrated Medicine",
    roomAssigned: "Room 108 (AYUSH Block)",
    createdAt: new Date(Date.now() - 10 * 60000).toISOString(),
    status: "Intake Complete",
    isRedFlag: false,
    isConfirmed: true,
    chiefComplaints: [
      { id: "stomach_pain", name: "Stomach Pain", severity: "Moderate", duration: "More than 1 Month (Chronic)" },
      { id: "headache", name: "Severe Headache", severity: "Mild", duration: "About 1 Week" }
    ],
    voiceTranscript: "I have had severe bloating and indigestion after every meal for over a month. Constant heaviness in epigastric area.",
    reconfirmationResponse: {
      question: "Is the pain located on the lower right side with high fever or continuous vomiting?",
      answer: "Upper stomach burning sensation after skipping meals",
      isUrgent: false,
      timestamp: new Date(Date.now() - 9 * 60000).toISOString()
    },
    ayushProfile: {
      agni: "Vishamagni (Irregular / Bloating)",
      nidra: "Disturbed / Frequent Waking",
      koshtha: "Krura (Hard / Constipated)",
      diet: "Sattvic / Vegetarian"
    },
    ocrDocuments: [
      {
        docType: "Previous USG Abdomen & LFT",
        fileName: "usg_report.jpg",
        extractedMeds: ["Cap Omeprazole 20mg (OD Empty Stomach)"],
        extractedLabs: ["USG: Mild Grade 1 Fatty Liver", "Serum Bilirubin: 0.9 mg/dL (Normal)"]
      }
    ],
    doctorNotes: {
      overrideNotes: "",
      provisionalDiagnosis: "Amlapitta (Hyperacidity / Dyspepsia) with Vishamagni",
      rxList: [
        { name: "Avipattikar Churna 3g", dosage: "With lukewarm water before meals", duration: "15 Days" },
        { name: "Sutshekhar Ras 1 tab", dosage: "Twice daily after meals", duration: "15 Days" },
        { name: "Triphala Churna 5g", dosage: "At bedtime with warm water", duration: "1 Month" }
      ],
      doctorAdvice: "Avoid spicy, oily, deep-fried snacks. Maintain regular meal timings and drink 2.5L warm water daily.",
      signedAt: null,
      signedBy: null
    }
  }
];
