const KEY_PATH = "40798e1e7e780749001b9758782f9d3f11463e27546859560f707f2403f2601a"; // សម្រាប់ "dutyfree"
const AUTH_USER = "huokaingthara";

async function encryptInput(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function validateAccess() {
    const user = document.getElementById('u').value.trim();
    const pass = document.getElementById('p').value.trim();
    
    // បង្ហាញក្នុង Console ដើម្បី Check (សម្រាប់តែម្ចាស់កូដ)
    const inputCipher = await encryptInput(pass);
    console.log("Input Hash:", inputCipher); 

    if (user === AUTH_USER && inputCipher === KEY_PATH) {
        document.getElementById('login-overlay').style.display = 'none';
        if (typeof startBootSequence === "function") {
            startBootSequence();
        }
    } else {
        alert("កំហុស៖ Username ឬ Password មិនត្រឹមត្រូវ!");
    }
            }
