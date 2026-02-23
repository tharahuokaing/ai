// Function to handle the transmission
function executeCommand() {
    const inputField = document.getElementById('in');
    const outputArea = document.getElementById('output');
    const cmd = inputField.value.trim();

    if (cmd === "") return;

    // 1. Log user command to UI
    const userLine = document.createElement('div');
    userLine.className = 'user-msg';
    userLine.innerHTML = `<span style="color: #fff">> ${cmd}</span>`;
    outputArea.appendChild(userLine);

    // 2. Process via AI Core
    // Assuming ai_core.js has a function named processNeuralInput
    if (typeof processNeuralInput === "function") {
        const response = processNeuralInput(cmd);
        displayAIResponse(response);
    } else {
        displayAIResponse("ERROR: Neural Core not found. Check ai_core.js link.");
    }

    // 3. Reset
    inputField.value = "";
    outputArea.scrollTop = outputArea.scrollHeight; // Auto-scroll
}

function displayAIResponse(text) {
    const outputArea = document.getElementById('output');
    const aiLine = document.createElement('div');
    aiLine.className = 'system-msg';
    aiLine.innerHTML = `[AI]: ${text}`;
    outputArea.appendChild(aiLine);
}

// Enter key support
document.getElementById('in').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executeCommand();
});

// Real-time Clock for Status Bar
setInterval(() => {
    document.getElementById('clock-display').innerText = new Date().toLocaleTimeString();
}, 1000);
