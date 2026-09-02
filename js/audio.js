// Audio & Voice Engine with Multilingual Web Speech APIs (TTS & STT)
class MediAudioEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.audioCtx = null;
    this.isSpeaking = false;
    this.isRecording = false;
    this.animFrameId = null;
    this.canvas = null;
    this.canvasCtx = null;
    
    // Language Code Map
    this.bcpMap = {
      hi: 'hi-IN',
      en: 'en-IN',
      gu: 'gu-IN',
      ta: 'ta-IN',
      te: 'te-IN',
      bn: 'bn-IN',
      mr: 'mr-IN',
      kn: 'kn-IN',
      ml: 'ml-IN',
      pa: 'pa-IN',
      or: 'or-IN'
    };
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playSound(type) {
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'tap') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'alert' || type === 'redflag') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(440, now + 0.12);
        osc.frequency.setValueAtTime(880, now + 0.24);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'scan') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  // Multilingual Speech Synthesis
  speakText(text, lang = 'hi') {
    if (!this.synth) return;
    this.synth.cancel();

    const targetBcp = this.bcpMap[lang] || 'hi-IN';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetBcp;

    // Match best available native voice
    const voices = this.synth.getVoices();
    const voicePrefix = lang.toLowerCase();
    const matchedVoice = voices.find(v => 
      v.lang.toLowerCase().includes(targetBcp.toLowerCase()) || 
      v.lang.toLowerCase().startsWith(voicePrefix) ||
      v.name.toLowerCase().includes(voicePrefix)
    );

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (window.drMedi) window.drMedi.setMood('speaking');
      this.updateSpeakerBadge(true);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      if (window.drMedi) window.drMedi.setMood('idle');
      this.updateSpeakerBadge(false);
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (window.drMedi) window.drMedi.setMood('idle');
      this.updateSpeakerBadge(false);
    };

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      if (window.drMedi) window.drMedi.setMood('idle');
      this.updateSpeakerBadge(false);
    }
  }

  updateSpeakerBadge(active) {
    const btn = document.getElementById('globalSpeakerBtn');
    if (btn) {
      if (active) {
        btn.classList.add('bg-teal-700', 'text-white', 'animate-pulse');
      } else {
        btn.classList.remove('bg-teal-700', 'text-white', 'animate-pulse');
      }
    }
  }

  // Real-time Waveform Visualizer
  startWaveformAnimation(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.canvasCtx = this.canvas.getContext('2d');
    this.isRecording = true;

    let phase = 0;
    const draw = () => {
      if (!this.isRecording || !this.canvasCtx) return;
      const width = this.canvas.width = this.canvas.offsetWidth;
      const height = this.canvas.height = this.canvas.offsetHeight;
      const ctx = this.canvasCtx;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 2.5;

      const colors = ['rgba(13, 148, 136, 0.9)', 'rgba(6, 182, 212, 0.8)', 'rgba(16, 185, 129, 0.6)'];

      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = colors[i];
        ctx.beginPath();
        const freq = 0.03 + i * 0.015;
        const amp = 14 + Math.sin(phase * 2 + i) * 10;
        const wavePhase = phase + (i * Math.PI) / 4;

        for (let x = 0; x < width; x += 3) {
          const y = height / 2 + Math.sin(x * freq + wavePhase) * amp * Math.sin((x / width) * Math.PI);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phase += 0.08;
      this.animFrameId = requestAnimationFrame(draw);
    };

    draw();
  }

  stopWaveformAnimation() {
    this.isRecording = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.canvasCtx && this.canvas) {
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

window.mediAudio = new MediAudioEngine();
