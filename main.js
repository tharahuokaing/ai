/**
 * Imperial Terminal Controller
 * Managed by Creator Thara
 */

async function executeCommand() {
    const inputField = document.getElementById('in');
    const outputArea = document.getElementById('output');
    const cmd = inputField.value.trim();

    if (cmd === "") return;

    // 1. Log User Command (Instant)
    const userLine = document.createElement('div');
    userLine.className = 'user-msg';
    userLine.innerHTML = `<span style="color: #00ffff; font-weight: bold;">User@Thara_Core:~$</span> <span style="color: #fff">${cmd}</span>`;
    outputArea.appendChild(userLine);

    // 2. Clear input and scroll
    inputField.value = "";
    outputArea.scrollTop = outputArea.scrollHeight;

    // 3. Process via AI Core with Simulated Latency
    if (typeof processNeuralInput === "function") {
        const response = processNeuralInput(cmd);
        
        // Check for "Thara" or "Singularity" for special effects
        if (cmd.toLowerCase().includes("thara") || cmd.toLowerCase().includes("2038")) {
            triggerSystemAlert(); 
        }

        await displayAIResponse(response);
    } else {
        await displayAIResponse("FATAL ERROR: NEURAL CORE DISCONNECTED. SYSTEM HALTED.");
    }
}

/**
 * Enhanced Response Display with Typewriter Effect
 */
async function displayAIResponse(text) {
    const outputArea = document.getElementById('output');
    const aiLine = document.createElement('div');
    aiLine.className = 'system-msg';
    aiLine.innerHTML = `<span style="color: #ff0055; font-weight: bold;">[AI]:</span> <span class="typing"></span>`;
    outputArea.appendChild(aiLine);

    const textSpan = aiLine.querySelector('.typing');
    const speed = 20; // Milliseconds per character

    // Typewriter simulation
    for (let i = 0; i < text.length; i++) {
        textSpan.textContent += text.charAt(i);
        outputArea.scrollTop = outputArea.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

/**
 * System Alert Visual (Glitch Effect)
 */
function triggerSystemAlert() {
    document.body.classList.add('glitch-active');
    setTimeout(() => {
        document.body.classList.remove('glitch-active');
    }, 500);
}

// Enter key support
document.getElementById('in').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executeCommand();
});

/**
 * Real-time 64-bit Epoch Clock
 */
setInterval(() => {
    const now = new Date();
    const epoch = Math.floor(now.getTime() / 1000);
    // Display both human time and Unix Epoch for Y2K38 monitoring
    document.getElementById('clock-display').innerHTML = `
        ${now.toLocaleTimeString()} | EPOCH: ${epoch}
    `;
}, 1000);
