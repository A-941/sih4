// Doctor EMR Dashboard Controller for MediKiosk
class DoctorEMRApp {
  constructor() {
    this.patients = [];
    this.selectedPatientId = null;
    this.filter = 'all'; // 'all', 'redflag', 'ayush', 'completed'
    this.searchQuery = '';
    this.doctorName = "Dr. Amit Sharma, MD";
    this.doctorSpecialty = "Internal Medicine & OPD Triage";
    this.hospitalName = "Civil Hospital / AIIMS Digital OPD Hub";
  }

  init() {
    this.loadPatientsFromStorage();
    this.setupEventListeners();
    this.renderQueue();
    if (this.patients.length > 0 && !this.selectedPatientId) {
      this.selectPatient(this.patients[0].id);
    }
  }

  loadPatientsFromStorage() {
    try {
      const stored = localStorage.getItem('medi_patients');
      if (stored) {
        this.patients = JSON.parse(stored);
      } else if (window.INITIAL_PATIENTS) {
        this.patients = [...window.INITIAL_PATIENTS];
        this.savePatientsToStorage();
      }
    } catch(e) {
      this.patients = window.INITIAL_PATIENTS ? [...window.INITIAL_PATIENTS] : [];
    }
  }

  savePatientsToStorage() {
    localStorage.setItem('medi_patients', JSON.stringify(this.patients));
  }

  setupEventListeners() {
    // Listen for new patient submissions from Kiosk in real-time
    window.addEventListener('medi_queue_updated', (e) => {
      this.loadPatientsFromStorage();
      this.renderQueue();
      if (e.detail && e.detail.id) {
        this.selectPatient(e.detail.id);
      }
    });

    // Listen for cross-tab storage changes
    window.addEventListener('storage', (e) => {
      if (e.key === 'medi_patients') {
        this.loadPatientsFromStorage();
        this.renderQueue();
        if (this.selectedPatientId) {
          this.renderClinicalSummary();
        }
      }
    });
  }

  setFilter(filterType) {
    this.filter = filterType;
    if (window.mediAudio) window.mediAudio.playSound('tap');
    
    document.querySelectorAll('.emr-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filterType) {
        btn.classList.add('bg-teal-700', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      } else {
        btn.classList.remove('bg-teal-700', 'text-white', 'shadow-sm');
        btn.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      }
    });

