// Patient Clinical Intake Kiosk Controller with 11 Languages, AI Auto-Routing & Smart Voice Auto-Fill
class PatientKioskApp {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 6;
    this.language = 'hi'; // Default to Hindi
    
    // Intake State
    this.state = {
      name: '',
      age: '',
      gender: 'Male',
      mobile: '',
      abhaId: '',
      department: 'general',
      autoRoutedDepartment: null,
      selectedSymptoms: [],
      severity: 'Moderate',
      duration: '2 - 3 Days',
      voiceTranscript: '',
      liveInterimText: '',
      needsReconfirmation: false,
      reconfirmationData: null,
      reconfirmationAnswer: null,
      ayush: {
        agni: 'Samagni (Normal / Balanced)',
        nidra: 'Sound & Deep (6-8 hours)',
        koshtha: 'Madhyama (Regular / Smooth)',
        diet: 'Vegetarian'
      },
      ocrDocument: null,
      tokenNumber: '',
      roomAssigned: 'Room 104',
      estWaitMinutes: 15,
      appointmentSlot: 'Today at 10:45 AM (Slot #4)',
      paymentStatus: 'Paid via UPI QR', // 'Paid via UPI QR', 'Cash at Counter', 'PMJAY Free Waiver'
      paymentReceiptId: '#RCP-8821',
      feeAmount: 50
    };

