/**
 * UI Engine v2.0 - Bio-Neural Interface OS
 * Optimized for Huokaing Thara Singularity Terminal
 */

const UI = {
    // 1. Initial Boot Sequence with Progress Simulation
    boot: function() {
        const bootScreen = document.getElementById('boot');
        const bootText = document.querySelector('.boot-text');
        
        console.log("OS: Initializing Neural Core...");

        // Update boot text via Utils if available
        if (window.Utils) {
            setTimeout(() => bootText.innerText = "SYNCHRONIZING DNA SEQUENCES...", 1000);
            setTimeout(() => bootText.innerText = "ESTABLISHING NEURAL LINK...", 2000);
        }
        
        setTimeout(() => {
            if(bootScreen) {
                bootScreen.style.transition = 'opacity 1s ease-out';
                bootScreen.style.opacity = '0';
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    this.glitchEntrance();
                }, 1000);
            }
        }, 3500);
    },

    // 2. Visual Entrance with CRT/Glitch Effect
    glitchEntrance: function() {
        const frame = document.querySelector('.main-frame') || document.getElementById('dashboard');
        if(frame) {
            frame.style.display = 'block';
            frame.style.opacity = '1';
            frame.classList.add('ui-glitch-anim');
            
            // Initializing Sequence Logs
            this.logSystem("NEURAL CORE ONLINE", "success");
            this.logSystem("SATELLITE SYNC: STABLE", "info");
        }
    },

    // 3. System Log with Typewriter Support
    logSystem: function(message, type = 'info') {
        const output = document.getElementById('output');
        if (!output) return;

        const timestamp = new Date().toLocaleTimeString().split(' ')[0];
        const logEntry = document.createElement('div');
        logEntry.className = `system-msg ${type}`;
        
        // Add a small delay for realistic "Processing" feel
        setTimeout(() => {
            if (window.Utils && window.Utils.typeText) {
                const textSpan = document.createElement('span');
                logEntry.innerHTML = `[${timestamp}] `;
                logEntry.appendChild(textSpan);
                output.appendChild(logEntry);
                Utils.typeText(textSpan, message, 30);
            } else {
                logEntry.innerHTML = `[${timestamp}] ${message}`;
                output.appendChild(logEntry);
            }
            output.scrollTop = output.scrollHeight;
        }, 200);
    },

    // 4. Enhanced Status Bar (Real-time fluctuations)
    updateStatus: function() {
        const light = document.getElementById('status-light');
        const clock = document.getElementById('clock-display');
        const coordBox = document.getElementById('coord-display');

        // Pulse the "Online" light
        setInterval(() => {
            light.style.opacity = (light.style.opacity == '0.3') ? '1' : '0.3';
            light.style.textShadow = (light.style.opacity == '1') ? '0 0 10px #00ffff' : 'none';
        }, 1500);

        // Update Clock and Random Coordinates
        setInterval(() => {
            if (clock) clock.innerText = new Date().toLocaleTimeString();
            
            // 10% chance to update fake GPS data for realism
            if (coordBox && window.Utils && Utils.chance(10)) {
                coordBox.innerText = Utils.getRandomCoords();
            }
        }, 1000);
    }
};

// Start UI Logic
document.addEventListener("DOMContentLoaded", () => {
    // Hide main frame initially for boot sequence
    const frame = document.querySelector('.main-frame');
    if (frame) frame.style.opacity = '0';

    UI.boot();
    UI.updateStatus();
    
    // Delayed Terminal Greetings
    setTimeout(() => {
        UI.logSystem("LINK ESTABLISHED: CREATOR THARA", "success");
        UI.logSystem("SINGULARITY TARGET: 2038", "warning");
        
        // Background Data Stream Simulation
        setInterval(() => {
            if (window.Utils && Utils.chance(5)) {
                UI.logSystem(`BIO_SEQ_DETECTED: ${Utils.generateSequence(8)}`, "info");
            }
        }, 8000);
    }, 4500);
});

// 5. Dashboard Data Animation
    initDashboard: function() {
        const genomeVal = document.getElementById('genome-val');
        const bioStream = document.getElementById('bio-stream');

        // Animate Genome Percent
        let percent = 0;
        const progress = setInterval(() => {
            if (percent < 99.99) {
                percent += (Math.random() * 0.5);
                if (genomeVal) genomeVal.innerText = percent.toFixed(2) + "%";
            } else {
                clearInterval(progress);
            }
        }, 1500);

        // Continuous DNA Sequence Stream
        setInterval(() => {
            if (bioStream && window.Utils) {
                const seq = document.createElement('span');
                seq.className = 'stream-unit';
                seq.innerText = Utils.generateSequence(10) + " ";
                bioStream.prepend(seq);
                
                // Cleanup old units to prevent memory lag
                if (bioStream.children.length > 50) {
                    bioStream.removeChild(bioStream.lastChild);
                }
            }
        }, 800);
    }
