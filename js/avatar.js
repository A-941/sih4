// AI Virtual Health Assistant ("Dr. Medi") - 2D Animated Doctor Avatar
class DrMediAvatar {
  constructor() {
    this.containerId = 'drMediAvatarContainer';
    this.speechBubbleId = 'drMediSpeechBubble';
    this.currentMood = 'greeting'; // 'greeting', 'idle', 'speaking', 'listening', 'thinking', 'alert', 'happy'
    this.isMouthMoving = false;
    this.mouthAnimInterval = null;
    this.eyeBlinkInterval = null;
    this.isBlinking = false;
    this.currentText = "Hello! I am Dr. Medi, your AI health guide. Tap me if you need any assistance!";
  }

  init() {
    this.renderAvatar();
    this.startEyeBlinking();
  }

  setMood(mood) {
    this.currentMood = mood;
    const moodBadge = document.getElementById('drMediMoodBadge');
    const avatarSvg = document.getElementById('drMediSvg');
    
    if (mood === 'speaking') {
      this.startMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 animate-pulse";
        moodBadge.innerHTML = `<i class="fa-solid fa-waveform-lines"></i> Speaking...`;
      }
    } else if (mood === 'listening') {
      this.stopMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 animate-bounce";
        moodBadge.innerHTML = `<i class="fa-solid fa-ear-listen"></i> Listening to you...`;
      }
    } else if (mood === 'alert') {
      this.stopMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-600 text-white pulse-red";
        moodBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Emergency Priority`;
      }
    } else if (mood === 'thinking') {
      this.stopMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800";
        moodBadge.innerHTML = `<i class="fa-solid fa-brain fa-spin"></i> AI Routing...`;
      }
    } else if (mood === 'happy') {
      this.stopMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800";
        moodBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Token Ready!`;
      }
    } else {
      this.stopMouthAnimation();
      if (moodBadge) {
        moodBadge.className = "inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700";
        moodBadge.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles text-teal-600"></i> Virtual Guide`;
      }
    }
  }

  setSpeechText(text, autoSpeak = false, lang = 'hi') {
    this.currentText = text;
    const bubble = document.getElementById(this.speechBubbleId);
    if (bubble) {
      bubble.textContent = text;
      bubble.classList.remove('hidden');
      bubble.classList.add('fade-in');
    }
    if (autoSpeak && window.mediAudio) {
      window.mediAudio.speakText(text, lang);
    }
  }

  startMouthAnimation() {
    if (this.mouthAnimInterval) return;
    let mouthOpen = false;
    this.mouthAnimInterval = setInterval(() => {
      const mouth = document.getElementById('drMediMouth');
      if (mouth) {
        mouthOpen = !mouthOpen;
        if (mouthOpen) {
          mouth.setAttribute('d', 'M 58 75 Q 70 88 82 75 Q 70 82 58 75'); // Open smiling mouth
          mouth.setAttribute('fill', '#e11d48');
        } else {
          mouth.setAttribute('d', 'M 60 76 Q 70 82 80 76'); // Closed smile
          mouth.setAttribute('fill', 'none');
        }
      }
    }, 160);
  }

  stopMouthAnimation() {
    if (this.mouthAnimInterval) {
      clearInterval(this.mouthAnimInterval);
      this.mouthAnimInterval = null;
    }
    const mouth = document.getElementById('drMediMouth');
    if (mouth) {
      mouth.setAttribute('d', 'M 60 76 Q 70 82 80 76');
      mouth.setAttribute('fill', 'none');
    }
  }

  startEyeBlinking() {
    this.eyeBlinkInterval = setInterval(() => {
      const leftEye = document.getElementById('drMediLeftEye');
      const rightEye = document.getElementById('drMediRightEye');
      if (leftEye && rightEye) {
        // Blink closed
        leftEye.setAttribute('r', '0.8');
        leftEye.setAttribute('cy', '55');
        rightEye.setAttribute('r', '0.8');
        rightEye.setAttribute('cy', '55');
        setTimeout(() => {
          leftEye.setAttribute('r', '4');
          leftEye.setAttribute('cy', '54');
          rightEye.setAttribute('r', '4');
          rightEye.setAttribute('cy', '54');
        }, 180);
      }
    }, 3800);
  }

  handleAvatarClick() {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    const lang = window.kioskApp ? window.kioskApp.language : 'hi';
    const greetings = {
      en: "Hi! I am Dr. Medi. I can help you enter your symptoms by speech or touch!",
      hi: "नमस्ते! मैं डॉ. मेडी हूँ। आप बोलकर या छूकर अपने लक्षण बता सकते हैं।",
      gu: "નમસ્તે! હું ડૉ. મેડી છું. તમે બોલીને અથવા સ્ક્રીન પર સ્પર્શ કરીને માહિતી આપી શકો છો.",
      ta: "வணக்கம்! நான் டாக்டர் மெடி. உங்கள் அறிகுறிகளை எளிதாக பதிவு செய்யலாம்.",
      te: "నమస్కారం! నేను డాక్టర్ మెడి. మీ లక్షణాలను సులభంగా నమోదు చేసుకోండి.",
      bn: "নমস্কার! আমি ডঃ মেডি। আপনার স্বাস্থ্য উপসর্গ সহজে জানাতে পারেন।",
      mr: "नमस्कार! मी डॉ. मेडी आहे. आपण बोलून किंवा स्पर्श करून माहिती देऊ शकता.",
      kn: "ನಮಸ್ಕಾರ! ನಾನು ಡಾ. ಮೆಡಿ. ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಸುಲಭವಾಗಿ ದಾಖಲಿಸಿ.",
      ml: "നമസ്കാരം! ഞാൻ ഡോ. മെഡി. നിങ്ങളുടെ ലക്ഷണങ്ങൾ എളുപ്പത്തിൽ രേഖപ്പെടുത്താം.",
      pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਡਾ. ਮੇਡੀ ਹਾਂ। ਤੁਸੀਂ ਬੋਲ ਕੇ ਜਾਂ ਛੂਹ ਕੇ ਲੱਛਣ ਦੱਸ ਸਕਦੇ ਹੋ।",
      or: "ନମସ୍କାର! ମୁଁ ଡା. ମେଡି। ଆପଣ କହି କିମ୍ବା ସ୍ପର୍ଶ କରି ସୂଚନା ଦେଇପାରିବେ।"
    };
    const text = greetings[lang] || greetings.en;
    this.setSpeechText(text, true, lang);
  }

  renderAvatar() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="relative flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-emerald-500/10 border border-teal-200/80 shadow-sm backdrop-blur-sm">
        
        <!-- Animated Doctor Avatar SVG (Clickable) -->
        <div onclick="window.drMedi.handleAvatarClick()" 
             class="relative cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
             title="Tap Dr. Medi to speak!">
          
          <!-- Pulsing Halo Glow -->
          <div class="absolute inset-0 rounded-full bg-teal-400/30 blur-md animate-pulse"></div>

          <svg id="drMediSvg" viewBox="0 0 140 140" class="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md">
            <!-- Doctor Coat / Body -->
            <path d="M 30 135 C 30 100, 50 95, 70 95 C 90 95, 110 100, 110 135 Z" fill="#ffffff" stroke="#0d9488" stroke-width="3"/>
            <!-- Stethoscope Tube -->
            <path d="M 46 95 C 46 115, 60 126, 70 126 C 80 126, 94 115, 94 95" fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round"/>
            <circle cx="70" cy="126" r="5.5" fill="#06b6d4" stroke="#0f766e" stroke-width="2"/>
            <!-- Tie / Collar -->
            <polygon points="70,95 64,112 70,118 76,112" fill="#0d9488"/>
            <path d="M 54 95 L 70 108 L 86 95" fill="none" stroke="#cbd5e1" stroke-width="2.5"/>

            <!-- Head & Face -->
            <circle cx="70" cy="58" r="32" fill="#fed7aa" stroke="#fdba74" stroke-width="2"/>
            <!-- Anime Hair -->
            <path d="M 38 52 C 38 28, 60 22, 70 22 C 85 22, 102 28, 102 52 C 95 40, 85 36, 70 38 C 55 36, 45 42, 38 52 Z" fill="#1e293b"/>
            <path d="M 44 42 C 55 30, 75 30, 88 40" fill="none" stroke="#334155" stroke-width="3" stroke-linecap="round"/>

            <!-- Doctor Cap with Red Cross -->
            <path d="M 46 28 C 46 16, 94 16, 94 28 Z" fill="#ffffff" stroke="#0d9488" stroke-width="2.5"/>
            <rect x="67" y="19" width="6" height="12" fill="#ef4444" rx="1"/>
            <rect x="64" y="22" width="12" height="6" fill="#ef4444" rx="1"/>

            <!-- Cheeks Blush -->
            <circle cx="48" cy="62" r="4.5" fill="#fca5a5" opacity="0.6"/>
            <circle cx="92" cy="62" r="4.5" fill="#fca5a5" opacity="0.6"/>

            <!-- Eyes -->
            <circle id="drMediLeftEye" cx="54" cy="54" r="4" fill="#0f172a"/>
            <circle cx="55.5" cy="52.5" r="1.5" fill="#ffffff"/>
            <circle id="drMediRightEye" cx="86" cy="54" r="4" fill="#0f172a"/>
            <circle cx="87.5" cy="52.5" r="1.5" fill="#ffffff"/>

            <!-- Eyebrows -->
            <path d="M 48 46 Q 54 43 60 46" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
            <path d="M 80 46 Q 86 43 92 46" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round"/>

            <!-- Glasses (Friendly Doctor Look) -->
            <circle cx="54" cy="54" r="9" fill="none" stroke="#0d9488" stroke-width="2"/>
            <circle cx="86" cy="54" r="9" fill="none" stroke="#0d9488" stroke-width="2"/>
            <line x1="63" y1="54" x2="77" y2="54" stroke="#0d9488" stroke-width="2"/>

            <!-- Nose -->
            <circle cx="70" cy="65" r="1.5" fill="#ea580c"/>

            <!-- Mouth (Animated) -->
            <path id="drMediMouth" d="M 60 76 Q 70 82 80 76" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
          </svg>

          <!-- Voice Mic Activity Icon -->
          <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] shadow border-2 border-white">
            <i class="fa-solid fa-stethoscope"></i>
          </div>
        </div>

        <!-- Assistant Speech Bubble & Info -->
        <div class="flex-1">
          <div class="flex items-center justify-between gap-2 mb-1">
            <div class="flex items-center gap-1.5">
              <h4 class="text-xs sm:text-sm font-extrabold text-slate-800">Dr. Medi</h4>
              <span class="text-[10px] text-teal-700 font-semibold">(AI Health Companion)</span>
            </div>
            <span id="drMediMoodBadge" class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
              <i class="fa-solid fa-wand-magic-sparkles text-teal-600"></i> Virtual Guide
            </span>
          </div>

          <!-- Dynamic Speech Bubble Content -->
          <div class="relative bg-white p-2.5 rounded-xl border border-teal-200 shadow-sm">
            <p id="${this.speechBubbleId}" class="text-xs text-slate-700 font-medium leading-relaxed">
              ${this.currentText}
            </p>
          </div>
        </div>

      </div>
    `;
  }
}

window.drMedi = new DrMediAvatar();