    this.recognition = null;
    this.isRecording = false;
  }

  init() {
    this.setupSpeechRecognition();
    if (window.drMedi) window.drMedi.init();
    this.renderCurrentStep();
    this.updateLanguageUI();
  }

  // Setup Multilingual Web Speech Recognition API
  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.isRecording = true;
        this.updateMicUI(true);
        if (window.drMedi) window.drMedi.setMood('listening');
        if (window.mediAudio) {
          window.mediAudio.playSound('tap');
          window.mediAudio.startWaveformAnimation('waveformCanvas');
        }
      };

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const currentText = finalTranscript || interimTranscript;
        this.state.voiceTranscript = currentText;
        this.state.liveInterimText = currentText;

        // Update real-time transcription visualizer on screen
        const liveBanner = document.getElementById('voiceLiveTextDisplay');
        const inputEl = document.getElementById('voiceTranscriptInput');
        if (liveBanner) liveBanner.textContent = currentText || "...";
        if (inputEl) inputEl.value = currentText;

        // Execute smart AI auto-fill entity parser on spoken text
        this.parseVoiceAndAutoFill(currentText);
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition warning:', event.error);
      };

      this.recognition.onend = () => {
        if (this.isRecording) {
          this.stopRecording();
        }
      };
    }
  }

  toggleVoiceInput() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  startRecording() {
    if (this.recognition) {
      try {
        const bcp = window.MEDI_TRANSLATIONS[this.language].bcp47 || 'hi-IN';
        this.recognition.lang = bcp;
        this.recognition.start();
      } catch (e) {
        this.simulateVoiceDictation();
      }
    } else {
      this.simulateVoiceDictation();
    }
  }

  stopRecording() {
    this.isRecording = false;
    this.updateMicUI(false);
    if (window.drMedi) window.drMedi.setMood('idle');
    if (window.mediAudio) {
      window.mediAudio.stopWaveformAnimation();
    }
    if (this.recognition) {
      try { this.recognition.stop(); } catch(e) {}
    }
  }

  // Simulated Voice Stream with Live Auto-Fill Fallback
  simulateVoiceDictation() {
    this.isRecording = true;
    this.updateMicUI(true);
    if (window.drMedi) window.drMedi.setMood('listening');
    if (window.mediAudio) {
      window.mediAudio.playSound('tap');
      window.mediAudio.startWaveformAnimation('waveformCanvas');
    }

    const dicts = {
      hi: "मुझे दो दिन से बहुत तेज छाती में दर्द, सांस फूलना और खांसी हो रही है।",
      en: "I have had severe chest tightness, shortness of breath, and cough for 2 days.",
      gu: "મને બે દિવસથી છાતીમાં ખૂબ ભારે દુખાવો, શ્વાસ લેવામાં તકલીફ અને ઉધરસ થાય છે.",
      ta: "எனக்கு இரண்டு நாட்களாக கடுமையான நெஞ்சு வலி மற்றும் மூச்சுத்திணறல் உள்ளது.",
      te: "నాకు రెండు రోజులుగా తీవ్రమైన ఛాతీ నొప్పి మరియు ఆయాసం వస్తోంది.",
      bn: "আমার দুই দিন ধরে বুকে তীব্র ব্যথা এবং শ্বাসকষ্ট হচ্ছে।",
      mr: "मला दोन दिवसांपासून छातीत खूप दुखत आहे आणि धाਪ लागते आहे.",
      kn: "ನನಗೆ ಎರಡು ದಿನಗಳಿಂದ ತೀವ್ರ ಎದೆ ನೋವು ಮತ್ತು ಉಸಿರಾಟದ ತೊಂದರೆ ಇದೆ.",
      ml: "എനിക്ക് രണ്ടു ദിവസമായി കഠിനമായ നെഞ്ചുവേദനയും ശ്വാസംമുട്ടലും ഉണ്ട്.",
      pa: "ਮੈਨੂੰ ਦੋ ਦਿਨਾਂ ਤੋਂ ਛਾਤੀ ਵਿੱਚ ਬਹੁਤ ਤੇਜ਼ ਦਰਦ ਅਤੇ ਸਾਹ ਚੜ੍ਹ ਰਿਹਾ ਹੈ।",
      or: "ମୋତେ ଦୁଇ ଦିନରୁ ଛାତିରେ ପ୍ରବଳ ଯନ୍ତ୍ରଣା ଏବଂ ଶ୍ୱାସକଷ୍ଟ ହେଉଛି।"
    };

    const target = dicts[this.language] || dicts.hi;
    const inputEl = document.getElementById('voiceTranscriptInput');
    const liveBanner = document.getElementById('voiceLiveTextDisplay');
    let idx = 0;

    const timer = setInterval(() => {
      if (idx < target.length && this.isRecording) {
        const partial = target.slice(0, idx + 1);
        if (inputEl) inputEl.value = partial;
        if (liveBanner) liveBanner.textContent = partial;
        this.state.voiceTranscript = partial;
        this.parseVoiceAndAutoFill(partial);
        idx++;
      } else {
        clearInterval(timer);
        this.stopRecording();
      }
    }, 40);
  }

  // Smart Speech-to-Text Entity Recognition & Auto-Fill
  parseVoiceAndAutoFill(text) {
    const lower = text.toLowerCase();
    
    // Symptom Keywords Map
    const keywords = [
      { id: 'chest_pain', matches: ['chest', 'छाती', 'સીના', 'நெஞ்சு', 'ఛాతీ', 'বুক', 'ਛਾਤੀ', 'ଛାତି', 'pain in chest', 'દુખાવો'] },
      { id: 'breathless', matches: ['breath', 'सांस', 'શ્વાસ', 'மூச்சு', 'శ్వాస', 'দম', 'धाप', 'ಉಸಿರಾಟ', 'ശ്വാസം', 'ਸਾਹ', 'ଶ୍ୱାସ'] },
      { id: 'fever', matches: ['fever', 'बुखार', 'તાવ', 'காய்ச்சல்', 'జ్వరం', 'জ্বর', 'ताप', 'ಜ್ವರ', 'പനി', 'ਬੁਖਾਰ', 'ଜ୍ୱର'] },
      { id: 'cough', matches: ['cough', 'खांसी', 'ઉધરસ', 'இருமல்', 'దగ్గు', 'কাশি', 'खोकला', 'ಕೆಮ್ಮು', 'ചുമ', 'ਖੰਘ', 'କାଶ'] },
      { id: 'stomach_pain', matches: ['stomach', 'पेट', 'પેટ', 'வயிறு', 'కడుపు', 'পেট', 'पोट', 'ಹೊಟ್ಟೆ', 'വയറ്', 'ਪੇਟ', 'ପେଟ'] },
      { id: 'joint_pain', matches: ['joint', 'knee', 'घुटने', 'સાંધા', 'மூட்டு', 'కీళ్ళు', 'হাঁটু', 'सांधे', 'ಕೀಲು', 'സന്ധി', 'ਗੋਡੇ', 'ଗଣ୍ଠି'] },
      { id: 'skin_rash', matches: ['rash', 'skin', 'खुजली', 'ખંજવાળ', 'அரிப்பு', 'దురద', 'চুলকানি', 'खाज', 'ತುರಿಕೆ', 'ചൊറിച്ചിൽ', 'ਖਾਰਸ਼', 'କୁଣ୍ଡିଆ'] },
      { id: 'headache', matches: ['headache', 'सिरदर्द', 'માથું', 'தலைவலி', 'తలనొప్పి', 'মাথা', 'डोकेदुखी', 'ತಲೆನೋವು', 'തലവേദന', 'ਸਿਰਦਰਦ', 'ମୁଣ୍ଡବିନ୍ଧା'] }
    ];

    let foundAny = false;
    keywords.forEach(k => {
      const match = k.matches.some(m => lower.includes(m.toLowerCase()));
      if (match) {
        const tSym = window.MEDI_TRANSLATIONS[this.language].symptoms[k.id];
        if (tSym && !this.state.selectedSymptoms.some(s => s.id === k.id)) {
          this.state.selectedSymptoms.push({
            id: k.id,
            name: tSym.name,
            isRedFlag: tSym.isRedFlag,
            targetDept: tSym.targetDept
          });
          foundAny = true;
        }
      }
    });

    if (foundAny) {
      this.renderStep2Symptoms();
      this.evaluateAiDepartmentRouting();
    }
  }

  // AI Problem Router Algorithm: Automatically routes symptoms & demographics to optimal clinic
  evaluateAiDepartmentRouting() {
    const age = parseInt(this.state.age) || 35;
    let targetDept = 'general';

    // Pediatric Rule
    if (age < 14) {
      targetDept = 'pediatrics';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'chest_pain')) {
      targetDept = 'cardio';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'breathless')) {
      targetDept = 'pulmo';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'joint_pain')) {
      targetDept = 'ortho';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'skin_rash')) {
      targetDept = 'derma';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'cough')) {
      targetDept = 'ent';
    } else if (this.state.selectedSymptoms.some(s => s.id === 'stomach_pain')) {
      targetDept = 'ayush';
    }

    this.state.autoRoutedDepartment = targetDept;
    this.state.department = targetDept;

    // Update Dr. Medi Avatar mood
    if (window.drMedi) {
      window.drMedi.setMood('thinking');
      setTimeout(() => {
        if (window.drMedi) {
          const deptName = window.MEDI_TRANSLATIONS[this.language].departments[targetDept].name;
          window.drMedi.setSpeechText(`✨ AI Auto-Routed you to: ${deptName}`, false, this.language);
        }
      }, 500);
    }

    this.highlightSelectedDepartmentCard();
  }

  highlightSelectedDepartmentCard() {
    document.querySelectorAll('.dept-card').forEach(card => {
      const deptKey = card.getAttribute('data-dept');
      const badge = card.querySelector('.ai-routed-pill');
      if (deptKey === this.state.department) {
        card.classList.add('selected', 'border-teal-600', 'bg-teal-50/80', 'ring-2', 'ring-teal-400');
        card.classList.remove('border-slate-200', 'bg-white');
        if (badge) badge.classList.remove('hidden');
      } else {
        card.classList.remove('selected', 'border-teal-600', 'bg-teal-50/80', 'ring-2', 'ring-teal-400');
        card.classList.add('border-slate-200', 'bg-white');
        if (badge) badge.classList.add('hidden');
      }
    });
  }

  updateMicUI(recording) {
    const btn = document.getElementById('voiceRecordBtn');
    const statusText = document.getElementById('voiceStatusText');
    const t = window.MEDI_TRANSLATIONS[this.language].labels;

    if (btn) {
      if (recording) {
        btn.classList.add('bg-red-500', 'text-white', 'pulse-red');
        btn.classList.remove('bg-teal-50', 'text-teal-700');
        if (statusText) statusText.textContent = t.listening;
      } else {
        btn.classList.remove('bg-red-500', 'text-white', 'pulse-red');
        btn.classList.add('bg-teal-50', 'text-teal-700');
        if (statusText) statusText.textContent = t.tapToSpeak;
      }
    }
  }

  setLanguage(lang) {
    if (this.language !== lang) {
      this.language = lang;
      if (window.mediAudio) {
        window.mediAudio.playSound('tap');
        const t = window.MEDI_TRANSLATIONS[lang];
        if (window.drMedi) {
          window.drMedi.setSpeechText(t.avatarWelcome, true, lang);
        }
      }
      this.updateLanguageUI();
      this.renderCurrentStep();
    }
  }

  updateLanguageUI() {
    const t = window.MEDI_TRANSLATIONS[this.language];
    
    // Update active language selector pills & dropdown
    document.querySelectorAll('.lang-pill').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.language) {
        btn.className = "lang-pill px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-teal-600 text-white shadow-md";
      } else {
        btn.className = "lang-pill px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-white text-slate-700 border hover:bg-slate-50";
      }
    });

    const langSelect = document.getElementById('globalLanguageSelect');
    if (langSelect) langSelect.value = this.language;

    // Update Wizard labels
    for (let i = 1; i <= this.totalSteps; i++) {
      const label = document.getElementById(`stepNavLabel-${i}`);
      if (label && t.steps[i]) {
        label.textContent = t.steps[i];
      }
    }

    const stepTitle = document.getElementById('currentStepTitle');
    const stepSubtitle = document.getElementById('currentStepSubtitle');
    if (stepTitle) stepTitle.textContent = `${this.currentStep}. ${t.steps[this.currentStep]}`;
    if (stepSubtitle) stepSubtitle.textContent = t.stepSubtitles[this.currentStep];

    const lBack = document.getElementById('lbl_back');
    const lNext = document.getElementById('lbl_next');
    if (lBack) lBack.textContent = t.labels.back;
    if (lNext) lNext.textContent = this.currentStep === 5 ? t.labels.submitKiosk : (this.currentStep === 6 ? t.labels.printSlip : t.labels.next);
  }

  speakCurrentInstructions() {
    const t = window.MEDI_TRANSLATIONS[this.language];
    let text = `${t.steps[this.currentStep]}. ${t.stepSubtitles[this.currentStep]}`;
    if (window.drMedi) {
      window.drMedi.setSpeechText(text, true, this.language);
    } else if (window.mediAudio) {
      window.mediAudio.speakText(text, this.language);
    }
  }

  goToStep(stepNum) {
    if (stepNum < 1 || stepNum > this.totalSteps) return;

    // Step 1 Validation
    if (this.currentStep === 1 && stepNum > 1) {
      const nameInput = document.getElementById('kioskPatientName');
      const ageInput = document.getElementById('kioskPatientAge');
      const mobileInput = document.getElementById('kioskPatientMobile');
      
      if (nameInput) this.state.name = nameInput.value.trim();
      if (ageInput) this.state.age = ageInput.value.trim();
      if (mobileInput) this.state.mobile = mobileInput.value.trim();

      if (!this.state.name) {
        alert(this.language === 'hi' ? "कृपया मरीज का नाम दर्ज करें" : "Please enter patient name");
        if (nameInput) nameInput.focus();
        return;
      }
      if (!this.state.age) this.state.age = "45";
      this.evaluateAiDepartmentRouting();
    }

    // Step 2 -> 3 Smart Reconfirmation Check
    if (this.currentStep === 2 && stepNum === 3) {
      this.checkReconfirmationLogic();
      if (!this.state.needsReconfirmation) {
        stepNum = 4; // Skip to AYUSH if no severe red flag
      }
    }

    // Step 3 -> 4 Validation
    if (this.currentStep === 3 && stepNum === 4 && this.state.needsReconfirmation) {
      if (!this.state.reconfirmationAnswer) {
        alert("Please confirm your severe symptom details before proceeding.");
        return;
      }
    }

    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.currentStep = stepNum;
    this.renderCurrentStep();
    this.updateLanguageUI();
    this.updateStepProgress();

    // Dr. Medi guides each step
    const t = window.MEDI_TRANSLATIONS[this.language];
    if (window.drMedi) {
      window.drMedi.setSpeechText(`${t.steps[this.currentStep]}: ${t.stepSubtitles[this.currentStep]}`, false, this.language);
    }
  }

  updateStepProgress() {
    for (let i = 1; i <= this.totalSteps; i++) {
      const stepDot = document.getElementById(`stepDot-${i}`);
      if (stepDot) {
        if (i < this.currentStep) {
          stepDot.className = 'w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-teal-600 text-white shadow-sm';
          stepDot.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (i === this.currentStep) {
          stepDot.className = 'w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-teal-600 text-white ring-4 ring-teal-100 shadow-md';
          stepDot.textContent = i;
        } else {
          stepDot.className = 'w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm bg-slate-200 text-slate-600';
          stepDot.textContent = i;
        }
      }
    }

    const progBar = document.getElementById('kioskProgressBar');
    if (progBar) {
      const pct = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
      progBar.style.width = `${pct}%`;
    }
  }

  checkReconfirmationLogic() {
    const redFlagIds = ['chest_pain', 'breathless'];
    const selectedRedFlag = this.state.selectedSymptoms.find(s => redFlagIds.includes(s.id));
    const t = window.MEDI_TRANSLATIONS[this.language];

    if (selectedRedFlag && t.reconfirmations && t.reconfirmations[selectedRedFlag.id]) {
      this.state.needsReconfirmation = true;
      this.state.reconfirmationData = {
        symptomId: selectedRedFlag.id,
        ...t.reconfirmations[selectedRedFlag.id]
      };
      if (window.drMedi) window.drMedi.setMood('alert');
      if (window.mediAudio) window.mediAudio.playSound('redflag');
    } else {
      this.state.needsReconfirmation = false;
      this.state.reconfirmationData = null;
    }
  }

  toggleSymptom(symptomKey) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    const t = window.MEDI_TRANSLATIONS[this.language].symptoms[symptomKey];
    if (!t) return;

    const existingIdx = this.state.selectedSymptoms.findIndex(s => s.id === symptomKey);
    if (existingIdx >= 0) {
      this.state.selectedSymptoms.splice(existingIdx, 1);
    } else {
      this.state.selectedSymptoms.push({
        id: symptomKey,
        name: t.name,
        isRedFlag: t.isRedFlag,
        targetDept: t.targetDept
      });
    }
    this.renderStep2Symptoms();
    this.evaluateAiDepartmentRouting();
  }

  setSeverity(sev) {
    this.state.severity = sev;
    if (window.mediAudio) window.mediAudio.playSound('tap');
    document.querySelectorAll('.sev-btn').forEach(btn => {
      if (btn.getAttribute('data-sev') === sev) {
        btn.classList.add('bg-teal-600', 'text-white', 'ring-2', 'ring-teal-400');
        btn.classList.remove('bg-white', 'text-slate-700');
      } else {
        btn.classList.remove('bg-teal-600', 'text-white', 'ring-2', 'ring-teal-400');
        btn.classList.add('bg-white', 'text-slate-700');
      }
    });
  }

  setDuration(dur) {
    this.state.duration = dur;
    if (window.mediAudio) window.mediAudio.playSound('tap');
    document.querySelectorAll('.dur-btn').forEach(btn => {
      if (btn.getAttribute('data-dur') === dur) {
        btn.classList.add('bg-teal-600', 'text-white', 'border-teal-600');
        btn.classList.remove('bg-white', 'text-slate-700');
      } else {
        btn.classList.remove('bg-teal-600', 'text-white', 'border-teal-600');
        btn.classList.add('bg-white', 'text-slate-700');
      }
    });
  }

  setReconfirmationAnswer(optText, isUrgent) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.state.reconfirmationAnswer = {
      question: this.state.reconfirmationData.question,
      answer: optText,
      isUrgent: isUrgent,
      timestamp: new Date().toISOString()
    };
    this.renderStep3Reconfirm();
  }

  setAyushField(field, val) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.state.ayush[field] = val;
    this.renderStep4Ayush();
  }

  // Interactive Camera & Document OCR Scanner
  startCameraScan(sampleIndex = 0) {
    const ocrBox = document.getElementById('ocrStatusContainer');
    const ocrProgBar = document.getElementById('ocrProgressBar');
    const ocrStatusText = document.getElementById('ocrStatusText');
    const ocrResultBox = document.getElementById('ocrResultBox');
    const laser = document.getElementById('cameraLaserGrid');

    if (ocrBox) ocrBox.classList.remove('hidden');
    if (laser) laser.classList.remove('hidden');
    if (ocrResultBox) ocrResultBox.classList.add('hidden');

    if (window.drMedi) window.drMedi.setMood('thinking');

    window.mediOCR.runInteractiveScan(
      sampleIndex,
      (progress, text) => {
        if (ocrProgBar) ocrProgBar.style.width = `${progress}%`;
        if (ocrStatusText) ocrStatusText.textContent = text;
      },
      (doc) => {
        if (laser) laser.classList.add('hidden');
        if (ocrStatusText) ocrStatusText.textContent = "OCR Extraction Verified & Parsed!";
        this.state.ocrDocument = doc;
        this.renderStep5OcrResult(doc);
        if (window.drMedi) window.drMedi.setMood('happy');
      }
    );
  }

  // Token Generation & Checkout Submission
  generateTokenAndSubmit() {
    if (window.mediAudio) window.mediAudio.playSound('success');

    const randNum = Math.floor(100 + Math.random() * 900);
    let prefix = "OPD";
    let isRed = false;

    const hasRedFlagComplaint = this.state.selectedSymptoms.some(s => s.isRedFlag);
    const hasUrgentReconfirm = this.state.reconfirmationAnswer && this.state.reconfirmationAnswer.isUrgent;

    if (hasRedFlagComplaint || hasUrgentReconfirm) {
      prefix = "EMG";
      isRed = true;
      this.state.roomAssigned = "Room 102 (Emergency Cardiac Bay)";
      this.state.estWaitMinutes = 0;
      this.state.appointmentSlot = "IMMEDIATE EMERGENCY TRIAGE";
    } else if (this.state.department === 'ayush') {
      prefix = "AYU";
      this.state.roomAssigned = "Room 108 (AYUSH Holistic Block)";
      this.state.estWaitMinutes = 10;
    } else if (this.state.department === 'pediatrics') {
      prefix = "PED";
      this.state.roomAssigned = "Room 106 (Pediatric Clinic)";
      this.state.estWaitMinutes = 12;
    } else if (this.state.department === 'ortho') {
      prefix = "ORT";
      this.state.roomAssigned = "Room 110 (Orthopedic Wing)";
      this.state.estWaitMinutes = 15;
    } else {
      this.state.roomAssigned = "Room 104 (General Medicine OPD)";
      this.state.estWaitMinutes = 15;
    }

    const tokenStr = `#${prefix}-${randNum}`;
    this.state.tokenNumber = tokenStr;

    // Get Department Full Name
    const deptObj = window.MEDI_TRANSLATIONS[this.language].departments[this.state.department] || { name: "General Medicine" };

    const newPatient = {
      id: `pat-${Date.now()}`,
      tokenNumber: tokenStr,
      name: this.state.name || "Patient",
      age: parseInt(this.state.age) || 45,
      gender: this.state.gender,
      mobile: this.state.mobile || "9876543210",
      abhaId: this.state.abhaId || `ABHA-${Math.floor(10000000000000 + Math.random()*90000000000000)}`,
      language: this.language,
      department: deptObj.name,
      roomAssigned: this.state.roomAssigned,
      appointmentSlot: this.state.appointmentSlot,
      paymentStatus: this.state.paymentStatus,
      paymentReceiptId: this.state.paymentReceiptId,
      createdAt: new Date().toISOString(),
      status: "Intake Complete",
      isRedFlag: isRed,
      isConfirmed: true,
      chiefComplaints: this.state.selectedSymptoms.length > 0 
        ? this.state.selectedSymptoms.map(s => ({
            id: s.id,
            name: s.name,
            severity: this.state.severity,
            duration: this.state.duration
          }))
        : [{ id: "general", name: "General Consultation", severity: "Mild", duration: "Today" }],
      voiceTranscript: this.state.voiceTranscript || "",
      reconfirmationResponse: this.state.reconfirmationAnswer,
      ayushProfile: this.state.ayush,
      ocrDocuments: this.state.ocrDocument ? [{
        docType: this.state.ocrDocument.title,
        fileName: "camera_prescription_scan.jpg",
        extractedMeds: this.state.ocrDocument.extractedMeds,
        extractedLabs: this.state.ocrDocument.extractedLabs
      }] : [],
      doctorNotes: {
        overrideNotes: "",
        provisionalDiagnosis: "",
        rxList: [],
        doctorAdvice: "",
        signedAt: null,
        signedBy: null
      }
    };

    this.savePatientToLocalStorage(newPatient);

    if (window.drMedi) window.drMedi.setMood('happy');

    this.currentStep = 6;
    this.renderCurrentStep();
    this.updateLanguageUI();
    this.updateStepProgress();
  }

  savePatientToLocalStorage(patient) {
    let patients = [];
    try {
      const stored = localStorage.getItem('medi_patients');
      if (stored) {
        patients = JSON.parse(stored);
      } else if (window.INITIAL_PATIENTS) {
        patients = [...window.INITIAL_PATIENTS];
      }
    } catch(e) {
      patients = window.INITIAL_PATIENTS ? [...window.INITIAL_PATIENTS] : [];
    }

    patients.unshift(patient);
    localStorage.setItem('medi_patients', JSON.stringify(patients));
    window.dispatchEvent(new CustomEvent('medi_queue_updated', { detail: patient }));
  }

  // Payment Selection Handlers
  openUpiPaymentModal() {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    const modal = document.getElementById('upiPaymentModal');
    if (modal) modal.classList.remove('hidden');
  }

  closeUpiPaymentModal() {
    const modal = document.getElementById('upiPaymentModal');
    if (modal) modal.classList.add('hidden');
  }

  simulateUpiPaymentSuccess() {
    if (window.mediAudio) window.mediAudio.playSound('success');
    this.state.paymentStatus = 'Paid via UPI QR (GPay/PhonePe)';
    this.closeUpiPaymentModal();
    const payStatusEl = document.getElementById('tokenPaymentStatusBadge');
    if (payStatusEl) {
      payStatusEl.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800";
      payStatusEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Paid ₹50 via UPI (#RCP-8821)`;
    }
    alert("✅ UPI Payment of ₹50 Received Successfully! Digital Receipt #RCP-8821 generated.");
  }

  setPaymentMethod(method) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.state.paymentStatus = method;
    const payStatusEl = document.getElementById('tokenPaymentStatusBadge');
    if (payStatusEl) {
      payStatusEl.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800";
      payStatusEl.innerHTML = `<i class="fa-solid fa-check"></i> ${method}`;
    }
  }

  // Cancel Appointment & Request Refund
  openCancelRefundModal() {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    const modal = document.getElementById('refundModal');
    if (modal) modal.classList.remove('hidden');
  }

  closeCancelRefundModal() {
    const modal = document.getElementById('refundModal');
    if (modal) modal.classList.add('hidden');
  }

  executeRefundAndCancel() {
    if (window.mediAudio) window.mediAudio.playSound('success');
    
    // Remove current patient token from LocalStorage queue
    try {
      const stored = localStorage.getItem('medi_patients');
      if (stored) {
        let patients = JSON.parse(stored);
        patients = patients.filter(p => p.tokenNumber !== this.state.tokenNumber);
        localStorage.setItem('medi_patients', JSON.stringify(patients));
        window.dispatchEvent(new CustomEvent('medi_queue_updated'));
      }
    } catch(e) {}

    this.closeCancelRefundModal();
    alert("🔄 Appointment Cancelled Successfully!\nRefund of ₹50 has been processed immediately to your original UPI/Source account.");
    this.resetKiosk();
  }

  resetKiosk() {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.currentStep = 1;
    this.state = {
      name: '',
      age: '',
      gender: 'Male',
      mobile: '',
      abhaId: '',
      department: 'general',
      autoRoutedDepartment: null,
      selectedSymptoms: [],
      severity: 'Moderate',
      duration: '2 - 3 Days',
      voiceTranscript: '',
      liveInterimText: '',
      needsReconfirmation: false,
      reconfirmationData: null,
      reconfirmationAnswer: null,
      ayush: {
        agni: 'Samagni (Normal / Balanced)',
        nidra: 'Sound & Deep (6-8 hours)',
        koshtha: 'Madhyama (Regular / Smooth)',
        diet: 'Vegetarian'
      },
      ocrDocument: null,
      tokenNumber: '',
      roomAssigned: 'Room 104',
      estWaitMinutes: 15,
      appointmentSlot: 'Today at 10:45 AM (Slot #4)',
      paymentStatus: 'Paid via UPI QR',
      paymentReceiptId: '#RCP-8821',
      feeAmount: 50
    };
    if (window.drMedi) window.drMedi.setMood('greeting');
    this.renderCurrentStep();
    this.updateLanguageUI();
    this.updateStepProgress();
  }

  // Step Rendering Engines
  renderCurrentStep() {
    for (let i = 1; i <= this.totalSteps; i++) {
      const el = document.getElementById(`kioskStep-${i}`);
      if (el) {
        if (i === this.currentStep) {
          el.classList.remove('hidden');
          el.classList.add('fade-in');
        } else {
          el.classList.add('hidden');
          el.classList.remove('fade-in');
        }
      }
    }

    if (this.currentStep === 1) this.renderStep1Identity();
    else if (this.currentStep === 2) this.renderStep2Symptoms();
    else if (this.currentStep === 3) this.renderStep3Reconfirm();
    else if (this.currentStep === 4) this.renderStep4Ayush();
    else if (this.currentStep === 5) this.renderStep5Ocr();
    else if (this.currentStep === 6) this.renderStep6Token();
  }

  renderStep1Identity() {
    const t = window.MEDI_TRANSLATIONS[this.language].labels;
    const lName = document.getElementById('lbl_fullName');
    const lAge = document.getElementById('lbl_age');
    const lGender = document.getElementById('lbl_gender');
    const lMobile = document.getElementById('lbl_mobile');
    const lAbha = document.getElementById('lbl_abha');
    const lDept = document.getElementById('lbl_dept');

    if (lName) lName.textContent = t.fullName;
    if (lAge) lAge.textContent = t.age;
    if (lGender) lGender.textContent = t.gender;
    if (lMobile) lMobile.textContent = t.mobile;
    if (lAbha) lAbha.textContent = t.abhaNumber;
    if (lDept) lDept.textContent = t.deptPreference;

    const inName = document.getElementById('kioskPatientName');
    const inAge = document.getElementById('kioskPatientAge');
    const inMobile = document.getElementById('kioskPatientMobile');
    const inAbha = document.getElementById('kioskPatientAbha');

    if (inName) inName.placeholder = t.fullNamePlaceholder;
    if (inAge) inAge.placeholder = t.agePlaceholder;
    if (inMobile) inMobile.placeholder = t.mobilePlaceholder;
    if (inAbha) inAbha.placeholder = t.abhaPlaceholder;

    this.renderDepartmentsGrid();
  }

  renderDepartmentsGrid() {
    const grid = document.getElementById('expandedDepartmentsGrid');
    if (!grid) return;
    const depts = window.MEDI_TRANSLATIONS[this.language].departments;

    const icons = {
      general: "fa-user-doctor text-teal-600",
      ayush: "fa-spa text-emerald-600",
      ortho: "fa-bone text-purple-600",
      pediatrics: "fa-baby text-amber-500",
      derma: "fa-hand-dots text-pink-500",
      cardio: "fa-heart-pulse text-red-500",
      ent: "fa-head-side-cough text-blue-500",
      gynae: "fa-person-pregnant text-rose-500",
      pulmo: "fa-lungs text-cyan-600",
      ophthal: "fa-eye text-indigo-500"
    };

    grid.innerHTML = Object.keys(depts).map(key => {
      const d = depts[key];
      const isSelected = this.state.department === key;
      const isAuto = this.state.autoRoutedDepartment === key;

      return `
        <div onclick="window.kioskApp.selectDepartment('${key}')" 
             data-dept="${key}"
             class="dept-card kiosk-card p-3 rounded-2xl border-2 transition-all cursor-pointer relative ${isSelected ? 'selected border-teal-600 bg-teal-50/80 ring-2 ring-teal-400' : 'border-slate-200 bg-white hover:border-teal-400'}">
          <div class="flex items-center justify-between mb-1">
            <i class="fa-solid ${icons[key] || 'fa-stethoscope'} text-lg"></i>
            <span class="ai-routed-pill ${isAuto ? '' : 'hidden'} text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 animate-pulse">
              ✨ AI Routed
            </span>
          </div>
          <h5 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">${d.name}</h5>
          <p class="text-[11px] text-slate-500 mt-0.5 truncate">${d.sub}</p>
        </div>
      `;
    }).join('');
  }

  selectDepartment(deptKey) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.state.department = deptKey;
    this.highlightSelectedDepartmentCard();
  }

  renderStep2Symptoms() {
    const t = window.MEDI_TRANSLATIONS[this.language];
    const grid = document.getElementById('symptomsGrid');
    if (!grid) return;

    const icons = {
      fever: "fa-temperature-high text-amber-500",
      cough: "fa-head-side-cough text-blue-500",
      stomach_pain: "fa-virus text-emerald-600",
      chest_pain: "fa-heart-pulse text-red-500",
      breathless: "fa-lungs text-teal-600",
      joint_pain: "fa-bone text-purple-600",
      headache: "fa-brain text-indigo-500",
      skin_rash: "fa-hand-dots text-pink-500"
    };

    grid.innerHTML = Object.keys(t.symptoms).map(key => {
      const sym = t.symptoms[key];
      const isSelected = this.state.selectedSymptoms.some(s => s.id === key);
      const selClass = isSelected ? (sym.isRedFlag ? 'emergency-selected border-red-500' : 'selected border-teal-600') : 'border-slate-200 bg-white';
      const redBadge = sym.isRedFlag ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700"><i class="fa-solid fa-triangle-exclamation"></i> Emergency</span>` : '';

      return `
        <div onclick="window.kioskApp.toggleSymptom('${key}')" 
             class="kiosk-card p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${selClass} min-h-[120px]">
          <div class="flex items-start justify-between">
            <div class="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-xl">
              <i class="fa-solid ${icons[key] || 'fa-notes-medical'}"></i>
            </div>
            ${redBadge}
          </div>
          <div class="mt-3">
            <h4 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">${sym.name}</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">${sym.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  renderStep3Reconfirm() {
    const t = window.MEDI_TRANSLATIONS[this.language];
    const data = this.state.reconfirmationData;
    if (!data) return;

    const qEl = document.getElementById('reconfirmQuestionText');
    const optsEl = document.getElementById('reconfirmOptionsContainer');

    if (qEl) qEl.textContent = data.question;

    if (optsEl) {
      optsEl.innerHTML = data.options.map((opt) => {
        const isSelected = this.state.reconfirmationAnswer && this.state.reconfirmationAnswer.answer === opt.text;
        const selClass = isSelected 
          ? (opt.isUrgent ? 'border-red-600 bg-red-50 ring-2 ring-red-400' : 'border-teal-600 bg-teal-50 ring-2 ring-teal-400')
          : 'border-slate-200 bg-white hover:border-slate-300';
        const urgentBadge = opt.isUrgent 
          ? `<span class="bg-red-600 text-white font-bold text-xs px-2.5 py-1 rounded-full"><i class="fa-solid fa-circle-exclamation mr-1"></i> Priority 1 Triage</span>` 
          : `<span class="bg-slate-200 text-slate-700 font-medium text-xs px-2.5 py-1 rounded-full">Standard</span>`;

        return `
          <div onclick="window.kioskApp.setReconfirmationAnswer('${opt.text.replace(/'/g, "\\'")}', ${opt.isUrgent})"
               class="kiosk-card p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${selClass}">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full flex items-center justify-center border-2 ${isSelected ? (opt.isUrgent ? 'border-red-600 bg-red-600 text-white' : 'border-teal-600 bg-teal-600 text-white') : 'border-slate-300 bg-white'}">
                ${isSelected ? '<i class="fa-solid fa-check text-xs"></i>' : ''}
              </div>
              <p class="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">${opt.text}</p>
            </div>
            ${urgentBadge}
          </div>
        `;
      }).join('');
    }
  }

  renderStep4Ayush() {
    const highlightCard = (selector, isSelected) => {
      document.querySelectorAll(selector).forEach(el => {
        const val = el.getAttribute('data-value');
        if (val === isSelected) {
          el.classList.add('selected', 'border-teal-600', 'bg-teal-50');
          el.classList.remove('bg-white', 'border-slate-200');
        } else {
          el.classList.remove('selected', 'border-teal-600', 'bg-teal-50');
          el.classList.add('bg-white', 'border-slate-200');
        }
      });
    };

    highlightCard('.agni-card', this.state.ayush.agni);
    highlightCard('.nidra-card', this.state.ayush.nidra);
    highlightCard('.koshtha-card', this.state.ayush.koshtha);
  }

  renderStep5Ocr() {}

  renderStep5OcrResult(doc) {
    const resBox = document.getElementById('ocrResultBox');
    if (!resBox) return;

    resBox.classList.remove('hidden');
    resBox.classList.add('fade-in');

    const medsList = doc.extractedMeds.map(m => `
      <li class="flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
        <i class="fa-solid fa-pills text-teal-600"></i> ${m}
      </li>
    `).join('');

    const labsList = doc.extractedLabs.map(l => `
      <li class="flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
        <i class="fa-solid fa-flask text-blue-600"></i> ${l}
      </li>
    `).join('');

    resBox.innerHTML = `
      <div class="p-4 rounded-xl bg-white border border-teal-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <span class="text-xs font-bold uppercase tracking-wider text-teal-700"><i class="fa-solid fa-file-prescription mr-1"></i> ${doc.title}</span>
          <span class="text-xs text-slate-500">${doc.confidenceScore}</span>
        </div>
        <div>
          <h5 class="text-xs font-bold text-slate-700 mb-1.5"><i class="fa-solid fa-capsules text-teal-600 mr-1"></i> Identified Medications:</h5>
          <ul class="flex flex-wrap gap-2">${medsList}</ul>
        </div>
        <div>
          <h5 class="text-xs font-bold text-slate-700 mb-1.5"><i class="fa-solid fa-chart-line text-blue-600 mr-1"></i> Identified Labs & Vitals:</h5>
          <ul class="flex flex-wrap gap-2">${labsList}</ul>
        </div>
      </div>
    `;
  }

  renderStep6Token() {
    const t = window.MEDI_TRANSLATIONS[this.language].labels;
    const tokenDisplay = document.getElementById('tokenDisplayNumber');
    const tokenName = document.getElementById('tokenDisplayName');
    const tokenRoom = document.getElementById('tokenDisplayRoom');
    const tokenSlot = document.getElementById('tokenDisplaySlot');
    const tokenDept = document.getElementById('tokenDisplayDept');
    const tokenBadge = document.getElementById('tokenPriorityBadge');

    const deptObj = window.MEDI_TRANSLATIONS[this.language].departments[this.state.department] || { name: "General Medicine" };

    if (tokenDisplay) tokenDisplay.textContent = this.state.tokenNumber;
    if (tokenName) tokenName.textContent = `${this.state.name} (${this.state.age}y / ${this.state.gender})`;
    if (tokenRoom) tokenRoom.textContent = this.state.roomAssigned;
    if (tokenSlot) tokenSlot.textContent = this.state.appointmentSlot;
    if (tokenDept) tokenDept.textContent = deptObj.name;

    const hasRedFlag = this.state.tokenNumber.startsWith('#EMG');
    if (tokenBadge) {
      if (hasRedFlag) {
        tokenBadge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white pulse-red";
        tokenBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> PRIORITY 1 EMERGENCY TRIAGE`;
      } else {
        tokenBadge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800";
        tokenBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Standard Intake Complete`;
      }
    }
  }

  printThermalSlip() {
    window.print();
  }
}

window.kioskApp = new PatientKioskApp();