    this.renderQueue();
  }

  setSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.renderQueue();
  }

  getFilteredPatients() {
    return this.patients.filter(p => {
      // Filter tab logic
      if (this.filter === 'redflag' && !p.isRedFlag) return false;
      if (this.filter === 'ayush' && !p.department.includes('AYUSH') && !p.tokenNumber.includes('AYU')) return false;
      if (this.filter === 'completed' && p.status !== 'Completed') return false;
      if (this.filter !== 'completed' && p.status === 'Completed' && this.filter !== 'all') return false;

      // Search query logic
      if (this.searchQuery) {
        const matchesName = p.name.toLowerCase().includes(this.searchQuery);
        const matchesToken = p.tokenNumber.toLowerCase().includes(this.searchQuery);
        const matchesMobile = p.mobile.includes(this.searchQuery);
        const matchesComplaint = p.chiefComplaints.some(c => c.name.toLowerCase().includes(this.searchQuery));
        return matchesName || matchesToken || matchesMobile || matchesComplaint;
      }

      return true;
    }).sort((a, b) => {
      // Urgent red flags always on top of pending queue
      if (a.status !== 'Completed' && b.status !== 'Completed') {
        if (a.isRedFlag && !b.isRedFlag) return -1;
        if (!a.isRedFlag && b.isRedFlag) return 1;
      }
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }

  selectPatient(patientId) {
    if (window.mediAudio) window.mediAudio.playSound('tap');
    this.selectedPatientId = patientId;
    this.renderQueue();
    this.renderClinicalSummary();
  }

  renderQueue() {
    const listContainer = document.getElementById('emrPatientQueueList');
    const badgeTotal = document.getElementById('emrBadgeTotal');
    const badgeRed = document.getElementById('emrBadgeRedFlags');
    const badgeCompleted = document.getElementById('emrBadgeCompleted');

    if (!listContainer) return;

    const filtered = this.getFilteredPatients();
    
    // Stats calculation
    const totalPending = this.patients.filter(p => p.status !== 'Completed').length;
    const redFlagCount = this.patients.filter(p => p.isRedFlag && p.status !== 'Completed').length;
    const completedCount = this.patients.filter(p => p.status === 'Completed').length;

    if (badgeTotal) badgeTotal.textContent = totalPending;
    if (badgeRed) badgeRed.textContent = redFlagCount;
    if (badgeCompleted) badgeCompleted.textContent = completedCount;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="p-8 text-center text-slate-400">
          <i class="fa-solid fa-clipboard-list text-3xl mb-2 text-slate-300"></i>
          <p class="text-sm font-medium">No patients found</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(p => {
      const isSelected = p.id === this.selectedPatientId;
      const isDone = p.status === 'Completed';
      const complaintsSummary = p.chiefComplaints.map(c => c.name).join(', ') || 'General Checkup';
      
      let borderClass = isSelected ? 'border-teal-600 bg-teal-50/70 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300';
      if (p.isRedFlag && !isDone) {
        borderClass = isSelected ? 'border-red-600 bg-red-50 ring-1 ring-red-400' : 'border-red-200 bg-red-50/40 hover:border-red-400';
      }

      const statusBadge = isDone
        ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800"><i class="fa-solid fa-circle-check"></i> Completed</span>`
        : (p.isRedFlag 
            ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-600 text-white pulse-red"><i class="fa-solid fa-triangle-exclamation"></i> RED FLAG</span>`
            : `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">Waiting</span>`);

      const timeAgo = this.formatTimeAgo(p.createdAt);

      return `
        <div onclick="window.doctorEMR.selectPatient('${p.id}')"
             class="p-3.5 rounded-xl border transition-all cursor-pointer ${borderClass} mb-2.5">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-white">${p.tokenNumber}</span>
              <h4 class="text-sm font-bold text-slate-800 truncate max-w-[130px]">${p.name}</h4>
            </div>
            ${statusBadge}
          </div>
          <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span>${p.age} yrs • ${p.gender} • ${p.department}</span>
            <span class="text-[11px]"><i class="fa-regular fa-clock mr-0.5"></i> ${timeAgo}</span>
          </div>
          <p class="text-xs text-slate-600 truncate font-medium"><i class="fa-solid fa-stethoscope text-teal-600 mr-1"></i> ${complaintsSummary}</p>
        </div>
      `;
    }).join('');
  }

  renderClinicalSummary() {
    const summaryContainer = document.getElementById('emrClinicalSummaryContainer');
    if (!summaryContainer) return;

    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) {
      summaryContainer.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-slate-400 p-12">
          <i class="fa-solid fa-user-doctor text-5xl mb-3 text-slate-300"></i>
          <h3 class="text-lg font-bold text-slate-600">Select a Patient to Review Clinical Intake</h3>
          <p class="text-sm">Click any patient from the queue sidebar to view full triage & AI summaries.</p>
        </div>
      `;
      return;
    }

    const isDone = patient.status === 'Completed';

    // Red Flag Alert Banner
    const redFlagBanner = patient.isRedFlag ? `
      <div class="p-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg mb-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl animate-bounce">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <h4 class="text-base font-extrabold tracking-wide uppercase">Critical Clinical Red-Flag Alert</h4>
            <p class="text-xs text-red-100">Patient reported severe chest tightness / breathlessness. Immediate ECG & Vitals Triage recommended.</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.doctorEMR.orderEmergencyECG()" class="px-3 py-1.5 rounded-lg bg-white text-red-700 font-bold text-xs hover:bg-red-50 shadow-sm">
            <i class="fa-solid fa-heart-pulse mr-1"></i> STAT ECG Order
          </button>
        </div>
      </div>
    ` : '';

    // Complaints HTML
    const complaintsHtml = patient.chiefComplaints.map(c => `
      <div class="p-3 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
            <i class="fa-solid fa-notes-medical"></i>
          </div>
          <div>
            <h5 class="text-sm font-bold text-slate-800">${c.name}</h5>
            <p class="text-xs text-slate-500">Duration: <span class="font-semibold text-slate-700">${c.duration}</span> • Severity: <span class="font-semibold text-slate-700">${c.severity}</span></p>
          </div>
        </div>
        <span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          <i class="fa-solid fa-circle-check text-[10px]"></i> 2x Checked
        </span>
      </div>
    `).join('');

    // Re-confirmation Protocol HTML
    const reconfirmHtml = patient.reconfirmationResponse ? `
      <div class="p-3.5 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1.5">
        <div class="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider">
          <span><i class="fa-solid fa-shield-halved mr-1 text-amber-600"></i> Smart Safety Re-Confirmation Protocol</span>
          <span class="text-[10px] text-slate-500 font-normal">${new Date(patient.reconfirmationResponse.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p class="text-xs text-slate-600 italic font-medium">Q: "${patient.reconfirmationResponse.question}"</p>
        <p class="text-sm font-bold text-slate-900 bg-white p-2 rounded-lg border border-amber-300">
          <i class="fa-solid fa-user-check text-teal-600 mr-1.5"></i> Patient Answer: "${patient.reconfirmationResponse.answer}"
        </p>
      </div>
    ` : '';

    // AYUSH Parameters HTML
    const ayush = patient.ayushProfile || {};
    const ayushHtml = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
          <span class="text-xs text-slate-500 font-medium block mb-1"><i class="fa-solid fa-fire-burner text-amber-600 mr-1"></i> Agni (Appetite & Digestion)</span>
          <p class="text-sm font-bold text-slate-800">${ayush.agni || 'Samagni (Balanced)'}</p>
        </div>
        <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
          <span class="text-xs text-slate-500 font-medium block mb-1"><i class="fa-solid fa-moon text-indigo-600 mr-1"></i> Nidra (Sleep Quality)</span>
          <p class="text-sm font-bold text-slate-800">${ayush.nidra || 'Sound (6-8 hrs)'}</p>
        </div>
        <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
          <span class="text-xs text-slate-500 font-medium block mb-1"><i class="fa-solid fa-arrows-spin text-teal-600 mr-1"></i> Koshtha (Bowel Habit)</span>
          <p class="text-sm font-bold text-slate-800">${ayush.koshtha || 'Madhyama (Regular)'}</p>
        </div>
      </div>
    `;

    // OCR Past Records HTML
    const ocrList = (patient.ocrDocuments && patient.ocrDocuments.length > 0) 
      ? patient.ocrDocuments.map(doc => `
          <div class="p-3 rounded-lg border border-teal-200 bg-teal-50/50 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-teal-900"><i class="fa-solid fa-receipt mr-1 text-teal-600"></i> ${doc.docType}</span>
              <span class="text-[11px] text-slate-500">${doc.fileName}</span>
            </div>
            <div class="text-xs text-slate-700">
              <strong class="text-slate-800">Meds:</strong> ${(doc.extractedMeds || []).join(' • ')}
            </div>
            <div class="text-xs text-slate-700">
              <strong class="text-slate-800">Labs:</strong> ${(doc.extractedLabs || []).join(' • ')}
            </div>
          </div>
        `).join('')
      : `<p class="text-xs text-slate-400 italic">No prior prescription uploaded for this intake.</p>`;

    // Doctor Prescription / Notes HTML
    const rxItemsHtml = (patient.doctorNotes.rxList && patient.doctorNotes.rxList.length > 0)
      ? patient.doctorNotes.rxList.map((r, i) => `
          <div class="flex items-center justify-between p-2 rounded bg-slate-50 text-xs border border-slate-200">
            <div>
              <span class="font-bold text-slate-800">${r.name}</span>
              <span class="text-slate-500 ml-2">${r.dosage}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-semibold">${r.duration}</span>
              ${!isDone ? `<button onclick="window.doctorEMR.removeRxItem(${i})" class="text-red-500 hover:text-red-700"><i class="fa-solid fa-trash-can"></i></button>` : ''}
            </div>
          </div>
        `).join('')
      : `<p class="text-xs text-slate-400 italic">No medicines prescribed yet.</p>`;

    summaryContainer.innerHTML = `
      <div class="fade-in space-y-4">
        ${redFlagBanner}

        <!-- Patient Header Card -->
        <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                ${patient.name.charAt(0)}
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-slate-800">${patient.name}</h3>
                  <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-white">${patient.tokenNumber}</span>
                  ${patient.isConfirmed 
                    ? `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800"><i class="fa-solid fa-shield-check"></i> 🟢 Confirmed (2x Checked)</span>` 
                    : `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">🟡 Unverified Draft</span>`}
                </div>
                <p class="text-xs text-slate-500 mt-0.5">
                  ${patient.age} yrs • ${patient.gender} • Mobile: <span class="font-medium text-slate-700">${patient.mobile}</span> • ABHA: <span class="font-medium text-slate-700">${patient.abhaId}</span>
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="window.doctorEMR.openOverrideModal()" class="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold">
                <i class="fa-solid fa-pen-to-square mr-1 text-teal-600"></i> 1-Click Override
              </button>
              <button onclick="window.doctorEMR.printSummarySlip()" class="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold">
                <i class="fa-solid fa-print mr-1 text-slate-600"></i> Print Rx
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs">
            <div>
              <span class="text-slate-400 block">Department</span>
              <span class="font-bold text-slate-700">${patient.department}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Assigned Bay</span>
              <span class="font-bold text-slate-700">${patient.roomAssigned}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Kiosk Language</span>
              <span class="font-bold uppercase text-slate-700">${patient.language}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Check-in Time</span>
              <span class="font-bold text-slate-700">${new Date(patient.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>

        <!-- Clinical Intake Summary Details -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- Left 2 Cols: Triage & Symptoms -->
          <div class="lg:col-span-2 space-y-4">
            <!-- Chief Complaint & HPI -->
            <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-stethoscope text-teal-600"></i> Chief Complaints & HPI
                </h4>
                <span class="text-xs text-slate-400">Step 2 Intake</span>
              </div>
              <div class="space-y-2">
                ${complaintsHtml}
              </div>
              
              <!-- Voice Transcript -->
              ${patient.voiceTranscript ? `
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <span class="font-bold text-slate-600 flex items-center gap-1.5">
                    <i class="fa-solid fa-microphone text-teal-600"></i> Voice Input Transcript:
                  </span>
                  <p class="text-slate-800 italic">"${patient.voiceTranscript}"</p>
                </div>
              ` : ''}

              <!-- Reconfirmation Protocol Response -->
              ${reconfirmHtml}
            </div>

            <!-- AYUSH & Holistic Intake -->
            <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-leaf text-emerald-600"></i> AYUSH Lifestyle & Vitality Parameters
                </h4>
                <span class="text-xs text-slate-400">Step 4 Intake</span>
              </div>
              ${ayushHtml}
            </div>

            <!-- Prior Prescriptions OCR -->
            <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <i class="fa-solid fa-file-medical text-cyan-600"></i> Scanned Prior Records (OCR Extracted)
                </h4>
                <span class="text-xs text-slate-400">Step 5 Intake</span>
              </div>
              ${ocrList}
            </div>
          </div>

          <!-- Right Col: Doctor Action & Prescription Pad -->
          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 class="text-sm font-bold text-slate-800 flex items-center gap-2">
                <i class="fa-solid fa-user-doctor text-teal-600"></i> Doctor's Clinical Impression
              </h4>

              <div>
                <label class="text-xs font-semibold text-slate-600 block mb-1">Provisional Diagnosis</label>
                <input id="emrDiagnosisInput" type="text" 
                       value="${patient.doctorNotes.provisionalDiagnosis || ''}" 
                       placeholder="e.g. Acute URTI / Gastro-enteritis"
                       class="w-full text-xs font-semibold p-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none">
              </div>

              <!-- Quick Prescription Pad -->
              <div>
                <label class="text-xs font-semibold text-slate-600 block mb-1">Prescription (Rx)</label>
                <div class="space-y-1.5 mb-2">
                  ${rxItemsHtml}
                </div>

                ${!isDone ? `
                  <div class="flex gap-1.5">
                    <input id="newMedName" type="text" placeholder="Drug name & dose" class="flex-1 text-xs p-1.5 rounded border border-slate-300">
                    <input id="newMedFreq" type="text" placeholder="OD / BD / TDS" class="w-20 text-xs p-1.5 rounded border border-slate-300">
                    <button onclick="window.doctorEMR.addRxItem()" class="px-2.5 py-1.5 rounded bg-teal-600 text-white text-xs font-bold hover:bg-teal-700">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div class="flex flex-wrap gap-1 mt-1.5">
                    <button onclick="window.doctorEMR.addPresetRx('Tab Paracetamol 650mg', '1 TDS', '5 Days')" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 hover:bg-teal-50 text-slate-700 font-medium">+ PCM 650</button>
                    <button onclick="window.doctorEMR.addPresetRx('Cap Omeprazole 20mg', '1 OD Empty Stomach', '14 Days')" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 hover:bg-teal-50 text-slate-700 font-medium">+ Omee 20</button>
                    <button onclick="window.doctorEMR.addPresetRx('Tab Cetirizine 10mg', '1 HS', '5 Days')" class="text-[10px] px-2 py-0.5 rounded bg-slate-100 hover:bg-teal-50 text-slate-700 font-medium">+ Cetirizine</button>
                    <button onclick="window.doctorEMR.addPresetRx('Avipattikar Churna 3g', 'BD with warm water', '15 Days')" class="text-[10px] px-2 py-0.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium">+ Avipattikar</button>
                  </div>
                ` : ''}
              </div>

              <div>
                <label class="text-xs font-semibold text-slate-600 block mb-1">Doctor Advice & Follow-up</label>
                <textarea id="emrAdviceInput" rows="2" 
                          placeholder="Dietary instructions, rest, hydration, review date..."
                          class="w-full text-xs p-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none">${patient.doctorNotes.doctorAdvice || ''}</textarea>
              </div>

              <!-- Sign Off Button -->
              <div class="pt-2">
                ${isDone ? `
                  <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <p class="text-xs font-bold text-emerald-800"><i class="fa-solid fa-signature mr-1"></i> Record Approved & Digitally Signed</p>
                    <p class="text-[11px] text-slate-500">By ${patient.doctorNotes.signedBy || this.doctorName} at ${new Date(patient.doctorNotes.signedAt).toLocaleTimeString()}</p>
                  </div>
                ` : `
                  <button onclick="window.doctorEMR.approveAndSignRecord()" 
                          class="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-file-signature"></i> Approve & Sign Record
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addPresetRx(name, freq, dur) {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;
    if (!patient.doctorNotes.rxList) patient.doctorNotes.rxList = [];
    patient.doctorNotes.rxList.push({ name, dosage: freq, duration: dur });
    this.savePatientsToStorage();
    this.renderClinicalSummary();
  }

  addRxItem() {
    const nameEl = document.getElementById('newMedName');
    const freqEl = document.getElementById('newMedFreq');
    if (!nameEl || !nameEl.value.trim()) return;

    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;

    if (!patient.doctorNotes.rxList) patient.doctorNotes.rxList = [];
    patient.doctorNotes.rxList.push({
      name: nameEl.value.trim(),
      dosage: freqEl ? freqEl.value.trim() || 'OD' : 'OD',
      duration: '5 Days'
    });

    this.savePatientsToStorage();
    this.renderClinicalSummary();
  }

  removeRxItem(idx) {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient || !patient.doctorNotes.rxList) return;
    patient.doctorNotes.rxList.splice(idx, 1);
    this.savePatientsToStorage();
    this.renderClinicalSummary();
  }

  orderEmergencyECG() {
    if (window.mediAudio) window.mediAudio.playSound('success');
    alert("🚨 STAT 12-Lead ECG Order Dispatched to Emergency Nursing Station. Patient assigned Priority Triage Bed 1.");
  }

  approveAndSignRecord() {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;

    const diagInput = document.getElementById('emrDiagnosisInput');
    const adviceInput = document.getElementById('emrAdviceInput');

    if (diagInput) patient.doctorNotes.provisionalDiagnosis = diagInput.value.trim();
    if (adviceInput) patient.doctorNotes.doctorAdvice = adviceInput.value.trim();

    patient.status = 'Completed';
    patient.doctorNotes.signedAt = new Date().toISOString();
    patient.doctorNotes.signedBy = this.doctorName;

    if (window.mediAudio) window.mediAudio.playSound('success');
    this.savePatientsToStorage();
    this.renderQueue();
    this.renderClinicalSummary();
  }

  openOverrideModal() {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;

    const modal = document.getElementById('overrideModal');
    const nameInput = document.getElementById('overridePatientName');
    const ageInput = document.getElementById('overridePatientAge');
    const complaintInput = document.getElementById('overrideComplaintText');
    const severitySelect = document.getElementById('overrideSeveritySelect');
    const agniSelect = document.getElementById('overrideAgniSelect');
    const redFlagCheck = document.getElementById('overrideRedFlagCheck');

    if (nameInput) nameInput.value = patient.name;
    if (ageInput) ageInput.value = patient.age;
    if (complaintInput) complaintInput.value = patient.chiefComplaints.map(c => c.name).join(', ');
    if (severitySelect && patient.chiefComplaints[0]) severitySelect.value = patient.chiefComplaints[0].severity.includes('Severe') ? 'Severe' : 'Moderate';
    if (agniSelect && patient.ayushProfile) agniSelect.value = patient.ayushProfile.agni || 'Samagni (Normal / Balanced)';
    if (redFlagCheck) redFlagCheck.checked = patient.isRedFlag;

    if (modal) modal.classList.remove('hidden');
  }

  saveOverride() {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;

    const nameInput = document.getElementById('overridePatientName');
    const ageInput = document.getElementById('overridePatientAge');
    const complaintInput = document.getElementById('overrideComplaintText');
    const severitySelect = document.getElementById('overrideSeveritySelect');
    const agniSelect = document.getElementById('overrideAgniSelect');
    const redFlagCheck = document.getElementById('overrideRedFlagCheck');

    if (nameInput && nameInput.value) patient.name = nameInput.value;
    if (ageInput && ageInput.value) patient.age = parseInt(ageInput.value) || patient.age;
    if (complaintInput && complaintInput.value) {
      patient.chiefComplaints = [{
        id: "override",
        name: complaintInput.value,
        severity: severitySelect ? severitySelect.value : "Moderate",
        duration: "Doctor Reviewed"
      }];
    }
    if (agniSelect && patient.ayushProfile) {
      patient.ayushProfile.agni = agniSelect.value;
    }
    if (redFlagCheck) {
      patient.isRedFlag = redFlagCheck.checked;
    }

    patient.isConfirmed = true; // Doctor overrides make it 100% confirmed

    if (window.mediAudio) window.mediAudio.playSound('success');
    this.closeOverrideModal();
    this.savePatientsToStorage();
    this.renderQueue();
    this.renderClinicalSummary();
  }

  closeOverrideModal() {
    const modal = document.getElementById('overrideModal');
    if (modal) modal.classList.add('hidden');
  }

  printSummarySlip() {
    const patient = this.patients.find(p => p.id === this.selectedPatientId);
    if (!patient) return;

    const slip = document.getElementById('printableSlip');
    if (!slip) return;

    slip.innerHTML = `
      <div style="font-family: sans-serif; max-width: 650px; margin: auto; padding: 20px; border: 2px solid #0d9488; border-radius: 8px;">
        <div style="text-align: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 12px;">
          <h2 style="margin: 0; color: #0f766e; font-size: 20px;">${this.hospitalName}</h2>
          <p style="margin: 3px 0; font-size: 12px; color: #64748b;">Clinical OPD Consultation Record & Prescription Summary</p>
          <div style="margin-top: 6px; font-size: 13px; font-weight: bold; background: #f1f5f9; padding: 4px; border-radius: 4px;">
            Token ID: ${patient.tokenNumber} | Room: ${patient.roomAssigned} | Date: ${new Date().toLocaleDateString()}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 12px;">
          <div>
            <strong>Patient Name:</strong> ${patient.name}<br>
            <strong>Age/Gender:</strong> ${patient.age} Yrs / ${patient.gender}<br>
            <strong>Mobile:</strong> ${patient.mobile}
          </div>
          <div>
            <strong>ABHA ID:</strong> ${patient.abhaId}<br>
            <strong>Department:</strong> ${patient.department}<br>
            <strong>Status:</strong> ${patient.status}
          </div>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding: 8px 0; font-size: 13px;">
          <strong>Chief Complaints:</strong> ${patient.chiefComplaints.map(c => `${c.name} (${c.severity}, ${c.duration})`).join('; ')}<br>
          <strong>AYUSH Profile:</strong> Agni: ${patient.ayushProfile.agni || 'Normal'}, Nidra: ${patient.ayushProfile.nidra || 'Normal'}<br>
          <strong>Provisional Diagnosis:</strong> <span style="color: #0f766e; font-weight: bold;">${patient.doctorNotes.provisionalDiagnosis || 'Clinical Assessment'}</span>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding: 10px 0;">
          <strong style="font-size: 14px; color: #0f766e;">Rx (Prescription):</strong>
          <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 6px;">
            <thead>
              <tr style="background: #f8fafc; text-align: left;">
                <th style="padding: 6px; border: 1px solid #e2e8f0;">Medicine Name</th>
                <th style="padding: 6px; border: 1px solid #e2e8f0;">Dosage / Frequency</th>
                <th style="padding: 6px; border: 1px solid #e2e8f0;">Duration</th>
              </tr>
            </thead>
            <tbody>
              ${(patient.doctorNotes.rxList || []).map(r => `
                <tr>
                  <td style="padding: 6px; border: 1px solid #e2e8f0; font-weight: bold;">${r.name}</td>
                  <td style="padding: 6px; border: 1px solid #e2e8f0;">${r.dosage}</td>
                  <td style="padding: 6px; border: 1px solid #e2e8f0;">${r.duration}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding: 8px 0; font-size: 12px; color: #475569;">
          <strong>Doctor Advice:</strong> ${patient.doctorNotes.doctorAdvice || 'Follow general precautions & return if symptoms persist.'}
        </div>

        <div style="margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 10px; display: flex; justify-content: space-between; font-size: 12px;">
          <div>Generated by MediKiosk AI OPD System</div>
          <div style="text-align: right;">
            <strong>${this.doctorName}</strong><br>
            <span style="font-size: 11px; color: #64748b;">(Digitally Verified & Signed)</span>
          </div>
        </div>
      </div>
    `;

    window.print();
  }

  formatTimeAgo(isoString) {
    const diff = Math.floor((Date.now() - new Date(isoString).getTime()) / 60000);
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    return `${hours}h ago`;
  }
}

window.doctorEMR = new DoctorEMRApp();
