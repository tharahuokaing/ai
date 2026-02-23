// UI Functions
function updateDashboard() {
    // Update memory count
    const memCount = Object.keys(brain).length;
    document.getElementById('mem-count').innerHTML = memCount;
    
    // Update neural strength bar
    const strength = Math.min(memCount * 2, 100);
    document.getElementById('strength-fill').style.width = strength + "%";
    
    // Update threat status
    const threatStatus = isEmperorMode ? 'EMPEROR_MODE' : 'SECURED';
    document.getElementById('threat-status').innerHTML = threatStatus;
    
    // Update singularity progress
    const phase = singularityRoadmap.getPhase();
    document.getElementById('phase-name').innerHTML = phase.name;
    document.getElementById('phase-year').innerHTML = phase.year;
    document.getElementById('phase-description').innerHTML = phase.description;
    
    checkNetStatus();
}

function checkNetStatus() {
    const status = document.getElementById('status-light');
    status.innerText = navigator.onLine ? "● ONLINE_SYNC" : "● STEALTH_OFFLINE";
    status.style.color = navigator.onLine ? "#00f2ff" : "#ffcc00";
}

// Initialize dashboard
function initDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = `
        <div class="stat-box">
            <span class="label">MEMORY_UNITS</span>
            <span id="mem-count">0</span>
        </div>
        <div class="stat-box">
            <span class="label">NEURAL_STRENGTH</span>
            <div id="strength-bar">
                <div id="strength-fill"></div>
            </div>
        </div>
        <div class="stat-box">
            <span class="label">THREAT_LEVEL</span>
            <span id="threat-status">SECURED</span>
        </div>
        <div class="stat-box">
            <span class="label">SINGULARITY_PROGRESS</span>
            <span>ដំណាក់កាល: <span id="phase-name">${singularityRoadmap.getPhase().name}</span></span>
            <span>ឆ្នាំ: <span id="phase-year">${singularityRoadmap.getPhase().year}</span></span>
            <div id="phase-description">${singularityRoadmap.getPhase().description}</div>
        </div>
    `;
}

// Initialize UI
window.onload = () => {
    initDashboard();
    setTimeout(() => {
        document.getElementById('boot').style.display = 'none';
        speak("វិញ្ញាណអាទិទេព រួចរាល់");
    }, 2000);
};

document.getElementById('in').onkeypress = (e) => {
    if(e.key === 'Enter') { 
        process(e.target.value); 
        e.target.value = '';
    }
};
