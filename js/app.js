// MediKiosk Main Application Orchestrator
class MediKioskHub {
  constructor() {
    this.currentMode = 'kiosk'; // 'kiosk', 'emr', 'split'
  }

  init() {
    // Initialize Kiosk & EMR instances
    if (window.kioskApp) window.kioskApp.init();
    if (window.doctorEMR) window.doctorEMR.init();

    this.setupNavigation();
    this.setupKeyboardShortcuts();
    this.setupQuickPresets();
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  setMode(mode) {
    this.currentMode = mode;
    if (window.mediAudio) window.mediAudio.playSound('tap');

    const kioskContainer = document.getElementById('kioskContainer');
    const emrContainer = document.getElementById('emrContainer');
    const splitNotice = document.getElementById('splitModeNotice');

    // Update Nav Switcher Buttons
    document.querySelectorAll('.mode-switch-btn').forEach(btn => {
      if (btn.getAttribute('data-mode') === mode) {
        btn.classList.add('bg-teal-700', 'text-white', 'shadow-md');
        btn.classList.remove('bg-white/10', 'text-teal-100', 'hover:bg-white/20');
      } else {
        btn.classList.remove('bg-teal-700', 'text-white', 'shadow-md');
        btn.classList.add('bg-white/10', 'text-teal-100', 'hover:bg-white/20');
      }
    });

    if (mode === 'kiosk') {
      if (kioskContainer) {
        kioskContainer.className = 'w-full max-w-5xl mx-auto block fade-in';
      }
      if (emrContainer) emrContainer.className = 'hidden';
      if (splitNotice) splitNotice.classList.add('hidden');
    } else if (mode === 'emr') {
      if (kioskContainer) kioskContainer.className = 'hidden';
      if (emrContainer) {
        emrContainer.className = 'w-full max-w-7xl mx-auto block fade-in';
        if (window.doctorEMR) window.doctorEMR.renderQueue();
      }
      if (splitNotice) splitNotice.classList.add('hidden');
    } else if (mode === 'split') {
      // Split presentation view
      if (kioskContainer) {
        kioskContainer.className = 'w-full lg:w-1/2 block fade-in border-r border-slate-300 pr-4';
      }
      if (emrContainer) {
        emrContainer.className = 'w-full lg:w-1/2 block fade-in pl-4';
        if (window.doctorEMR) window.doctorEMR.renderQueue();
      }
      if (splitNotice) splitNotice.classList.remove('hidden');
    }
  }

  setupNavigation() {
    // Mode Switch buttons
    document.querySelectorAll('.mode-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        this.setMode(mode);
      });
    });
  }

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.altKey && e.key.toLowerCase() === 'k') {
        this.setMode('kiosk');
      } else if (e.altKey && e.key.toLowerCase() === 'd') {
        this.setMode('emr');
      } else if (e.altKey && e.key.toLowerCase() === 's') {
        this.setMode('split');
      }
    });
  }

  setupQuickPresets() {
    // Inject sample test cases to quickly demonstrate features
    window.loadPresetScenario = (type) => {
      if (window.mediAudio) window.mediAudio.playSound('tap');

      if (type === 'redflag') {
        // Red Flag Chest Pain Case
        window.kioskApp.resetKiosk();
        window.kioskApp.state.name = "Dharmesh Shah";
        window.kioskApp.state.age = "58";
        window.kioskApp.state.gender = "Male";
        window.kioskApp.state.mobile = "98240 99881";
        window.kioskApp.state.department = "Cardiology";
        
        const inName = document.getElementById('kioskPatientName');
        const inAge = document.getElementById('kioskPatientAge');
        const inMobile = document.getElementById('kioskPatientMobile');
        if (inName) inName.value = "Dharmesh Shah";
        if (inAge) inAge.value = "58";
        if (inMobile) inMobile.value = "98240 99881";

        window.kioskApp.goToStep(2);
        window.kioskApp.toggleSymptom('chest_pain');
        window.kioskApp.toggleSymptom('breathless');
        window.kioskApp.setSeverity('Severe');
        window.kioskApp.setDuration('Started Today (< 24 hrs)');
        window.kioskApp.state.voiceTranscript = "छाती में बहुत तेज दबाव और बाईं बांह में दर्द हो रहा है।";

        const vt = document.getElementById('voiceTranscriptInput');
        if (vt) vt.value = window.kioskApp.state.voiceTranscript;
      } else if (type === 'ayush') {
        // AYUSH Digestion Case
        window.kioskApp.resetKiosk();
        window.kioskApp.state.name = "Meenakshi Iyer";
        window.kioskApp.state.age = "42";
        window.kioskApp.state.gender = "Female";
        window.kioskApp.state.mobile = "97441 22334";
        window.kioskApp.state.department = "AYUSH / Integrated Medicine";

        const inName = document.getElementById('kioskPatientName');
        const inAge = document.getElementById('kioskPatientAge');
        const inMobile = document.getElementById('kioskPatientMobile');
        if (inName) inName.value = "Meenakshi Iyer";
        if (inAge) inAge.value = "42";
        if (inMobile) inMobile.value = "97441 22334";

        window.kioskApp.goToStep(2);
        window.kioskApp.toggleSymptom('stomach_pain');
        window.kioskApp.setSeverity('Moderate');
        window.kioskApp.setDuration('More than 1 Month (Chronic)');
      }
    };

    window.resetAllDemoData = () => {
      if (confirm("Reset all patient queue data to default demo state?")) {
        localStorage.removeItem('medi_patients');
        if (window.doctorEMR) {
          window.doctorEMR.loadPatientsFromStorage();
          window.doctorEMR.renderQueue();
          if (window.doctorEMR.patients[0]) {
            window.doctorEMR.selectPatient(window.doctorEMR.patients[0].id);
          }
        }
        if (window.kioskApp) window.kioskApp.resetKiosk();
        alert("Demo data reset successfully!");
      }
    };
  }

  updateClock() {
    const clockEl = document.getElementById('globalLiveClock');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }
}

// Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
  window.mediApp = new MediKioskHub();
  window.mediApp.init();
});
