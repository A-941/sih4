// Multilingual Dictionary for MediKiosk (11 Indian Regional Languages)
window.MEDI_TRANSLATIONS = {
  // 1. HINDI
  hi: {
    langName: "हिन्दी",
    nativeName: "हिन्दी",
    bcp47: "hi-IN",
    tagline: "एआई डिजिटल मरीज क्लिनिकल इनटेक कियोस्क",
    avatarWelcome: "नमस्ते! मैं डॉ. मेडी हूँ। आप अपनी भाषा में बोलकर या छूकर जानकारी भर सकते हैं।",
    steps: {
      1: "भाषा और पहचान",
      2: "लक्षण एवं आवाज",
      3: "सुरक्षा पुनः पुष्टि",
      4: "आयुष / जीवनशैली",
      5: "दस्तावेज़ स्कैनर",
      6: "टोकन एवं भुगतान"
    },
    stepSubtitles: {
      1: "अपनी भाषा चुनें और नाम, उम्र, मोबाइल दर्ज करें",
      2: "माइक दबाकर बोलें या लक्षण कार्ड चुनें (एआई स्वतः विभाग चुनेगा)",
      3: "गंभीर लक्षणों की क्लिनिकल सुरक्षा जांच",
      4: "आयुर्वेदिक पाचन अग्नि, नींद और पेट साफ होने की स्थिति",
      5: "कैमरा स्कैनर से पुरानी दवा पर्ची या लैब रिपोर्ट पढ़ें",
      6: "अपॉइंटमेंट टोकन, यूपीआई भुगतान एवं रसीद"
    },
    labels: {
      selectLanguage: "भाषा चुनें (11 भारतीय भाषाएं)",
      fullName: "मरीज का पूरा नाम",
      fullNamePlaceholder: "उदा. रमेश पटेल",
      age: "उम्र (वर्ष)",
      agePlaceholder: "उदा. 45",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      mobile: "मोबाइल नंबर",
      mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
      abhaNumber: "आभा आईडी (वैकल्पिक)",
      abhaPlaceholder: "14 अंकों का आभा नंबर",
      deptPreference: "परामर्श विभाग (AI द्वारा ऑटो-सुझाव)",
      aiRecommendedBadge: "✨ एआई अनुशंसित",
      next: "आगे बढ़ें",
      back: "पीछे जाएं",
      submitKiosk: "टोकन प्राप्त करें",
      speakHelp: "आवाज से सुनें",
      listening: "सुन रहे हैं... माइक के पास बोलें",
      tapToSpeak: "बोलकर लक्षण बताएं (Speech-to-Text)",
      voiceLiveBanner: "लाइव आवाज अनुवाद:",
      severity: "तकलीफ की तीव्रता",
      severityMild: "हल्का (कामकाज में बाधा नहीं)",
      severityMod: "मध्यम (दैनिक काम प्रभावित)",
      severitySevere: "अत्यधिक तेज / आपातकालीन",
      duration: "यह समस्या कितने समय से है?",
      durToday: "आज शुरू हुआ (< 24 घंटे)",
      durFewDays: "2 से 3 दिन",
      durWeek: "लगभग 1 सप्ताह",
      durMonth: "1 महीने से अधिक (पुरानी)",
      cameraScanTitle: "कैमरा दस्तावेज़ स्कैनर (Interactive Scanner)",
      cameraScanSub: "दवा पर्ची को कैमरे के सामने रखें या सैंपल बटन दबाएं",
      snapDocBtn: "फोटो खींचें और स्कैन करें",
      scanningLaser: "एआई द्वारा दवाएं और रिपोर्ट पहचानी जा रही हैं...",
      tokenSuccess: "अपॉइंटमेंट सफलतापूर्वक बुक हो गया!",
      appointmentSlot: "अनुमानित परामर्श समय:",
      slotTime: "आज पूर्वाह्न 10:45 (स्लॉट #4)",
      tokenNumber: "टोकन संख्या",
      estWait: "अनुमानित प्रतीक्षा",
      roomAssigned: "कक्ष संख्या",
      feeTitle: "ओपीडी परामर्श शुल्क",
      feeAmount: "₹50 (सामान्य ओपीडी)",
      payMethod: "भुगतान विधि चुनें",
      payUpi: "यूपीआई क्यूआर (GPay / PhonePe / Paytm)",
      payCash: "ओपीडी काउंटर पर नकद",
      payPmjay: "आयुष्मान भारत (मुफ्त छूट)",
      upiScanText: "अपने मोबाइल से यूपीआई क्यूआर कोड स्कैन करें",
      paySuccessNotice: "✅ भुगतान सफल (रसीद सं. #RCP-8821)",
      cancelApptBtn: "अपॉइंटमेंट रद्द करें / रिफंड पाएं",
      refundModalTitle: "अपॉइंटमेंट रद्दीकरण एवं रिफंड",
      refundSuccess: "अपॉइंटमेंट रद्द कर दिया गया है। शुल्क (₹50) तुरंत आपके मूल खाते में वापस भेज दिया गया है।",
      printSlip: "पर्ची प्रिंट करें"
    },
    departments: {
      general: { name: "सामान्य चिकित्सा", sub: "बुखार, सर्दी, संक्रमण, बीपी" },
      ayush: { name: "आयुर्वेद एवं पंचकर्म", sub: "पाचन, जीवनशैली, समग्र स्वास्थ्य" },
      ortho: { name: "हड्डी एवं जोड़ रोग", sub: "घुटने का दर्द, रीढ़, फ्रैक्चर" },
      pediatrics: { name: "शिशु एवं बाल रोग", sub: "बच्चों का बुखार, टीकाकरण, वृद्धि" },
      derma: { name: "त्वचा एवं चर्म रोग", sub: "खुजली, दाद, मुहासे, एलर्जी" },
      cardio: { name: "हृदय रोग विभाग", sub: "छाती में दर्द, घबराहट, बीपी" },
      ent: { name: "कान, नाक एवं गला", sub: "गले में दर्द, साइनस, कान बहना" },
      gynae: { name: "स्त्री एवं प्रसूति रोग", sub: "मासिक धर्म, मातृत्व, महिला स्वास्थ्य" },
      pulmo: { name: "श्वसन एवं छाती रोग", sub: "अस्थमा, सांस फूलना, पुरानी खांसी" },
      ophthal: { name: "नेत्र रोग विभाग", sub: "आंखों में जलन, धुंधला दिखना" }
    },
    symptoms: {
      fever: { name: "बुखार और कंपकंपी", desc: "तेज तापमान, शरीर में गर्मी, ठंड लगना", isRedFlag: false, targetDept: "general" },
      cough: { name: "खांसी और जुकाम", desc: "सूखी या बलगम वाली खांसी, गले में खराश", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "पेट में तेज दर्द व मरोड़", desc: "मरोड़, अपच, गैस, उल्टी", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "छाती में दर्द व भारीपन", desc: "छाती में जकड़न, बाएं हाथ में दर्द का फैलना", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "सांस लेने में तकलीफ", desc: "सांस फूलना, घबराहट, सीने में घरघराहट", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "जोड़ों एवं घुटनों का दर्द", desc: "घुटनों में सूजन, जकड़न, चलने में कष्ट", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "त्वचा पर दाने व खुजली", desc: "एलर्जी, लाल चकत्ते, खुजली और सूजन", isRedFlag: false, targetDept: "derma" },
      headache: { name: "तेज सिरदर्द व चक्कर", desc: "माइग्रेन, आंखों के आगे अंधेरा", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "क्या यह छाती का दर्द लगातार भारी दबाव जैसा है और बाएं हाथ, जबड़े या कंधे की तरफ फैल रहा है?",
        options: [
          { text: "छाती पर लगातार भारी दबाव व बाएं हाथ में दर्द (तुरंत आपातकालीन सहायता जरूरी)", isUrgent: true },
          { text: "केवल गहरी सांस लेने या खांसने पर हल्का चुभन जैसा दर्द", isUrgent: false },
          { text: "खाना खाने के बाद सीने में जलन (एसिडिटी / गैस)", isUrgent: false }
        ]
      },
      breathless: {
        question: "क्या आपको चुपचाप बैठे रहने पर भी सांस लेने में बहुत कठिनाई और पसीना आ रहा है?",
        options: [
          { text: "बैठे रहने पर भी तेज सांस फूलना और घबराहट (आपातकालीन रेड-फ्लैग)", isUrgent: true },
          { text: "केवल सीढ़ियां चढ़ने या तेज चलने पर सांस फूलना", isUrgent: false },
          { text: "रात को सोते समय कभी-कभी घरघराहट होना", isUrgent: false }
        ]
      }
    }
  },

  // 2. ENGLISH
  en: {
    langName: "English",
    nativeName: "English",
    bcp47: "en-IN",
    tagline: "AI Clinical Intake & Triage Kiosk",
    avatarWelcome: "Hello! I am Dr. Medi. Speak into the microphone or touch the screen to enter your details.",
    steps: {
      1: "Language & Identity",
      2: "Symptoms & Voice",
      3: "Safety Verification",
      4: "AYUSH / Vitality",
      5: "Document Scanner",
      6: "Token & Payment"
    },
    stepSubtitles: {
      1: "Select preferred language and enter identity details",
      2: "Speak symptoms into mic or tap cards (AI auto-routes department)",
      3: "Clinical double-check safety protocol for severe symptoms",
      4: "Holistic digestive fire, sleep patterns, and daily vitality",
      5: "Interactive camera edge-detection prescription scanner",
      6: "Appointment confirmation, UPI fee payment & refund option"
    },
    labels: {
      selectLanguage: "Select Language (11 Regional Languages)",
      fullName: "Full Patient Name",
      fullNamePlaceholder: "e.g. Ramesh Patel",
      age: "Age (Years)",
      agePlaceholder: "e.g. 45",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      mobile: "Mobile Number",
      mobilePlaceholder: "10-digit mobile number",
      abhaNumber: "ABHA ID (Optional)",
      abhaPlaceholder: "14-digit ABHA Number",
      deptPreference: "Consultation Department (AI Auto-Routed)",
      aiRecommendedBadge: "✨ AI Suggested",
      next: "Continue",
      back: "Go Back",
      submitKiosk: "Generate Token",
      speakHelp: "Voice Guidance",
      listening: "Listening... Speak clearly into the microphone",
      tapToSpeak: "Tap to Speak Symptoms (Speech-to-Text)",
      voiceLiveBanner: "Live Voice Transcription:",
      severity: "Severity Level",
      severityMild: "Mild (Manageable)",
      severityMod: "Moderate (Impacting daily routine)",
      severitySevere: "Severe (Emergency / High Pain)",
      duration: "Duration of Problem",
      durToday: "Started Today (< 24 hrs)",
      durFewDays: "2 - 3 Days",
      durWeek: "About 1 Week",
      durMonth: "More than 1 Month (Chronic)",
      cameraScanTitle: "Camera Document Scanner (Interactive OCR)",
      cameraScanSub: "Hold prescription in front of camera box or click sample presets",
      snapDocBtn: "Snap & Extract Text",
      scanningLaser: "AI is extracting past medications and lab findings...",
      tokenSuccess: "Appointment Booked Successfully!",
      appointmentSlot: "Estimated Consultation Slot:",
      slotTime: "Today at 10:45 AM (Slot #4)",
      tokenNumber: "Token Number",
      estWait: "Estimated Wait",
      roomAssigned: "Room Assigned",
      feeTitle: "OPD Consultation Fee",
      feeAmount: "₹50 (Standard OPD)",
      payMethod: "Select Payment Option",
      payUpi: "UPI QR (GPay / PhonePe / Paytm / BHIM)",
      payCash: "Pay Cash at OPD Counter",
      payPmjay: "Ayushman Bharat / PMJAY (Free)",
      upiScanText: "Scan this UPI QR code with any payment app",
      paySuccessNotice: "✅ Payment Received (Receipt #RCP-8821)",
      cancelApptBtn: "Cancel Appointment & Request Refund",
      refundModalTitle: "Appointment Cancellation & Refund",
      refundSuccess: "Appointment cancelled successfully. Fee (₹50) has been refunded immediately to source.",
      printSlip: "Print Thermal Slip"
    },
    departments: {
      general: { name: "General Medicine", sub: "Fever, cold, viral, hypertension" },
      ayush: { name: "Ayurveda & Panchakarma", sub: "Digestion, holistic, chronic care" },
      ortho: { name: "Orthopedics & Spine", sub: "Joint pain, knee swelling, fractures" },
      pediatrics: { name: "Pediatrics & Child Care", sub: "Child health, immunization, growth" },
      derma: { name: "Dermatology & Skin", sub: "Rash, itching, eczema, allergies" },
      cardio: { name: "Cardiology & Heart", sub: "Chest tightness, palpitations, BP" },
      ent: { name: "ENT (Ear, Nose, Throat)", sub: "Throat pain, sinusitis, ear discharge" },
      gynae: { name: "Gynecology & Obstetrics", sub: "Maternal, menstrual, women's health" },
      pulmo: { name: "Pulmonology & Chest", sub: "Asthma, wheezing, chronic cough" },
      ophthal: { name: "Ophthalmology & Eye", sub: "Blurred vision, eye redness, irritation" }
    },
    symptoms: {
      fever: { name: "Fever & Chills", desc: "High temperature, shivering, body heat", isRedFlag: false, targetDept: "general" },
      cough: { name: "Cough & Cold", desc: "Dry/wet cough, sore throat, runny nose", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "Stomach Pain & Acidity", desc: "Abdominal cramps, acidity, vomiting", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "Chest Pain / Tightness", desc: "Pressure, squeezing pain in chest/arm", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "Shortness of Breath", desc: "Difficulty breathing, wheezing", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "Joint & Knee Pain", desc: "Knee swelling, stiffness, spine ache", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "Skin Rash & Itching", desc: "Itching, redness, swelling, hives", isRedFlag: false, targetDept: "derma" },
      headache: { name: "Severe Headache", desc: "Dizziness, migraine, blurred vision", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "Is this chest pain constant or coming in sudden intense spikes? Does it radiate to your left arm or jaw?",
        options: [
          { text: "Constant heavy pressure radiating to left arm / jaw (Immediate Emergency)", isUrgent: true },
          { text: "Mild stabbing pain only while coughing or taking deep breaths", isUrgent: false },
          { text: "Burning sensation after meals (Acidity / Reflux)", isUrgent: false }
        ]
      },
      breathless: {
        question: "Are you feeling breathless even while resting seated, or only when climbing stairs?",
        options: [
          { text: "Severe breathless even at complete rest + sweating (Immediate Emergency)", isUrgent: true },
          { text: "Only during exertion, walking fast or climbing stairs", isUrgent: false },
          { text: "Occasional night wheezing with cough", isUrgent: false }
        ]
      }
    }
  },

  // 3. GUJARATI
  gu: {
    langName: "ગુજરાતી",
    nativeName: "ગુજરાતી",
    bcp47: "gu-IN",
    tagline: "એઆઈ ક્લિનિકલ ઇન્ટેક અને ઓપીડી કિયોસ્ક",
    avatarWelcome: "નમસ્તે! હું ડૉ. મેડી છું. તમે બોલીને અથવા સ્ક્રીન પર સ્પર્શ કરીને માહિતી આપી શકો છો.",
    steps: {
      1: "ભાષા અને ઓળખ",
      2: "લક્ષણો અને અવાજ",
      3: "સુરક્ષા પુષ્ટિ",
      4: "આયુષ / જીવનશૈલી",
      5: "દસ્તાવેજ સ્કેનર",
      6: "ટોકન અને ચૂકવણી"
    },
    stepSubtitles: {
      1: "ભાષા પસંદ કરો અને નામ, ઉંમર, મોબાઈલ દાખલ કરો",
      2: "માઇક દબાવીને બોલો અથવા લક્ષણો પસંદ કરો (એઆઈ વિભાગ આપમેળે પસંદ કરશે)",
      3: "ગંભીર લક્ષણોની ક્લિનિકલ સુરક્ષા ચકાસણી",
      4: "આયુર્વેદિક ભૂખ અગ્નિ, ઊંઘ અને પાચન સંતોષ",
      5: "કેમેરા સ્કેનરથી અગાઉની દવા કાપલી કે રિપોર્ટ વાંચો",
      6: "અપોઈન્ટમેન્ટ ટોકન, યુપીઆઈ ફી ચૂકવણી અને રસીદ"
    },
    labels: {
      selectLanguage: "ભાષા પસંદ કરો (11 પ્રાદેશિક ભાષાઓ)",
      fullName: "દર્દીનું પૂરું નામ",
      fullNamePlaceholder: "દા.ત. રમેશ પટેલ",
      age: "ઉંમર (વર્ષ)",
      agePlaceholder: "દા.ત. 45",
      gender: "જાતિ",
      male: "પુરુષ",
      female: "સ્ત્રી",
      other: "અન્ય",
      mobile: "મોબાઇલ નંબર",
      mobilePlaceholder: "10 અંકનો મોબાઈલ નંબર",
      abhaNumber: "આભા આઈડી (મરજિયાત)",
      abhaPlaceholder: "14 અંકનો આભા નંબર",
      deptPreference: "તપાસ વિભાગ (AI આપોઆપ પસંદ કરશે)",
      aiRecommendedBadge: "✨ એઆઈ ભલામણ",
      next: "આગળ વધો",
      back: "પાછા જાઓ",
      submitKiosk: "ટોકન મેળવો",
      speakHelp: "અવાજ સાંભળો",
      listening: "સાંભળી રહ્યા છીએ... માઇક પાસે બોલો",
      tapToSpeak: "બોલીને લક્ષણ જણાવો (Speech-to-Text)",
      voiceLiveBanner: "લાઈવ અવાજ લખાણ:",
      severity: "તકલીફની તીવ્રતા",
      severityMild: "હળવો દુખાવો",
      severityMod: "મધ્યમ",
      severitySevere: "અતિશય તીવ્ર / ઇમરજન્સી",
      duration: "કેટલા સમયથી છે?",
      durToday: "આજે શરૂ થયું (< 24 કલાક)",
      durFewDays: "2 થી 3 દિવસ",
      durWeek: "આશરે 1 અઠવાડિયું",
      durMonth: "1 મહિનાથી વધુ",
      cameraScanTitle: "કેમેરા સ્કેનર (Interactive OCR)",
      cameraScanSub: "દવાની કાપલી કેમેરા સામે રાખો અથવા સેમ્પલ પસંદ કરો",
      snapDocBtn: "ફોટો લો અને સ્કેન કરો",
      scanningLaser: "એઆઈ દ્વારા દવાઓ અને રિપોર્ટ વાંચવામાં આવી રહ્યા છે...",
      tokenSuccess: "અપોઈન્ટમેન્ટ સફળતાપૂર્વક બુક થઈ ગઈ!",
      appointmentSlot: "અંદાજિત તપાસ સમય:",
      slotTime: "આજે સવારે 10:45 (સ્લોટ #4)",
      tokenNumber: "ટોકન નંબર",
      estWait: "અંદાજિત રાહ",
      roomAssigned: "રૂમ નંબર",
      feeTitle: "ઓપીડી તપાસ ફી",
      feeAmount: "₹50 (સામાન્ય ઓપીડી)",
      payMethod: "ચૂકવણી પદ્ધતિ",
      payUpi: "યુપીઆઈ ક્યુઆર (GPay / PhonePe / Paytm)",
      payCash: "કાઉન્ટર પર રોકડા",
      payPmjay: "આયુષ્માન ભારત (મફત)",
      upiScanText: "કોઈપણ યુપીઆઈ એપથી ક્યુઆર કોડ સ્કેન કરો",
      paySuccessNotice: "✅ ચૂકવણી સફળ થઈ (રસીદ નં. #RCP-8821)",
      cancelApptBtn: "અપોઈન્ટમેન્ટ રદ કરો / રિફંડ મેળવો",
      refundModalTitle: "અપોઈન્ટમેન્ટ રદ્દીકરણ અને રિફંડ",
      refundSuccess: "અપોઈન્ટમેન્ટ રદ કરવામાં આવી છે. ફી (₹50) તમારા ખાતામાં તરત પરત મોકલાઈ છે.",
      printSlip: "સ્લિપ પ્રિન્ટ કરો"
    },
    departments: {
      general: { name: "જનરલ મેડિસિન", sub: "તાવ, શરદી, ઇન્ફેક્શન, બીપી" },
      ayush: { name: "આયુર્વેદ અને પંચકર્મ", sub: "પાચન, જીવનશૈલી, ગેસ" },
      ortho: { name: "હાડકાં અને સાંધા", sub: "ઢીંચણનો દુખાવો, મણકો" },
      pediatrics: { name: "બાળ રોગ વિભાગ", sub: "બાળકોનો તાવ, રસીકરણ" },
      derma: { name: "ચામડીનો વિભાગ", sub: "ખંજવાળ, ચાઠા, એલર્જી" },
      cardio: { name: "હૃદય રોગ વિભાગ", sub: "છાતીમાં દુખાવો, ગભરામણ" },
      ent: { name: "કાન, નાક અને ગળું", sub: "ગળામાં દુખાવો, સાયનસ" },
      gynae: { name: "સ્ત્રી રોગ વિભાગ", sub: "માસિક ધર્મ, મહિલા સ્વાસ્થ્ય" },
      pulmo: { name: "શ્વસન રોગ વિભાગ", sub: "દમ, શ્વાસ ચડવો" },
      ophthal: { name: "આંખનો વિભાગ", sub: "ઝાંખું દેખાવું, બળતરા" }
    },
    symptoms: {
      fever: { name: "તાવ અને ધ્રૂજારી", desc: "ઊંચું તાપમાન, ઠંડી લાગવી", isRedFlag: false, targetDept: "general" },
      cough: { name: "ઉધરસ અને શરદી", desc: "સૂકી કે કફવાળી ઉધરસ", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "પેટમાં દુખાવો અને એસિડિટી", desc: "ચૂંક આવવી, અપચો, ગેસ", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "છાતીમાં દુખાવો અને ભીંસ", desc: "છાતીમાં દબાણ, ડાબા હાથમાં ફેલાવો", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "શ્વાસ લેવામાં તકલીફ", desc: "શ્વાસ ચડવો, ગભરામણ", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "સાંધા અને ઢીંચણનો દુખાવો", desc: "ઢીંચણમાં સોજો, જકડાઈ જવું", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "ચામડી પર ખંજવાળ અને ચકામા", desc: "એલર્જી, લાલ ચાઠાં, સોજો", isRedFlag: false, targetDept: "derma" },
      headache: { name: "માથાનો દુખાવો અને ચક્કર", desc: "આધાશીશી, આંખે અંધારા", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "શું આ છાતીનો દુખાવો સતત ભારે દબાણ જેવો છે અને ડાબા હાથ, જડબા કે ખભા તરફ ફેલાય છે?",
        options: [
          { text: "છાતી પર સતત ભારે દબાણ અને ડાબા હાથમાં ફેલાતો દુખાવો (તાત્કાલિક ઇમરજન્સી)", isUrgent: true },
          { text: "માત્ર ઊંડો શ્વાસ લેતી વખતે કે ઉધરસમાં હળવો ડંખ જેવો દુખાવો", isUrgent: false },
          { text: "જમ્યા પછી છાતીમાં બળતરા (એસિડિટી / ગેસ)", isUrgent: false }
        ]
      },
      breathless: {
        question: "શું તમને શાંતિથી બેઠા હોવ ત્યારે પણ શ્વાસ લેવામાં અતિશય તકલીફ અને પરસેવો થાય છે?",
        options: [
          { text: "બેઠા બેઠા પણ શ્વાસ ચડવો અને ભારે ગભરામણ (ઇમરજન્સી રેડ-ફ્લેગ)", isUrgent: true },
          { text: "માત્ર સીડી ચડતી વખતે કે ઝડપી ચાલતી વખતે શ્વાસ ચડવો", isUrgent: false }
        ]
      }
    }
  },

  // 4. TAMIL
  ta: {
    langName: "தமிழ்",
    nativeName: "தமிழ்",
    bcp47: "ta-IN",
    tagline: "AI மருத்துவ உட்கிரகிப்பு மற்றும் ஓபிடி கியோஸ்க்",
    avatarWelcome: "வணக்கம்! நான் டாக்டர் மெடி. மைக்ரோஃபோனில் பேசலாம் அல்லது தொட்டு விவரங்களை உள்ளிடலாம்.",
    steps: {
      1: "மொழி & அடையாளம்",
      2: "அறிகுறிகள் & குரல்",
      3: "பாதுகாப்பு சரிபார்ப்பு",
      4: "ஆயுஷ் / வாழ்க்கை முறை",
      5: "ஆவண ஸ்கேனர்",
      6: "டோக்கன் & கட்டணம்"
    },
    stepSubtitles: {
      1: "உங்கள் மொழியைத் தேர்ந்தெடுத்து விவரங்களை உள்ளிடவும்",
      2: "அறிகுறிகளை பேசுங்கள் அல்லது தேர்ந்தெடுக்கவும் (AI தானாக துறையை ஒதுக்கும்)",
      3: "அவசர அறிகுறிகளுக்கான பாதுகாப்பு மறுஉறுதிப்படுத்தல்",
      4: "செரிமானம், தூக்கம் மற்றும் உடல் ஆரோக்கியம்",
      5: "முந்தைய மருந்து சீட்டை கேமரா மூலம் ஸ்கேன் செய்யவும்",
      6: "அப்பாயின்ட்மென்ட் டோக்கன், UPI கட்டணம் மற்றும் ரசீது"
    },
    labels: {
      selectLanguage: "மொழியைத் தேர்வு செய்க",
      fullName: "நோயாளி பெயர்",
      fullNamePlaceholder: "எ.கா. ரமேஷ்",
      age: "வயது",
      agePlaceholder: "எ.கா. 45",
      gender: "பாலினம்",
      male: "ஆண்",
      female: "பெண்",
      other: "மற்றவை",
      mobile: "கைபேசி எண்",
      mobilePlaceholder: "10 இலக்க எண்",
      abhaNumber: "ஆபா எண்",
      abhaPlaceholder: "14 இலக்க ஆபா எண்",
      deptPreference: "மருத்துவ துறை (AI பரிந்துரை)",
      aiRecommendedBadge: "✨ AI பரிந்துரை",
      next: "தொடரவும்",
      back: "பின்செல்க",
      submitKiosk: "டோக்கன் பெறுக",
      speakHelp: "குரல் வழிகாட்டி",
      listening: "கேட்கிறது... மைக் அருகே பேசவும்",
      tapToSpeak: "பேசி அறிகுறிகளை பதிவு செய்க",
      voiceLiveBanner: "நேரடி குரல் உரை:",
      severity: "தீவிரம்",
      severityMild: "லேசானது",
      severityMod: "மிதமானது",
      severitySevere: "கடுமையான வலி / அவசரம்",
      duration: "கால அளவு",
      durToday: "இன்று தொடங்கியது (< 24 மணி)",
      durFewDays: "2 - 3 நாட்கள்",
      durWeek: "1 வாரம்",
      durMonth: "1 மாதத்திற்கு மேல்",
      cameraScanTitle: "கேமரா ஆவண ஸ்கேனர்",
      cameraScanSub: "மருந்து சீட்டை கேமரா முன் வைக்கவும்",
      snapDocBtn: "படம் எடுத்து ஸ்கேன் செய்க",
      scanningLaser: "மருந்துகள் மற்றும் அறிக்கைகளை AI வாசிக்கிறது...",
      tokenSuccess: "பதிவு வெற்றிகரமாக முடிந்தது!",
      appointmentSlot: "பரிசோதனை நேரம்:",
      slotTime: "இன்று காலை 10:45 (ஸ்லாட் #4)",
      tokenNumber: "டோக்கன் எண்",
      estWait: "காத்திருப்பு நேரம்",
      roomAssigned: "அறை எண்",
      feeTitle: "கட்டணம்",
      feeAmount: "₹50 (பொது ஓபிடி)",
      payMethod: "கட்டண முறை",
      payUpi: "UPI QR (GPay / PhonePe / Paytm)",
      payCash: "ரொக்கம்",
      payPmjay: "ஆயுஷ்மான் பாரத் (இலவசம்)",
      upiScanText: "UPI QR குறியீட்டை ஸ்கேன் செய்க",
      paySuccessNotice: "✅ கட்டணம் செலுத்தப்பட்டது (#RCP-8821)",
      cancelApptBtn: "ரத்து செய் / பணத்தை திரும்பப்பெறு",
      refundModalTitle: "ரத்து மற்றும் பணத்தைத் திரும்பப் பெறுதல்",
      refundSuccess: "அப்பாயின்ட்மென்ட் ரத்து செய்யப்பட்டது. கட்டணம் (₹50) உடனடியாக திரும்ப அளிக்கப்பட்டது.",
      printSlip: "அச்சிடுக"
    },
    departments: {
      general: { name: "பொது மருத்துவம்", sub: "காய்ச்சல், சளி, இரத்த அழுத்தம்" },
      ayush: { name: "ஆயுர்வேதம் & யோகா", sub: "செரிமானம், வாயு, நலம்" },
      ortho: { name: "எலும்பு & மூட்டு", sub: "மூட்டு வலி, எலும்பு முறிவு" },
      pediatrics: { name: "குழந்தைகள் நலன்", sub: "குழந்தை காய்ச்சல், தடுப்பூசி" },
      derma: { name: "தோல் நோய் பிரிவு", sub: "அரிப்பு, தடிப்பு, அலர்ஜி" },
      cardio: { name: "இதய நோய் பிரிவு", sub: "நெஞ்சு வலி, படபடப்பு" },
      ent: { name: "காது, மூக்கு, தொண்டை", sub: "தொண்டை வலி, சைனஸ்" },
      gynae: { name: "மகளிர் நலம்", sub: "மாதவிடாய், பிரசவம்" },
      pulmo: { name: "சுவாச நோய் பிரிவு", sub: "ஆஸ்துமா, மூச்சுத்திணறல்" },
      ophthal: { name: "கண் மருத்துவ பிரிவு", sub: "மங்கலான பார்வை, எரிச்சல்" }
    },
    symptoms: {
      fever: { name: "காய்ச்சல் & நடுக்கம்", desc: "உடல் சூடு, நடுக்கம்", isRedFlag: false, targetDept: "general" },
      cough: { name: "இருமல் & சளி", desc: "தொண்டை வலி, சளி", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "வயிற்று வலி & அமிலத்தன்மை", desc: "வயிற்று பிடிப்பு, வாயு", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "நெஞ்சு வலி & அழுத்தம்", desc: "நெஞ்சில் அழுத்தம், இடது கை வலி", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "மூச்சுத்திணறல்", desc: "சுவாசிப்பதில் சிரமம்", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "மூட்டு & முதுகு வலி", desc: "முழங்கால் வீக்கம், பிடிப்பு", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "தோல் அரிப்பு & தடிப்பு", desc: "அலர்ஜி, சிவப்பு தடிப்புகள்", isRedFlag: false, targetDept: "derma" },
      headache: { name: "தலைவலி & மயக்கம்", desc: "ஒற்றைத் தலைவலி, கண் இருளல்", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "நெஞ்சு வலி தொடர்ந்து இருந்து இடது கை அல்லது தாடைக்கு பரவுகிறதா?",
        options: [
          { text: "நெஞ்சில் கடுமையான அழுத்தம் மற்றும் இடது கை வலி (அவசர சிகிச்சை தேவை)", isUrgent: true },
          { text: "இருமும்போது மட்டும் லேசான வலி", isUrgent: false }
        ]
      },
      breathless: {
        question: "அமைதியாக உட்கார்ந்திருக்கும் போதும் மூச்சுத்திணறல் ஏற்படுகிறதா?",
        options: [
          { text: "உட்கார்ந்திருக்கும் போதும் கடுமையான மூச்சுத்திணறல் (அவசரம்)", isUrgent: true },
          { text: "மாடி ஏறும்போது மட்டும் மூச்சு வாங்குதல்", isUrgent: false }
        ]
      }
    }
  },

  // 5. TELUGU
  te: {
    langName: "తెలుగు",
    nativeName: "తెలుగు",
    bcp47: "te-IN",
    tagline: "AI క్లినికల్ ఇన్‌టేక్ మరియు OPD కియోస్క్",
    avatarWelcome: "నమస్కారం! నేను డాక్టర్ మెడి. మైక్రోఫోన్‌లో మాట్లాడి లేదా తాకి వివరాలు నమోదు చేసుకోండి.",
    steps: {
      1: "భాష & గుర్తింపు",
      2: "లక్షణాలు & వాయిస్",
      3: "భద్రతా నిర్ధారణ",
      4: "ఆయుష్ / జీవనశైలి",
      5: "డాక్యుమెంట్ స్కానర్",
      6: "టోకెన్ & చెల్లింపు"
    },
    stepSubtitles: {
      1: "భాషను ఎంచుకోండి మరియు వివరాలు నమోదు చేయండి",
      2: "లక్షణాలను మాట్లాడండి లేదా ఎంచుకోండి (AI విభాగాన్ని కేటాయిస్తుంది)",
      3: "తీవ్రమైన లక్షణాల భద్రతా తనిఖీ",
      4: "జీర్ణక్రియ, నిద్ర మరియు ఆరోగ్యం",
      5: "పాత ప్రిస్క్రిప్షన్‌ను కెమెరాతో స్కాన్ చేయండి",
      6: "అపాయింట్‌మెంట్ టోకెన్, UPI ఫీజు చెల్లింపు & రసీదు"
    },
    labels: {
      selectLanguage: "భాషను ఎంచుకోండి",
      fullName: "రోగి పూర్తి పేరు",
      fullNamePlaceholder: "ఉదా. రమేష్",
      age: "వయస్సు",
      agePlaceholder: "ఉదా. 45",
      gender: "లింగం",
      male: "పురుషుడు",
      female: "స్త్రీ",
      other: "ఇతర",
      mobile: "మొబైల్ నంబర్",
      mobilePlaceholder: "10 అంకెల నంబర్",
      abhaNumber: "ఆభా నంబర్",
      abhaPlaceholder: "14 అంకెల ఆభా",
      deptPreference: "చికిత్స విభాగం (AI సూచన)",
      aiRecommendedBadge: "✨ AI సిఫార్సు",
      next: "కొనసాగించండి",
      back: "వెనుకకు",
      submitKiosk: "టోకెన్ పొందండి",
      speakHelp: "వాయిస్ గైడ్",
      listening: "వింటోంది... మైక్ దగ్గర మాట్లాడండి",
      tapToSpeak: "మాట్లాడి లక్షణాలు నమోదు చేయండి",
      voiceLiveBanner: "లైవ్ వాయిస్ టెక్స్ట్:",
      severity: "తీవ్రత",
      severityMild: "తేలికపాటి",
      severityMod: "మధ్యస్థ",
      severitySevere: "తీవ్రమైన నొప్పి / ఎమర్జెన్సీ",
      duration: "వ్యవధి",
      durToday: "ఈరోజే మొదలైంది (< 24 గం)",
      durFewDays: "2 - 3 రోజులు",
      durWeek: "1 వారం",
      durMonth: "1 నెల కంటే ఎక్కువ",
      cameraScanTitle: "కెమెరా డాక్యుమెంట్ స్కానర్",
      cameraScanSub: "ప్రిస్క్రిప్షన్‌ను కెమెరా ముందు ఉంచండి",
      snapDocBtn: "ఫోటో తీసి స్కాన్ చేయండి",
      scanningLaser: "AI మందుల వివరాలను గుర్తిస్తోంది...",
      tokenSuccess: "రిజిస్ట్రేషన్ విజయవంతంగా పూర్తయింది!",
      appointmentSlot: "అంచనా సమయం:",
      slotTime: "ఈరోజు ఉదయం 10:45 (స్లాట్ #4)",
      tokenNumber: "టోకెన్ సంఖ్య",
      estWait: "వేచి ఉండే సమయం",
      roomAssigned: "గది సంఖ్య",
      feeTitle: "ఫీజు",
      feeAmount: "₹50 (సాధారణ OPD)",
      payMethod: "చెల్లింపు పద్ధతి",
      payUpi: "UPI QR (GPay / PhonePe / Paytm)",
      payCash: "నగదు",
      payPmjay: "ఆయుష్మాన్ భారత్ (ఉచితం)",
      upiScanText: "UPI QR కోడ్‌ను స్కాన్ చేయండి",
      paySuccessNotice: "✅ చెల్లింపు పూర్తయింది (#RCP-8821)",
      cancelApptBtn: "రద్దు చేయండి / రీఫండ్ పొందండి",
      refundModalTitle: "రద్దు మరియు రీఫండ్",
      refundSuccess: "అపాయింట్‌మెంట్ రద్దు చేయబడింది. ఫీజు (₹50) తిరిగి పంపబడింది.",
      printSlip: "ప్రింట్ తీసుకోండి"
    },
    departments: {
      general: { name: "జనరల్ మెడిసిన్", sub: "జ్వరం, జలుబు, రక్తపోటు" },
      ayush: { name: "ఆయుర్వేదం & యోగా", sub: "జీర్ణక్రియ, గ్యాస్, ఆరోగ్యం" },
      ortho: { name: "ఎముకలు & కీళ్ళు", sub: "కీళ్ల నొప్పులు, పగుళ్లు" },
      pediatrics: { name: "పిల్లల వైద్యం", sub: "పిల్లల జ్వరం, టీకాలు" },
      derma: { name: "చర్మ వ్యాధులు", sub: "దురద, దద్దుర్లు, అలర్జీ" },
      cardio: { name: "గుండె జబ్బుల విభాగం", sub: "ఛాతీ నొప్పి, దడ" },
      ent: { name: "చెవి, ముక్కు, గొంతు", sub: "గొంతు నొప్పి, సైనస్" },
      gynae: { name: "స్త్రీల వైద్య విభాగం", sub: "నెలసరి, గర్భధారణ" },
      pulmo: { name: "శ్వాసకోశ విభాగం", sub: "ఆస్తమా, ఆయాసం" },
      ophthal: { name: "కంటి వైద్య విభాగం", sub: "మసకబారడం, మంట" }
    },
    symptoms: {
      fever: { name: "జ్వరం & వణుకు", desc: "శరీర ఉష్ణోగ్రత, చలి", isRedFlag: false, targetDept: "general" },
      cough: { name: "దగ్గు & జలుబు", desc: "గొంతు నొప్పి, కఫం", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "కడుపు నొప్పి & అసిడిటీ", desc: "కడుపు తిమ్మిరి, గ్యాస్", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "ఛాతీ నొప్పి & బరువు", desc: "ఛాతీలో ఒత్తిడి, ఎడమ చేతి నొప్పి", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "శ్వాస తీసుకోవడంలో ఇబ్బంది", desc: "ఆయాసం, గభరాటం", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "కీళ్ళు & మోకాళ్ళ నొప్పి", desc: "మోకాళ్ళ వాపు, బిగుతు", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "చర్మంపై దురద & దద్దుర్లు", desc: "అలర్జీ, ఎర్రటి మచ్చలు", isRedFlag: false, targetDept: "derma" },
      headache: { name: "తీవ్రమైన తలనొప్పి & తలతిరుగుడు", desc: "మైగ్రేన్, కళ్ళు తిరగడం", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "ఛాతీ నొప్పి నిరంతరం ఉంటూ ఎడమ చేతికి వ్యాపిస్తోందా?",
        options: [
          { text: "ఛాతీపై తీవ్ర ఒత్తిడి మరియు ఎడమ చేతి నొప్పి (ఎమర్జెన్సీ)", isUrgent: true },
          { text: "దగ్గినప్పుడు మాత్రమే తేలికపాటి నొప్పి", isUrgent: false }
        ]
      },
      breathless: {
        question: "కదలకుండా కూర్చున్నప్పుడు కూడా శ్వాస తీసుకోవడం కష్టంగా ఉందా?",
        options: [
          { text: "కూర్చున్నప్పుడు కూడా తీవ్ర ఆయాసం (ఎమర్జెన్సీ)", isUrgent: true },
          { text: "నడిచినప్పుడు మాత్రమే ఆయాసం", isUrgent: false }
        ]
      }
    }
  },

  // 6. BENGALI
  bn: {
    langName: "বাংলা",
    nativeName: "বাংলা",
    bcp47: "bn-IN",
    tagline: "এআই ক্লিনিক্যাল ইনটেক এবং ওপিডি কিয়স্ক",
    avatarWelcome: "নমস্কার! আমি ডঃ মেডি। মাইক্রোফোনে কথা বলে বা স্পর্শ করে বিবরণ লিখুন।",
    steps: {
      1: "ভাষা ও পরিচয়",
      2: "উপসর্গ ও ভয়েস",
      3: "নিরাপত্তা নিশ্চিতকরণ",
      4: "আয়ুশ / স্বাস্থ্য",
      5: "ডকুমেন্ট স্ক্যানার",
      6: "টোকেন ও পেমেন্ট"
    },
    stepSubtitles: {
      1: "ভাষা নির্বাচন করুন এবং নাম, বয়স লিখুন",
      2: "মাইকে কথা বলুন বা কার্ড নির্বাচন করুন (AI স্বয়ংক্রিয় বিভাগ বাছবে)",
      3: "জরুরি উপসর্গের সুরক্ষা যাচাই",
      4: "হজম শক্তি, ঘুম এবং সামগ্রিক স্বাস্থ্য",
      5: "ক্যামেরা দিয়ে প্রেসক্রিপশন স্ক্যান করুন",
      6: "অ্যাপয়েন্টমেন্ট টোকেন, ইউপিআই ফি পেমেন্ট ও রসিদ"
    },
    labels: {
      selectLanguage: "ভাষা নির্বাচন করুন",
      fullName: "রোগীর সম্পূর্ণ নাম",
      fullNamePlaceholder: "উদাঃ রমেশ ব্যানার্জী",
      age: "বয়স (বছর)",
      agePlaceholder: "উদাঃ ৪৫",
      gender: "লিঙ্গ",
      male: "পুরুষ",
      female: "মহিলা",
      other: "অন্যান্য",
      mobile: "মোবাইল নম্বর",
      mobilePlaceholder: "১০ অঙ্কের নম্বর",
      abhaNumber: "আভা আইডি",
      abhaPlaceholder: "১৪ অঙ্কের আভা",
      deptPreference: "বিভাগ (AI প্রস্তাবিত)",
      aiRecommendedBadge: "✨ এআই প্রস্তাবিত",
      next: "এগিয়ে যান",
      back: "পেছনে যান",
      submitKiosk: "টোকেন নিন",
      speakHelp: "ভয়েস গাইড",
      listening: "শুনছি... মাইকে কথা বলুন",
      tapToSpeak: "কথা বলে উপসর্গ জানান",
      voiceLiveBanner: "লাইভ ভয়েস টেক্সট:",
      severity: "তীব্রতা",
      severityMild: "সামান্য",
      severityMod: "মাঝারি",
      severitySevere: "তীব্র যন্ত্রণা / জরুরি",
      duration: "কতদিন ধরে?",
      durToday: "আজ শুরু (< ২৪ ঘণ্টা)",
      durFewDays: "২ - ৩ দিন",
      durWeek: "১ সপ্তাহ",
      durMonth: "১ মাসের বেশি",
      cameraScanTitle: "ক্যামেরা ডকুমেন্ট স্ক্যানার",
      cameraScanSub: "প্রেসক্রিপশনটি ক্যামেরার সামনে রাখুন",
      snapDocBtn: "ছবি তুলে স্ক্যান করুন",
      scanningLaser: "এআই ওষুধ ও রিপোর্ট পাঠ করছে...",
      tokenSuccess: "নিবন্ধন সফল হয়েছে!",
      appointmentSlot: "পরামর্শের সময়:",
      slotTime: "আজ সকাল ১০:৪৫ (স্লট #৪)",
      tokenNumber: "টোকেন নম্বর",
      estWait: "প্রতীক্ষা সময়",
      roomAssigned: "রুম নম্বর",
      feeTitle: "ওপিডি ফি",
      feeAmount: "₹৫০ (সাধারণ ওপিডি)",
      payMethod: "পেমেন্ট মাধ্যম",
      payUpi: "ইউপিআই কিউআর (GPay / PhonePe / Paytm)",
      payCash: "নগদ টাকা",
      payPmjay: "আয়ুষ্মান ভারত (বিনামূল্যে)",
      upiScanText: "UPI QR কোডটি স্ক্যান করুন",
      paySuccessNotice: "✅ পেমেন্ট সফল (#RCP-8821)",
      cancelApptBtn: "বাতিল করুন / রিফান্ড নিন",
      refundModalTitle: "বাতিল ও রিফান্ড",
      refundSuccess: "অ্যাপয়েন্টমেন্ট বাতিল হয়েছে। টাকা (₹৫০) ফেরত পাঠানো হয়েছে।",
      printSlip: "প্রিন্ট করুন"
    },
    departments: {
      general: { name: "জেনারেল মেডিসিন", sub: "জ্বর, সর্দি, সংক্রমণ, রক্তচাপ" },
      ayush: { name: "আয়ুর্বেদ ও পঞ্চকর্ম", sub: "হজম, গ্যাস, সামগ্রিক সুস্থতা" },
      ortho: { name: "হাড় ও অস্থিসন্ধি", sub: "হাঁটুর ব্যথা, স্পাইন, ফ্র্যাকচার" },
      pediatrics: { name: "শিশু বিভাগ", sub: "শিশুর জ্বর, টিকাদান" },
      derma: { name: "চর্মরোগ বিভাগ", sub: "চুলকানি, এলার্জি, র‍্যাশ" },
      cardio: { name: "হৃদরোগ বিভাগ", sub: "বুকে ব্যথা, ধড়ফড়ানি" },
      ent: { name: "নাক, কান ও গলা", sub: "গলা ব্যথা, সাইনাস" },
      gynae: { name: "স্ত্রী ও প্রসূতি বিভাগ", sub: "ঋতুস্রাব, মাতৃত্ব" },
      pulmo: { name: "বক্ষ ও শ্বাসরোগ", sub: "হাঁপানি, শ্বাসকষ্ট" },
      ophthal: { name: "চক্ষু বিভাগ", sub: "চোখে অস্বস্তি, ঝাপসা দেখা" }
    },
    symptoms: {
      fever: { name: "জ্বর ও কাঁপুনি", desc: "শরীরের তাপমাত্রা বৃদ্ধি", isRedFlag: false, targetDept: "general" },
      cough: { name: "কাশি ও সর্দি", desc: "গলা ব্যথা, কাশি", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "পেট ব্যথা ও অ্যাসিডিটি", desc: "পেটে মোচড়, গ্যাস", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "বুকে তীব্র ব্যথা ও চাপ", desc: "বুকে চাপ, বাম হাতে ব্যথা", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "শ্বাসকষ্ট", desc: "নিঃশ্বাস নিতে কষ্ট", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "হাঁটু ও জয়েন্টের ব্যথা", desc: "ফোলাভাব, জড়তা", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "চুলকানি ও লাল দাগ", desc: "এলার্জি, ফুসকুড়ি", isRedFlag: false, targetDept: "derma" },
      headache: { name: "মাথা ঘোরা ও তীব্র মাথা ব্যথা", desc: "মাইগ্রেন, চোখের সামনে অন্ধকার", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "বুকে কি ক্রমাগত ভারী চাপ লাগছে এবং তা বাম হাতে ছড়াচ্ছে?",
        options: [
          { text: "বুকে ভারী চাপ ও বাম হাতে ব্যথা (অবিলম্বে জরুরি চিকিৎসা)", isUrgent: true },
          { text: "শুধু কাশির সময় হালকা ব্যথা", isUrgent: false }
        ]
      },
      breathless: {
        question: "চুপচাপ বসে থাকলেও কি প্রচণ্ড শ্বাসকষ্ট ও ঘাম হচ্ছে?",
        options: [
          { text: "বসে থাকা অবস্থাতেও তীব্র শ্বাসকষ্ট (জরুরি)", isUrgent: true },
          { text: "কেবল সিঁড়ি ভাঙার সময় কষ্ট", isUrgent: false }
        ]
      }
    }
  },

  // 7. MARATHI
  mr: {
    langName: "मराठी",
    nativeName: "मराठी",
    bcp47: "mr-IN",
    tagline: "एआय क्लिनिकल इनटेक आणि ओपीडी कियोस्क",
    avatarWelcome: "नमस्कार! मी डॉ. मेडी आहे. आपण बोलून किंवा स्क्रीनवर स्पर्श करून लक्षणे सांगू शकता.",
    steps: {
      1: "भाषा व ओळख",
      2: "लक्षणे व आवाज",
      3: "सुरक्षा पडताळणी",
      4: "आयुष / जीवनशैली",
      5: "कागदपत्र स्कॅनर",
      6: "टोकन व शुल्क"
    },
    stepSubtitles: {
      1: "भाषा निवडा आणि नाव, वय, मोबाईल टाका",
      2: "माइक दाबून बोला किंवा कार्ड निवडा (एआय विभाग ठरवेल)",
      3: "गंभीर लक्षणांची क्लिनिकल सुरक्षा तपासणी",
      4: "पचनशक्ती, झोप आणि पोटाचे आरोग्य",
      5: "कॅमेरा स्कॅनरने जुनी औषध पावती स्कॅन करा",
      6: "अपॉइंटमेंट टोकन, यूपीआय शुल्क व पावती"
    },
    labels: {
      selectLanguage: "भाषा निवडा",
      fullName: "रुग्णाचे पूर्ण नाव",
      fullNamePlaceholder: "उदा. रमेश पाटील",
      age: "वय (वर्षे)",
      agePlaceholder: "उदा. ४५",
      gender: "लिंग",
      male: "पुरुष",
      female: "स्त्री",
      other: "इतर",
      mobile: "मोबाईल नंबर",
      mobilePlaceholder: "१० अंकी मोबाईल नंबर",
      abhaNumber: "आभा नंबर",
      abhaPlaceholder: "१४ अंकी आभा आयडी",
      deptPreference: "तपासणी विभाग (AI शिफारस)",
      aiRecommendedBadge: "✨ एआय शिफारस",
      next: "पुढे जा",
      back: "मागे या",
      submitKiosk: "टोकन मिळवा",
      speakHelp: "आवाज ऐका",
      listening: "ऐकत आहे... माइकजवळ बोला",
      tapToSpeak: "बोलून लक्षणे सांगा (Speech-to-Text)",
      voiceLiveBanner: "थेट आवाज मजकूर:",
      severity: "त्रासाची तीव्रता",
      severityMild: "कमी",
      severityMod: "मध्यम",
      severitySevere: "अतिशय तीव्र / आणीबाणी",
      duration: "त्रास किती दिवसांपासून?",
      durToday: "आजच सुरू झाला (< २४ तास)",
      durFewDays: "२ - ३ दिवस",
      durWeek: "१ आठवडा",
      durMonth: "१ महिन्यापेक्षा जास्त",
      cameraScanTitle: "कॅमेरा डॉक्युमेंट स्कॅनर",
      cameraScanSub: "औषध पावती कॅमेऱ्यासमोर धरा",
      snapDocBtn: "फोटो काढून स्कॅन करा",
      scanningLaser: "एआय औषधांची नावे वाचत आहे...",
      tokenSuccess: "अपॉइंटमेंट यशस्वीरीत्या बुक झाली!",
      appointmentSlot: "अंदाजे तपासणी वेळ:",
      slotTime: "आज सकाळी १०:४५ (स्लॉट #४)",
      tokenNumber: "टोकन क्रमांक",
      estWait: "अंदाजे वेळ",
      roomAssigned: "खोली क्रमांक",
      feeTitle: "ओपीडी शुल्क",
      feeAmount: "₹५० (सामान्य ओपीडी)",
      payMethod: "पेमेंट पद्धत",
      payUpi: "यूपीआय क्यूआर (GPay / PhonePe / Paytm)",
      payCash: "रोख रक्कम",
      payPmjay: "आयुष्मान भारत (मोफत)",
      upiScanText: "कोणत्याही यूपीआय ॲपने क्यूआर कोड स्कॅन करा",
      paySuccessNotice: "✅ पेमेंट यशस्वी झाले (#RCP-8821)",
      cancelApptBtn: "रद्द करा / परतावा मिळवा",
      refundModalTitle: "रद्दीकरण व परतावा",
      refundSuccess: "अपॉइंटमेंट रद्द झाली आहे. शुल्क (₹५०) तात्काळ खात्यात जमा केले आहे.",
      printSlip: "पावती प्रिंट करा"
    },
    departments: {
      general: { name: "जनरल मेडिसिन", sub: "ताप, सर्दी, संसर्ग, बीपी" },
      ayush: { name: "आयुर्वेद व पंचकर्म", sub: "पचन, ॲसिडिटी, आरोग्य" },
      ortho: { name: "हाडे व सांधे विभाग", sub: "गुडघेदुखी, फ्रॅक्चर, मणका" },
      pediatrics: { name: "बालरोग विभाग", sub: "लहान मुलांचे आजार, लसीकरण" },
      derma: { name: "त्वचारोग विभाग", sub: "खाज, पुरळ, ॲलर्जी" },
      cardio: { name: "हृदयरोग विभाग", sub: "छातीत दुखणे, धाप लागणे" },
      ent: { name: "कान, नाक व घसा", sub: "घसा दुखणे, सायनस" },
      gynae: { name: "स्त्रीरोग विभाग", sub: "मासिक पाळी, महिला आरोग्य" },
      pulmo: { name: "श्वसनरोग विभाग", sub: "दमा, दम लागणे" },
      ophthal: { name: "नेत्ररोग विभाग", sub: "डोळ्यांची जळजळ, अंधुक दिसणे" }
    },
    symptoms: {
      fever: { name: "ताप व थंडी वाजणे", desc: "तापमान वाढणे, अंग दुखणे", isRedFlag: false, targetDept: "general" },
      cough: { name: "खोकला व सर्दी", desc: "घसा खवखवणे, खोकला", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "पोटदुखी व ॲसिडिटी", desc: "पोटात मुरडा, गॅस", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "छातीत दुखणे व जडपणा", desc: "छातीत दाब, डाव्या हातात कळ", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "श्वास घेण्यास त्रास", desc: "दम लागणे, छातीत घरघर", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "सांधे व गुडघेदुखी", desc: "गुडघ्याला सूज, कडकपणा", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "अंगाला खाज व पुरळ", desc: "ॲलर्जी, लाल चट्टे", isRedFlag: false, targetDept: "derma" },
      headache: { name: "डोकेदुखी व चक्कर", desc: "मायग्रेन, डोळ्यांसमोर अंधारी", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "छातीवर सतत जड दाब जाणवतोय आणि तो डाव्या हाताकडे पसरतोय का?",
        options: [
          { text: "छातीवर तीव्र दाब व डाव्या हातात वेदना (तात्काळ आणीबाणी)", isUrgent: true },
          { text: "फक्त खोकताना होणारी हलकी कळ", isUrgent: false }
        ]
      },
      breathless: {
        question: "शांत बसलेले असतानाही तीव्र धाप लागून घाम येतोय का?",
        options: [
          { text: "बसलेले असतानाही तीव्र धाप लागणे (आणीबाणी)", isUrgent: true },
          { text: "फक्त जिने चढताना दम लागणे", isUrgent: false }
        ]
      }
    }
  },

  // 8. KANNADA
  kn: {
    langName: "ಕನ್ನಡ",
    nativeName: "ಕನ್ನಡ",
    bcp47: "kn-IN",
    tagline: "ಎಐ ಕ್ಲಿನಿಕಲ್ ಇನ್‌ಟೇಕ್ ಮತ್ತು ಒಪಿಡಿ ಕಿಯೋಸ್ಕ್",
    avatarWelcome: "ನಮಸ್ಕಾರ! ನಾನು ಡಾ. ಮೆಡಿ. ಮೈಕ್ರೊಫೋನ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ ಅಥವಾ ಸ್ಪರ್ಶಿಸಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
    steps: {
      1: "ಭಾಷೆ & ಗುರುತು",
      2: "ರೋಗಲಕ್ಷಣಗಳು",
      3: "ಸುರಕ್ಷತಾ ಪರಿಶೀಲನೆ",
      4: "ಆಯುಷ್ / ಜೀವನಶೈಲಿ",
      5: "ದಾಖಲೆ ಸ್ಕ್ಯಾನರ್",
      6: "ಟೋಕನ್ & ಪಾವತಿ"
    },
    stepSubtitles: {
      1: "ಭಾಷೆಯನ್ನು ಆರಿಸಿ ಮತ್ತು ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ",
      2: "ರೋಗಲಕ್ಷಣಗಳನ್ನು ಮಾತನಾಡಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ (AI ವಿಭಾಗವನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ)",
      3: "ತುರ್ತು ರೋಗಲಕ್ಷಣಗಳ ಸುರಕ್ಷತಾ ಮರುದೃಢೀಕರಣ",
      4: "ಜೀರ್ಣಕ್ರಿಯೆ, ನಿದ್ರೆ ಮತ್ತು ಆರೋಗ್ಯ",
      5: "ಕ್ಯಾಮೆರಾದಿಂದ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
      6: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಟೋಕನ್, ಯುಪಿಐ ಶುಲ್ಕ & ರಶೀದಿ"
    },
    labels: {
      selectLanguage: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      fullName: "ರೋಗಿಯ ಪೂರ್ಣ ಹೆಸರು",
      fullNamePlaceholder: "ಉದಾ. ರಮೇಶ್",
      age: "ವಯಸ್ಸು",
      agePlaceholder: "ಉದಾ. 45",
      gender: "ಲಿಂಗ",
      male: "ಪುರುಷ",
      female: "ಮಹಿಳೆ",
      other: "ಇತರ",
      mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
      mobilePlaceholder: "10 ಅಂಕಿಗಳ ಸಂಖ್ಯೆ",
      abhaNumber: "ಆಭಾ ಸಂಖ್ಯೆ",
      abhaPlaceholder: "14 ಅಂಕಿಗಳ ಆಭಾ",
      deptPreference: "ವಿಭಾಗ (AI ಶಿಫಾರಸು)",
      aiRecommendedBadge: "✨ ಎಐ ಶಿಫಾರಸು",
      next: "ಮುಂದೆ",
      back: "ಹಿಂದೆ",
      submitKiosk: "ಟೋಕನ್ ಪಡೆಯಿರಿ",
      speakHelp: "ಧ್ವನಿ ಮಾರ್ಗದರ್ಶಿ",
      listening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದೆ...",
      tapToSpeak: "ಮಾತನಾಡಿ ಲಕ್ಷಣ ತಿಳಿಸಿ",
      voiceLiveBanner: "ಲೈವ್ ಧ್ವನಿ ಪಠ್ಯ:",
      severity: "ತೀವ್ರತೆ",
      severityMild: "ಕಡಿಮೆ",
      severityMod: "ಮಧ್ಯಮ",
      severitySevere: "ತೀವ್ರ ನೋವು / ತುರ್ತು",
      duration: "ಅವಧಿ",
      durToday: "ಇಂದು ಆರಂಭ (< 24 ಗಂಟೆ)",
      durFewDays: "2 - 3 ದಿನಗಳು",
      durWeek: "1 ವಾರ",
      durMonth: "1 ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು",
      cameraScanTitle: "ಕ್ಯಾಮೆರಾ ದಾಖಲೆ ಸ್ಕ್ಯಾನರ್",
      cameraScanSub: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅನ್ನು ಕ್ಯಾಮೆರಾದ ಮುಂದೆ ಇರಿಸಿ",
      snapDocBtn: "ಫೋಟೋ ತೆಗೆದು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
      scanningLaser: "ಔಷಧಿಗಳನ್ನು ಎಐ ಗುರುತಿಸುತ್ತಿದೆ...",
      tokenSuccess: "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
      appointmentSlot: "ಪರೀಕ್ಷಾ ಸಮಯ:",
      slotTime: "ಇಂದು ಬೆಳಗ್ಗೆ 10:45 (ಸ್ಲಾಟ್ #4)",
      tokenNumber: "ಟೋಕನ್ ಸಂಖ್ಯೆ",
      estWait: "ಕಾಯುವ ಸಮಯ",
      roomAssigned: "ಕೊಠಡಿ ಸಂಖ್ಯೆ",
      feeTitle: "ಒಪಿಡಿ ಶುಲ್ಕ",
      feeAmount: "₹50 (ಸಾಮಾನ್ಯ ಒಪಿಡಿ)",
      payMethod: "ಪಾವತಿ ವಿಧಾನ",
      payUpi: "ಯುಪಿಐ ಕ್ಯೂಆರ್ (GPay / PhonePe / Paytm)",
      payCash: "ನಗದು",
      payPmjay: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ (ಉಚಿತ)",
      upiScanText: "ಯುಪಿಐ ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
      paySuccessNotice: "✅ ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ (#RCP-8821)",
      cancelApptBtn: "ರದ್ದುಮಾಡಿ / ಮರುಪಾವತಿ ಪಡೆಯಿರಿ",
      refundModalTitle: "ರದ್ದತಿ ಮತ್ತು ಮರುಪಾವತಿ",
      refundSuccess: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ರದ್ದುಗೊಂಡಿದೆ. ಹಣ (₹50) ಖಾತೆಗೆ ಮರಳಿಸಲಾಗಿದೆ.",
      printSlip: "ಮುದ್ರಿಸಿ"
    },
    departments: {
      general: { name: "ಜನರಲ್ ಮೆಡಿಸಿನ್", sub: "ಜ್ವರ, ಶೀತ, ಬಿಪಿ" },
      ayush: { name: "ಆಯುರ್ವೇದ & ಯೋಗ", sub: "ಜೀರ್ಣಕ್ರಿಯೆ, ಗ್ಯಾಸ್" },
      ortho: { name: "ಮೂಳೆ & ಕೀಲು ರೋಗ", sub: "ಕೀಲು ನೋವು, ಮುರಿತ" },
      pediatrics: { name: "ಮಕ್ಕಳ ವಿಭಾಗ", sub: "ಮಕ್ಕಳ ಜ್ವರ, ಲಸಿಕೆ" },
      derma: { name: "ಚರ್ಮ ರೋಗ ವಿಭಾಗ", sub: "ತುರಿಕೆ, ಅಲರ್ಜಿ" },
      cardio: { name: "ಹೃದ್ರೋಗ ವಿಭಾಗ", sub: "ಎದೆ ನೋವು, ಬಡಿತ" },
      ent: { name: "ಕಿವಿ, ಮೂಗು, ಗಂಟಲು", sub: "ಗಂಟಲು ನೋವು, ಸೈನಸ್" },
      gynae: { name: "ಸ್ತ್ರೀರೋಗ ವಿಭಾಗ", sub: "ಮುಟ್ಟು, ಗರ್ಭಧಾರಣೆ" },
      pulmo: { name: "ಉಸಿರಾಟದ ವಿಭಾಗ", sub: "ಉಬ್ಬಸ, ದಮ್ಮು" },
      ophthal: { name: "ಕಣ್ಣಿನ ವಿಭಾಗ", sub: "ಮಸುಕಾದ ದೃಷ್ಟಿ, ಉರಿ" }
    },
    symptoms: {
      fever: { name: "ಜ್ವರ ಮತ್ತು ನಡುಕ", desc: "ದೇಹದ ತಾಪಮಾನ, ಚಳಿ", isRedFlag: false, targetDept: "general" },
      cough: { name: "ಕೆಮ್ಮು ಮತ್ತು ಶೀತ", desc: "ಗಂಟಲು ನೋವು, ಕೆಮ್ಮು", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "ಹೊಟ್ಟೆ ನೋವು & ಅಸಿಡಿಟಿ", desc: "ಹೊಟ್ಟೆ ಸೆಳೆತ, ಗ್ಯಾಸ್", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "ಎದೆ ನೋವು & ಬಿಗಿತ", desc: "ಎದೆಯಲ್ಲಿ ಒತ್ತಡ, ಎಡಗೈ ನೋವು", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "ಉಸಿರಾಟದ ತೊಂದರೆ", desc: "ಉಬ್ಬಸ, ಆಯಾಸ", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "ಕೀಲು ಮತ್ತು ಮೊಣಕಾಲು ನೋವು", desc: "ಮೊಣಕಾಲು ಊತ", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "ಚರ್ಮದ ತುರಿಕೆ & ದದ್ದುಗಳು", desc: "ಅಲರ್ಜಿ, ಕೆಂಪು ಕಲೆಗಳು", isRedFlag: false, targetDept: "derma" },
      headache: { name: "ತಲೆನೋವು & ತಲೆತಿರುಗುವಿಕೆ", desc: "ಮೈಗ್ರೇನ್, ಕಣ್ಣು ಕತ್ತಲೆ", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "ಎದೆ ನೋವು ನಿರಂತರವಾಗಿದ್ದು ಎಡಗೈ ಅಥವಾ ದವಡೆಗೆ ಹರಡುತ್ತಿದೆಯೇ?",
        options: [
          { text: "ಎದೆಯಲ್ಲಿ ತೀವ್ರ ಒತ್ತಡ ಮತ್ತು ಎಡಗೈ ನೋವು (ತುರ್ತು ಚಿಕಿತ್ಸೆ)", isUrgent: true },
          { text: "ಕೆಮ್ಮುವಾಗ ಮಾತ್ರ ಲಘು ನೋವು", isUrgent: false }
        ]
      },
      breathless: {
        question: "ಶಾಂತವಾಗಿ ಕುಳಿತಿರುವಾಗಲೂ ತೀವ್ರ ಉಸಿರಾಟದ ತೊಂದರೆ ಮತ್ತು ಬೆವರು ಬರುತ್ತಿದೆಯೇ?",
        options: [
          { text: "ಕುಳಿತಿರುವಾಗಲೂ ತೀವ್ರ ಉಬ್ಬಸ (ತುರ್ತು)", isUrgent: true },
          { text: "ಮೆಟ್ಟಿಲು ಹತ್ತುವಾಗ ಮಾತ್ರ ಉಬ್ಬಸ", isUrgent: false }
        ]
      }
    }
  },

  // 9. MALAYALAM
  ml: {
    langName: "മലയാളം",
    nativeName: "മലയാളം",
    bcp47: "ml-IN",
    tagline: "AI ക്ലിനിക്കൽ ഇൻടേക്ക് & ഒപിഡി കിയോസ്ക്",
    avatarWelcome: "നമസ്കാരം! ഞാൻ ഡോ. മെഡി. മൈക്രോഫോണിൽ സംസാരിച്ചോ സ്ക്രീനിൽ തൊട്ടോ വിവരങ്ങൾ നൽകാം.",
    steps: {
      1: "ഭാഷയും വിവരങ്ങളും",
      2: "ലക്ഷണങ്ങളും ശബ്ദവും",
      3: "സുരക്ഷാ പരിശോധന",
      4: "ആയുഷ് / ആരോഗ്യം",
      5: "ഡോക്യുമെന്റ് സ്കാനർ",
      6: "ടോക്കണും പേയ്‌മെന്റും"
    },
    stepSubtitles: {
      1: "ഭാഷ തിരഞ്ഞെടുത്ത് പേരും പ്രായവും നൽകുക",
      2: "ലക്ഷണങ്ങൾ സംസാരിക്കുക (AI വിഭാഗം നിർദ്ദേശിക്കും)",
      3: "അടിയന്തര ലക്ഷണങ്ങളുടെ സുരക്ഷാ പരിശോധന",
      4: "ദഹനം, ഉറക്കം, ജീവിതശൈലി വിവരങ്ങൾ",
      5: "ക്യാമറ വഴി കുറിപ്പടികൾ സ്കാൻ ചെയ്യുക",
      6: "അപ്പോയിന്റ്മെന്റ് ടോക്കൺ, UPI പേയ്‌മെന്റ് & രസീത്"
    },
    labels: {
      selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
      fullName: "രോഗിയുടെ പേര്",
      fullNamePlaceholder: "ഉദാ. രമേഷ്",
      age: "പ്രായം",
      agePlaceholder: "ഉദാ. 45",
      gender: "ലിംഗം",
      male: "പുരുഷൻ",
      female: "സ്ത്രീ",
      other: "മറ്റുള്ളവ",
      mobile: "മൊബൈൽ നമ്പർ",
      mobilePlaceholder: "10 അക്ക നമ്പർ",
      abhaNumber: "ആഭാ നമ്പർ",
      abhaPlaceholder: "14 അക്ക ആഭാ",
      deptPreference: "വിഭാഗം (AI നിർദ്ദേശം)",
      aiRecommendedBadge: "✨ എഐ നിർദ്ദേശം",
      next: "തുടരുക",
      back: "പിന്നോട്ട്",
      submitKiosk: "ടോക്കൺ നേടുക",
      speakHelp: "ശബ്ദ സഹായി",
      listening: "കേൾക്കുന്നു... മൈക്കിൽ സംസാരിക്കൂ",
      tapToSpeak: "സംസാരിച്ച് ലക്ഷണങ്ങൾ പറയൂ",
      voiceLiveBanner: "തത്സമയ ശബ്ദ വാചകം:",
      severity: "തീവ്രത",
      severityMild: "കുറഞ്ഞത്",
      severityMod: "മിതമായത്",
      severitySevere: "കഠിനമായ വേദന / അടിയന്തിരം",
      duration: "എത്ര നാളായി?",
      durToday: "ഇന്ന് തുടങ്ങി (< 24 മണിക്കൂർ)",
      durFewDays: "2 - 3 ദിവസം",
      durWeek: "1 ആഴ്ച",
      durMonth: "1 മാസത്തിൽ കൂടുതൽ",
      cameraScanTitle: "ക്യാമറ ഡോക്യുമെന്റ് സ്കാനർ",
      cameraScanSub: "കുറിപ്പടി ക്യാമറയ്ക്ക് മുന്നിൽ കാണിക്കുക",
      snapDocBtn: "ഫോട്ടോ എടുത്ത് സ്കാൻ ചെയ്യുക",
      scanningLaser: "മരുന്നുകൾ AI വായിച്ചെടുക്കുന്നു...",
      tokenSuccess: "രജിസ്ട്രേഷൻ വിജയകരമായി പൂർത്തിയായി!",
      appointmentSlot: "പരിശോധനാ സമയം:",
      slotTime: "ഇന്ന് രാവിലെ 10:45 (സ്ലോട്ട് #4)",
      tokenNumber: "ടോക്കൺ നമ്പർ",
      estWait: "കാത്തിരിപ്പ് സമയം",
      roomAssigned: "മുറി നമ്പർ",
      feeTitle: "ഒപിഡി ഫീസ്",
      feeAmount: "₹50 (സാധാരണ ഒപിഡി)",
      payMethod: "പേയ്‌മെന്റ് രീതി",
      payUpi: "UPI QR (GPay / PhonePe / Paytm)",
      payCash: "പണം",
      payPmjay: "ആയുഷ്മാൻ ഭാരത് (സൗജന്യം)",
      upiScanText: "UPI QR കോഡ് സ്കാൻ ചെയ്യുക",
      paySuccessNotice: "✅ പേയ്‌മെന്റ് വിജയകരം (#RCP-8821)",
      cancelApptBtn: "റദ്ദാക്കുക / റീഫണ്ട് നേടുക",
      refundModalTitle: "റദ്ദാക്കലും റീഫണ്ടും",
      refundSuccess: "അപ്പോയിന്റ്മെന്റ് റദ്ദാക്കി. ഫീസ് (₹50) ഉടൻ തിരികെ നൽകി.",
      printSlip: "പ്രിന്റ് ചെയ്യുക"
    },
    departments: {
      general: { name: "ജനറൽ മെഡിസിൻ", sub: "പനി, ജലദോഷം, ബിപി" },
      ayush: { name: "ആയുർവേദ വിഭാഗം", sub: "ദഹനം, ഗ്യാസ്, ആരോഗ്യം" },
      ortho: { name: "അസ്ഥി & സന്ധി രോഗങ്ങൾ", sub: "സന്ധി വേദന, ഒടിവ്" },
      pediatrics: { name: "ശിശുരോഗ വിഭാഗം", sub: "കുട്ടികളുടെ പനി, വാക്സിൻ" },
      derma: { name: "ത്വക്ക് രോഗ വിഭാഗം", sub: "ചൊറിച്ചിൽ, അലർജി" },
      cardio: { name: "ഹൃദ്രോഗ വിഭാഗം", sub: "നെഞ്ചുവേദന, കിതപ്പ്" },
      ent: { name: "ഇ എൻ ടി", sub: "തൊണ്ടവേദന, സൈനസ്" },
      gynae: { name: "സ്ത്രീരോഗ വിഭാഗം", sub: "ആർത്തവം, ഗർഭം" },
      pulmo: { name: "ശ്വാസകോശ വിഭാഗം", sub: "ആസ്ത്മ, ശ്വാസംമുട്ടൽ" },
      ophthal: { name: "നേത്രരോഗ വിഭാഗം", sub: "കാഴ്ച മങ്ങൽ, എരിച്ചിൽ" }
    },
    symptoms: {
      fever: { name: "പനിയും വിറയലും", desc: "ശരീര താപനില, തണുപ്പ്", isRedFlag: false, targetDept: "general" },
      cough: { name: "ചുമയും ജലദോഷവും", desc: "തൊണ്ടവേദന, ചുമ", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "വയറുവേദന & അസിഡിറ്റി", desc: "വയറ്റിൽ കൊളുത്തിപ്പിടുത്തം", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "നെഞ്ചുവേദന & ഭാരം", desc: "നെഞ്ചിൽ സമ്മർദ്ദം, ഇടതുകൈ വേദന", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "ശ്വാസംമുട്ടൽ", desc: "ശ്വാസമെടുക്കാൻ ബുദ്ധിമുട്ട്", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "സന്ധിവേദന & നടുവേദന", desc: "മുട്ടുവേദന, നീര്", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "ചൊറിച്ചിലും പാടുകളും", desc: "അലർജി, ചുവന്ന തടിപ്പുകൾ", isRedFlag: false, targetDept: "derma" },
      headache: { name: "തലവേദന & തലകറക്കം", desc: "മൈഗ്രെയ്ൻ, കണ്ണിൽ ഇരുട്ട്", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "നെഞ്ചുവേദന വിട്ടുമാറാതെ ഇടതുകൈയിലേക്കോ താടിയിലേക്കോ വ്യാപിക്കുന്നുണ്ടോ?",
        options: [
          { text: "നെഞ്ചിൽ കടുത്ത സമ്മർദ്ദവും ഇടതുകൈ വേദനയും (അടിയന്തിരം)", isUrgent: true },
          { text: "ചുമയ്ക്കുമ്പോൾ മാത്രം നേരിയ വേദന", isUrgent: false }
        ]
      },
      breathless: {
        question: "വെറുതെ ഇരിക്കുമ്പോഴും കടുത്ത ശ്വാസംമുട്ടലും വിയർപ്പും അനുഭവപ്പെടുന്നുണ്ടോ?",
        options: [
          { text: "ഇരിക്കുമ്പോഴും കഠിനമായ ശ്വാസംമുട്ടൽ (അടിയന്തിരം)", isUrgent: true },
          { text: "പടികൾ കയറുമ്പോൾ മാത്രം ശ്വാസംമുട്ടൽ", isUrgent: false }
        ]
      }
    }
  },

  // 10. PUNJABI
  pa: {
    langName: "ਪੰਜਾਬੀ",
    nativeName: "ਪੰਜਾਬੀ",
    bcp47: "pa-IN",
    tagline: "ਏਆਈ ਕਲੀਨਿਕਲ ਇਨਟੇਕ ਅਤੇ ਓਪੀਡੀ ਕਿਓਸਕ",
    avatarWelcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਡਾ. ਮੇਡੀ ਹਾਂ। ਤੁਸੀਂ ਬੋਲ ਕੇ ਜਾਂ ਛੂਹ ਕੇ ਜਾਣਕਾਰੀ ਦਰਜ ਕਰ ਸਕਦੇ ਹੋ।",
    steps: {
      1: "ਭਾਸ਼ਾ ਅਤੇ ਪਛਾਣ",
      2: "ਲੱਛਣ ਅਤੇ ਆਵਾਜ਼",
      3: "ਸੁਰੱਖਿਆ ਜਾਂਚ",
      4: "ਆਯੁਸ਼ / ਜੀਵਨ ਸ਼ੈਲੀ",
      5: "ਦਸਤਾਵੇਜ਼ ਸਕੈਨਰ",
      6: "ਟੋਕਨ ਅਤੇ ਭੁਗਤਾਨ"
    },
    stepSubtitles: {
      1: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ ਅਤੇ ਨਾਮ, ਉਮਰ ਦਰਜ ਕਰੋ",
      2: "ਮਾਈਕ ਵਿੱਚ ਬੋਲੋ ਜਾਂ ਲੱਛਣ ਚੁਣੋ (AI ਵਿਭਾਗ ਤੈਅ ਕਰੇਗਾ)",
      3: "ਗੰਭੀਰ ਲੱਛਣਾਂ ਦੀ ਕਲੀਨਿਕਲ ਸੁਰੱਖਿਆ ਪੁਸ਼ਟੀ",
      4: "ਹਾਜ਼ਮਾ, ਨੀਂਦ ਅਤੇ ਸਿਹਤ ਸਥਿਤੀ",
      5: "ਕੈਮਰਾ ਸਕੈਨਰ ਨਾਲ ਪੁਰਾਣੀ ਪਰਚੀ ਸਕੈਨ ਕਰੋ",
      6: "ਅਪਾਇੰਟਮੈਂਟ ਟੋਕਨ, ਯੂਪੀਆਈ ਫੀਸ ਅਤੇ ਰਸੀਦ"
    },
    labels: {
      selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
      fullName: "ਮਰੀਜ਼ ਦਾ ਪੂਰਾ ਨਾਮ",
      fullNamePlaceholder: "ਉਦਾ. ਰਮੇਸ਼ ਸਿੰਘ",
      age: "ਉਮਰ (ਸਾਲ)",
      agePlaceholder: "ਉਦਾ. 45",
      gender: "ਲਿੰਗ",
      male: "ਪੁਰਸ਼",
      female: "ਮਹਿਲਾ",
      other: "ਹੋਰ",
      mobile: "ਮੋਬਾਈਲ ਨੰਬਰ",
      mobilePlaceholder: "10 ਅੰਕਾਂ ਦਾ ਨੰਬਰ",
      abhaNumber: "ਆਭਾ ਆਈਡੀ",
      abhaPlaceholder: "14 ਅੰਕਾਂ ਦਾ ਆਭਾ",
      deptPreference: "ਵਿਭਾਗ (AI ਸੁਝਾਅ)",
      aiRecommendedBadge: "✨ ਏਆਈ ਸੁਝਾਅ",
      next: "ਅੱਗੇ ਵਧੋ",
      back: "ਪਿੱਛੇ ਜਾਓ",
      submitKiosk: "ਟੋਕਨ ਪ੍ਰਾਪਤ ਕਰੋ",
      speakHelp: "ਆਵਾਜ਼ ਗਾਈਡ",
      listening: "ਸੁਣ ਰਿਹਾ ਹੈ...",
      tapToSpeak: "ਬੋਲ ਕੇ ਲੱਛਣ ਦੱਸੋ",
      voiceLiveBanner: "ਲਾਈਵ ਆਵਾਜ਼ ਟੈਕਸਟ:",
      severity: "ਤਕਲੀਫ਼ ਦੀ ਤੀਬਰਤਾ",
      severityMild: "ਹਲਕਾ",
      severityMod: "ਦਰਮਿਆਨਾ",
      severitySevere: "ਬਹੁਤ ਤੇਜ਼ ਦਰਦ / ਐਮਰਜੈਂਸੀ",
      duration: "ਕਿੰਨੇ ਸਮੇਂ ਤੋਂ ਹੈ?",
      durToday: "ਅੱਜ ਸ਼ੁਰੂ ਹੋਇਆ (< 24 ਘੰਟੇ)",
      durFewDays: "2 - 3 ਦਿਨ",
      durWeek: "1 ਹਫ਼ਤਾ",
      durMonth: "1 ਮਹੀਨੇ ਤੋਂ ਵੱਧ",
      cameraScanTitle: "ਕੈਮਰਾ ਦਸਤਾਵੇਜ਼ ਸਕੈਨਰ",
      cameraScanSub: "ਦਵਾਈ ਦੀ ਪਰਚੀ ਕੈਮਰੇ ਸਾਹਮਣੇ ਰੱਖੋ",
      snapDocBtn: "ਫੋਟੋ ਖਿੱਚੋ ਅਤੇ ਸਕੈਨ ਕਰੋ",
      scanningLaser: "AI ਦਵਾਈਆਂ ਪੜ੍ਹ ਰਿਹਾ ਹੈ...",
      tokenSuccess: "ਅਪਾਇੰਟਮੈਂਟ ਸਫਲਤਾਪੂਰਵਕ ਬੁੱਕ ਹੋ ਗਈ!",
      appointmentSlot: "ਅਨੁਮਾਨਿਤ ਸਮਾਂ:",
      slotTime: "ਅੱਜ ਸਵੇਰੇ 10:45 (ਸਲਾਟ #4)",
      tokenNumber: "ਟੋਕਨ ਨੰਬਰ",
      estWait: "ਉਡੀਕ ਦਾ ਸਮਾਂ",
      roomAssigned: "ਕਮਰਾ ਨੰਬਰ",
      feeTitle: "ਓਪੀਡੀ ਫੀਸ",
      feeAmount: "₹50 (ਆਮ ਓਪੀਡੀ)",
      payMethod: "ਭੁਗਤਾਨ ਦਾ ਤਰੀਕਾ",
      payUpi: "UPI QR (GPay / PhonePe / Paytm)",
      payCash: "ਨਕਦ",
      payPmjay: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ (ਮੁਫ਼ਤ)",
      upiScanText: "UPI QR ਕੋਡ ਸਕੈਨ ਕਰੋ",
      paySuccessNotice: "✅ ਭੁਗਤਾਨ ਸਫਲ ਰਿਹਾ (#RCP-8821)",
      cancelApptBtn: "ਰੱਦ ਕਰੋ / ਰਿਫੰਡ ਲਵੋ",
      refundModalTitle: "ਰੱਦ ਕਰਨਾ ਅਤੇ ਰਿਫੰਡ",
      refundSuccess: "ਅਪਾਇੰਟਮੈਂਟ ਰੱਦ ਕਰ ਦਿੱਤੀ ਗਈ ਹੈ। ਫੀਸ (₹50) ਵਾਪਸ ਭੇਜ ਦਿੱਤੀ ਗਈ ਹੈ।",
      printSlip: "ਪ੍ਰਿੰਟ ਕਰੋ"
    },
    departments: {
      general: { name: "ਜਨਰਲ ਮੈਡੀਸਨ", sub: "ਬੁਖਾਰ, ਖੰਘ, ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ" },
      ayush: { name: "ਆਯੁਰਵੇਦ ਅਤੇ ਯੋਗਾ", sub: "ਹਾਜ਼ਮਾ, ਗੈਸ, ਸਿਹਤ" },
      ortho: { name: "ਹੱਡੀਆਂ ਅਤੇ ਜੋੜਾਂ ਦਾ ਰੋਗ", sub: "ਗੋਡਿਆਂ ਦਾ ਦਰਦ, ਫ੍ਰੈਕਚਰ" },
      pediatrics: { name: "ਬਾਲ ਰੋਗ ਵਿਭਾਗ", sub: "ਬੱਚਿਆਂ ਦਾ ਬੁਖਾਰ, ਟੀਕਾਕਰਨ" },
      derma: { name: "ਚਮੜੀ ਰੋਗ ਵਿਭਾਗ", sub: "ਖਾਰਸ਼, ਐਲਰਜੀ" },
      cardio: { name: "ਦਿਲ ਦੇ ਰੋਗਾਂ ਦਾ ਵਿਭਾਗ", sub: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ, ਘਬਰਾਹਟ" },
      ent: { name: "ਕੰਨ, ਨੱਕ ਅਤੇ ਗਲਾ", sub: "ਗਲੇ ਦਾ ਦਰਦ, ਸਾਈਨਸ" },
      gynae: { name: "ਇਸਤਰੀ ਰੋਗ ਵਿਭਾਗ", sub: "ਮਾਹਵਾਰੀ, ਗਰਭ ਅਵਸਥਾ" },
      pulmo: { name: "ਛਾਤੀ ਅਤੇ ਸਾਹ ਰੋਗ", sub: "ਦਮਾ, ਸਾਹ ਚੜ੍ਹਨਾ" },
      ophthal: { name: "ਅੱਖਾਂ ਦਾ ਵਿਭਾਗ", sub: "ਧੁੰਦਲਾ ਦਿਖਣਾ, ਜਲਣ" }
    },
    symptoms: {
      fever: { name: "ਬੁਖਾਰ ਅਤੇ ਕੰਬਣੀ", desc: "ਤੇਜ਼ ਤਾਪਮਾਨ, ਠੰਢ", isRedFlag: false, targetDept: "general" },
      cough: { name: "ਖੰਘ ਅਤੇ ਜ਼ੁਕਾਮ", desc: "ਗਲੇ ਵਿੱਚ ਖਰਾਸ਼, ਖੰਘ", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "ਪੇਟ ਦਰਦ ਅਤੇ ਐਸੀਡਿਟੀ", desc: "ਮਰੋੜ, ਗੈਸ, ਉਲਟੀ", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਅਤੇ ਭਾਰੀਪਣ", desc: "ਛਾਤੀ ਵਿੱਚ ਦਬਾਅ, ਖੱਬੀ ਬਾਂਹ ਵਿੱਚ ਦਰਦ", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "ਸਾਹ ਲੈਣ ਵਿੱਚ ਤਕਲੀਫ਼", desc: "ਸਾਹ ਫੁੱਲਣਾ, ਘਬਰਾਹਟ", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "ਜੋੜਾਂ ਅਤੇ ਗੋਡਿਆਂ ਦਾ ਦਰਦ", desc: "ਸੋਜ, ਅਕੜਾਅ", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "ਚਮੜੀ 'ਤੇ ਖਾਰਸ਼ ਅਤੇ ਦਾਣੇ", desc: "ਐਲਰਜੀ, ਲਾਲ ਧੱਫੜ", isRedFlag: false, targetDept: "derma" },
      headache: { name: "ਸਿਰਦਰਦ ਅਤੇ ਚੱਕਰ", desc: "ਅੱਧਾ ਸੀਸ, ਅੱਖਾਂ ਅੱਗੇ ਹਨੇਰਾ", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "ਕੀ ਛਾਤੀ ਵਿੱਚ ਭਾਰੀ ਦਬਾਅ ਹੈ ਅਤੇ ਖੱਬੀ ਬਾਂਹ ਵੱਲ ਫੈਲ ਰਿਹਾ ਹੈ?",
        options: [
          { text: "ਛਾਤੀ 'ਤੇ ਭਾਰੀ ਦਬਾਅ ਅਤੇ ਖੱਬੀ ਬਾਂਹ ਵਿੱਚ ਦਰਦ (ਐਮਰਜੈਂਸੀ)", isUrgent: true },
          { text: "ਸਿਰਫ਼ ਖੰਘਣ ਵੇਲੇ ਹਲਕਾ ਦਰਦ", isUrgent: false }
        ]
      },
      breathless: {
        question: "ਕੀ ਬੈਠੇ ਹੋਣ 'ਤੇ ਵੀ ਤੇਜ਼ ਸਾਹ ਚੜ੍ਹ ਰਿਹਾ ਹੈ ਅਤੇ ਪਸੀਨਾ ਆ ਰਿਹਾ ਹੈ?",
        options: [
          { text: "ਬੈਠੇ ਹੋਣ 'ਤੇ ਵੀ ਤੇਜ਼ ਸਾਹ ਫੁੱਲਣਾ (ਐਮਰਜੈਂਸੀ)", isUrgent: true },
          { text: "ਸਿਰਫ਼ ਪੌੜੀਆਂ ਚੜ੍ਹਨ ਵੇਲੇ ਸਾਹ ਚੜ੍ਹਨਾ", isUrgent: false }
        ]
      }
    }
  },

  // 11. ODIA
  or: {
    langName: "ଓଡ଼ିଆ",
    nativeName: "ଓଡ଼ିଆ",
    bcp47: "or-IN",
    tagline: "ଏଆଇ କ୍ଲିନିକାଲ ଇନଟେକ ଏବଂ ଓପିଡି କିଓସ୍କ",
    avatarWelcome: "ନମସ୍କାର! ମୁଁ ଡା. ମେଡି। ଆପଣ କହି କିମ୍ବା ସ୍ପର୍ଶ କରି ସୂଚନା ଦେଇପାରିବେ।",
    steps: {
      1: "ଭାଷା ଓ ପରିଚୟ",
      2: "ଲକ୍ଷଣ ଓ ଭଏସ",
      3: "ସୁରକ୍ଷା ଯାଞ୍ଚ",
      4: "ଆୟୁଷ / ଜୀବନଶୈଳୀ",
      5: "ଦଲିଲ ସ୍କାନର",
      6: "ଟୋକନ ଓ ଦେୟ"
    },
    stepSubtitles: {
      1: "ଭାଷା ବାଛନ୍ତୁ ଏବଂ ନାମ, ବୟସ ଲେଖନ୍ତୁ",
      2: "ମାଇକରେ କୁହନ୍ତୁ କିମ୍ବା ଲକ୍ଷଣ ବାଛନ୍ତୁ (AI ବିଭାଗ ନିର୍ଦ୍ଧାରଣ କରିବ)",
      3: "ଜରୁରୀକାଳୀନ ଲକ୍ଷଣର ସୁରକ୍ଷା ଯାଞ୍ଚ",
      4: "ହଜମ ଶକ୍ତି, ନିଦ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ",
      5: "କ୍ୟାମେରା ସ୍କାନରରେ ପ୍ରେସକ୍ରିପସନ ସ୍କାନ କରନ୍ତୁ",
      6: "ଆପଏଣ୍ଟମେଣ୍ଟ ଟୋକନ, UPI ଦେୟ ଏବଂ ରସିଦ"
    },
    labels: {
      selectLanguage: "ଭାଷା ଚୟନ କରନ୍ତୁ",
      fullName: "ରୋଗୀଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ",
      fullNamePlaceholder: "ଉଦା. ରମେଶ ପ୍ରଧାନ",
      age: "ବୟସ (ବର୍ଷ)",
      agePlaceholder: "ଉଦା. 45",
      gender: "ଲିଙ୍ଗ",
      male: "ପୁରୁଷ",
      female: "ମହିଳା",
      other: "ଅନ୍ୟାନ୍ୟ",
      mobile: "ମୋବାଇଲ ନମ୍ବର",
      mobilePlaceholder: "10 ଅଙ୍କର ନମ୍ବର",
      abhaNumber: "ଆଭା ନମ୍ବର",
      abhaPlaceholder: "14 ଅଙ୍କର ଆଭା",
      deptPreference: "ବିଭାଗ (AI ସୁପାରିଶ)",
      aiRecommendedBadge: "✨ ଏଆଇ ସୁପାରିଶ",
      next: "ଆଗକୁ ବଢ଼ନ୍ତୁ",
      back: "ପଛକୁ ଯାଆନ୍ତୁ",
      submitKiosk: "ଟୋକନ ପାଆନ୍ତୁ",
      speakHelp: "ଭଏସ ଗାଇଡ",
      listening: "ଶୁଣୁଛି...",
      tapToSpeak: "କହି ଲକ୍ଷଣ ଜଣାନ୍ତୁ",
      voiceLiveBanner: "ଲାଇଭ ଭଏସ ପାଠ୍ୟ:",
      severity: "ତୀବ୍ରତା",
      severityMild: "ସାମାନ୍ୟ",
      severityMod: "ମଧ୍ୟମ",
      severitySevere: "ଅତ୍ୟଧିକ ଯନ୍ତ୍ରଣା / ଜରୁରୀ",
      duration: "କେତେ ଦିନରୁ?",
      durToday: "ଆଜି ଆରମ୍ଭ (< 24 ଘଣ୍ଟା)",
      durFewDays: "2 - 3 ଦିନ",
      durWeek: "1 ସପ୍ତାହ",
      durMonth: "1 ମାସରୁ ଅଧିକ",
      cameraScanTitle: "କ୍ୟାମେରା ଡକ୍ୟୁମେଣ୍ଟ ସ୍କାନର",
      cameraScanSub: "ଔଷଧ ପର୍ଚିଟି କ୍ୟାମେରା ଆଗରେ ରଖନ୍ତୁ",
      snapDocBtn: "ଫଟୋ ଉଠାଇ ସ୍କାନ କରନ୍ତୁ",
      scanningLaser: "AI ଔଷଧ ବିବରଣୀ ପଢୁଛି...",
      tokenSuccess: "ପଞ୍ଜୀକରଣ ସଫଳ ହେଲା!",
      appointmentSlot: "ଅନୁମାନିତ ସମୟ:",
      slotTime: "ଆଜି ସକାଳ 10:45 (ସ୍ଲଟ #4)",
      tokenNumber: "ଟୋକନ ନମ୍ବର",
      estWait: "ଅପେକ୍ଷା ସମୟ",
      roomAssigned: "ରୁମ ନମ୍ବର",
      feeTitle: "ଓପିଡି ଫି",
      feeAmount: "₹50 (ସାଧାରଣ ଓପିଡି)",
      payMethod: "ଦେୟ ପଦ୍ଧତି",
      payUpi: "UPI QR (GPay / PhonePe / Paytm)",
      payCash: "ନଗଦ",
      payPmjay: "ଆୟୁଷ୍ମାନ ଭାରତ (ମାଗଣା)",
      upiScanText: "UPI QR କୋଡ ସ୍କାନ କରନ୍ତୁ",
      paySuccessNotice: "✅ ଦେୟ ସଫଳ ହେଲା (#RCP-8821)",
      cancelApptBtn: "ବାତିଲ କରନ୍ତୁ / ଫେରସ୍ତ ପାଆନ୍ତୁ",
      refundModalTitle: "ବାତିଲ ଓ ଫେରସ୍ତ",
      refundSuccess: "ଆପଏଣ୍ଟମେଣ୍ଟ ବାତିଲ କରାଗଲା। ଫିସ (₹50) ତୁରନ୍ତ ଫେରସ୍ତ କରାଯାଇଛି।",
      printSlip: "ପ୍ରିଣ୍ଟ କରନ୍ତୁ"
    },
    departments: {
      general: { name: "ଜେନେରାଲ ମେଡିସିନ", sub: "ଜ୍ୱର, ଥଣ୍ଡା, ରକ୍ତଚାପ" },
      ayush: { name: "ଆୟୁର୍ବେଦ ଓ ଯୋଗ", sub: "ହଜମ, ଗ୍ୟାସ, ସ୍ୱାସ୍ଥ୍ୟ" },
      ortho: { name: "ଅସ୍ଥିଶଲ୍ୟ ବିଭାଗ", sub: "ଗଣ୍ଠି ବିନ୍ଧା, ଭଙ୍ଗା" },
      pediatrics: { name: "ଶିଶୁରୋଗ ବିଭାଗ", sub: "ଶିଶୁ ଜ୍ୱର, ଟିକା" },
      derma: { name: "ଚର୍ମରୋଗ ବିଭାଗ", sub: "କୁଣ୍ଡିଆ, ଆଲର୍ଜି" },
      cardio: { name: "ହୃଦରୋଗ ବିଭାଗ", sub: "ଛାତି ଯନ୍ତ୍ରଣା, ଛାତି ଧੜଧੜ" },
      ent: { name: "କାନ, ନାକ ଓ ଗଳା", sub: "ଗଳା ଦରଜ, ସାଇନସ" },
      gynae: { name: "ସ୍ତ୍ରୀରୋଗ ବିଭାଗ", sub: "ଋତୁସ୍ରାବ, ମାତୃତ୍ୱ" },
      pulmo: { name: "ଶ୍ୱାସରୋଗ ବିଭାଗ", sub: "ଶ୍ୱାସକଷ୍ଟ, କାଶ" },
      ophthal: { name: "ଚକ୍ଷୁରୋଗ ବିଭାଗ", sub: "ଅସ୍ପଷ୍ଟ ଦୃଷ୍ଟି, ଜଳାପୋଡ଼ା" }
    },
    symptoms: {
      fever: { name: "ଜ୍ୱର ଏବଂ କମ୍ପନ", desc: "ଶରୀର ଉତ୍ତାପ, ଥଣ୍ଡା", isRedFlag: false, targetDept: "general" },
      cough: { name: "କାଶ ଏବଂ ଥଣ୍ଡା", desc: "ଗଳା ଦରଜ, କାଶ", isRedFlag: false, targetDept: "ent" },
      stomach_pain: { name: "ପେଟ ବିନ୍ଧା ଓ ଏସିଡିଟି", desc: "ପେଟ ମୋଡ଼ିବା, ଗ୍ୟାସ", isRedFlag: false, targetDept: "ayush" },
      chest_pain: { name: "ଛାତି ଯନ୍ତ୍ରଣା ଓ ଚାପ", desc: "ଛାତିରେ ଚାପ, ବାମ ହାତ ବିନ୍ଧା", isRedFlag: true, targetDept: "cardio" },
      breathless: { name: "ଶ୍ୱାସକଷ୍ଟ", desc: "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ", isRedFlag: true, targetDept: "pulmo" },
      joint_pain: { name: "ଗଣ୍ଠି ଓ ଆଣ୍ଠୁ ଯନ୍ତ୍ରଣା", desc: "ଆଣ୍ଠୁ ଫୁଲା, କଠିନତା", isRedFlag: false, targetDept: "ortho" },
      skin_rash: { name: "ଚର୍ମ କୁଣ୍ଡିଆ ଓ ଲାଲ ଦାଗ", desc: "ଆଲର୍ଜି, ଫୋଟକା", isRedFlag: false, targetDept: "derma" },
      headache: { name: "ମୁଣ୍ଡବିନ୍ଧା ଓ ମୁଣ୍ଡ ବୁଲାଇବା", desc: "ଅଧକପାଳି, ଆଖି ଆଗରେ ଅନ୍ଧାର", isRedFlag: false, targetDept: "general" }
    },
    reconfirmations: {
      chest_pain: {
        question: "ଛାତିରେ ଅତ୍ୟଧିକ ଚାପ ଲାଗୁଛି ଏବଂ ବାମ ହାତ ଆଡ଼କୁ ଯନ୍ତ୍ରଣା ବ୍ୟାପୁଛି କି?",
        options: [
          { text: "ଛାତିରେ ତୀବ୍ର ଚାପ ଓ ବାମ ହାତ ଯନ୍ତ୍ରଣା (ଜରୁରୀକାଳୀନ)", isUrgent: true },
          { text: "କେବଳ କାଶିବା ବେଳେ ସାମାନ୍ୟ ଯନ୍ତ୍ରଣା", isUrgent: false }
        ]
      },
      breathless: {
        question: "ବସିଥିବା ଅବସ୍ଥାରେ ମଧ୍ୟ ପ୍ରବଳ ଶ୍ୱାସକଷ୍ଟ ଏବଂ ଝାଳ ବହୁଛି କି?",
        options: [
          { text: "ବସିଥିଲେ ମଧ୍ୟ ପ୍ରବଳ ଶ୍ୱାସକଷ୍ଟ (ଜରୁରୀ)", isUrgent: true },
          { text: "କେବଳ ଚାଲିବା ବେଳେ ଶ୍ୱାସକଷ୍ଟ", isUrgent: false }
        ]
      }
    }
  }
};
