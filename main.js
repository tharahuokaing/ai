// main.js
import { getAutoResponse } from './autoresponse.js';
import { roadmapData } from './singularity_roa.js';

// --- Matrix Rain Effect ---
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const drops = Array(Math.floor(canvas.width / 14)).fill(1);
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 5, 10, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00f2ff";
    drops.forEach((y, i) => {
        const text = String.fromCharCode(Math.floor(Math.random() * 128));
        ctx.fillText(text, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

// --- Voice Recognition ---
const voiceBtn = document.getElementById('voiceButton');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (e) => {
    document.getElementById('inputBox').value = e.results[0][0].transcript;
    handleCommand();
};

voiceBtn.onclick = () => { recognition.start(); document.getElementById('clickSound').play(); };

// --- Command Execution ---
async function handleCommand() {
    const input = document.getElementById('inputBox').value;
    const output = document.getElementById('output');
    
    if (!input) return;

    output.innerHTML = "<span class='loading'>[កំពុងវិភាគទិន្នន័យ...]</span>";
    document.getElementById('processSound').play();

    const response = await getAutoResponse(input);
    
    // ប្រសិនបើមានកំហុស លាន់សំឡេង Error
    if (response.includes("⚠️")) {
        document.getElementById('errorSound').play();
    }

    // Typewriter Effect
    output.innerText = "";
    let i = 0;
    function type() {
        if (i < response.length) {
            output.innerText += response.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
    document.getElementById('inputBox').value = "";
}

document.getElementById('runButton').onclick = handleCommand;
