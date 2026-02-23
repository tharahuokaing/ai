/**
 * UI Engine - Bio-Neural Interface OS
 * Handles Boot, Visual Effects, and Component Rendering
 */

const UI = {
    // 1. Initial Boot Sequence
    boot: function() {
        console.log("OS: Initializing Neural Core...");
        const bootScreen = document.getElementById('boot');
        
        // Simulate loading progress
        setTimeout(() => {
            if(bootScreen) {
                bootScreen.style.opacity = '0';
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    this.glitchEntrance();
                }, 1000);
            }
        }, 3000);
    },

    // 2. Visual Entrance Effect
    glitchEntrance: function() {
        const frame = document.querySelector('.main-frame');
        if(frame) {
            frame.style.display = 'block';
            frame.classList.add('ui-glitch-anim');
        }
    },

    // 3. Real-time Log Update
    logSystem: function(message, type = 'info') {
        const output = document.getElementById('output');
        const timestamp = new Date().toLocaleTimeString().split(' ')[0];
        const logEntry = document.createElement('div');
        
        logEntry.className = `system-msg ${type}`;
        logEntry.innerHTML = `[${timestamp}] ${message}`;
        
        output.appendChild(logEntry);
        output.scrollTop = output.scrollHeight;
    },

    // 4. Handle Status Bar Updates
    updateStatus: function() {
        const light = document.getElementById('status-light');
        // Simulate network pulse
        setInterval(() => {
            light.style.opacity = (light.style.opacity == '0.3') ? '1' : '0.3';
        }, 1500);
    }
};

// Start UI on Load
document.addEventListener("DOMContentLoaded", () => {
    UI.boot();
    UI.updateStatus();
    
    // Initial System Message
    setTimeout(() => {
        UI.logSystem("NEURAL LINK ESTABLISHED TO CREATOR: THARA", "success");
        UI.logSystem("CONVERGENCE TARGET: 2038", "warning");
    }, 4000);
});
