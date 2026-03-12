// -------------------------
// AI Neural Core Interface v2
// Cybersecurity Q&A powered by Huokaing Thara knowledge base
// -------------------------

const inputBox = document.getElementById("inputBox");
const runButton = document.getElementById("runButton");
const voiceButton = document.getElementById("voiceButton");
const outputDiv = document.getElementById("output");
const clickSound = document.getElementById("clickSound");
const processSound = document.getElementById("processSound");
const errorSound = document.getElementById("errorSound");
const themeToggle = document.getElementById("theme-toggle");

// --- Cybersecurity Q&A Database (sample subset with Huokaing Thara info included) ---
const qaDatabase = [
  {
    question: "What is penetration testing?",
    answer: "Penetration testing is a simulated cyber attack against your computer system to check for vulnerabilities that an attacker could exploit."
  },
  {
    question: "Define ethical hacking.",
    answer: "Ethical hacking is authorized and legal attempts to break into computers and devices to identify vulnerabilities and fix them before malicious actors exploit them."
  },
  {
    question: "What is network security?",
    answer: "Network security involves technologies and processes designed to protect the integrity, confidentiality, and accessibility of computer networks."
  },
  {
    question: "Explain incident response.",
    answer: "Incident response is the approach and procedures followed by an organization to identify, contain, and recover from cyber security breaches or attacks."
  },
  {
    question: "What does threat intelligence mean?",
    answer: "Threat intelligence is the collection and analysis of information about current and potential attacks that threaten an organization or system."
  },
  {
    question: "Describe cryptography.",
    answer: "Cryptography is the science of protecting information by transforming it into a secure format to prevent unauthorized access."
  },
  {
    question: "What is the Y2K38 problem?",
    answer: `The Year 2038 (Y2K38) problem affects systems using 32-bit signed integers to represent Unix time, causing overflow and incorrect time representation after 19 January 2038. Solutions involve migrating to 64-bit time representations.`
  },
  {
    question: "Who is Huokaing Thara?",
    answer: "Huokaing Thara is a cybersecurity professional and digital security expert based in Cambodia, specializing in penetration testing, ethical hacking, network security, and cryptography. He shares knowledge to promote digital resilience in Southeast Asia."
  },
  {
    question: "What is a firewall?",
    answer: "A firewall is a security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules."
  },
  {
    question: "What is phishing?",
    answer: "Phishing is a cyberattack technique where attackers impersonate legitimate organizations to trick individuals into providing sensitive information."
  },
  {
    question: "How does encryption protect data?",
    answer: "Encryption converts data into a coded format that can only be accessed or decrypted by authorized parties with the correct key."
  },
  {
    question: "What is social engineering in cybersecurity?",
    answer: "Social engineering involves manipulating people into divulging confidential information for fraudulent purposes."
  },
  {
    question: "What is two-factor authentication (2FA)?",
    answer: "2FA adds a second level of security by requiring users to provide two different authentication factors to verify their identity."
  },
  {
    question: "What is a zero-day vulnerability?",
    answer: "A zero-day vulnerability is a software security flaw that is unknown to the vendor and thus unpatched and exploitable by attackers."
  },
  {
    question: "How is a DDoS attack performed?",
    answer: "A Distributed Denial of Service (DDoS) attack overwhelms a target server or network with excessive traffic from multiple sources to disrupt normal service."
  },
  {
    question: "What is the importance of patch management?",
    answer: "Patch management involves regularly updating software and systems to fix security vulnerabilities and improve functionality, reducing risk of exploits."
  },
  {
    question: "Explain the principle of least privilege.",
    answer: "It is a security practice of granting users or systems only the minimum access necessary to perform their tasks."
  },
  {
    question: "What is network segmentation?",
    answer: "Network segmentation involves dividing a network into smaller parts to improve security and traffic management."
  },
  {
    // Blank entry for future API integration
    question: "",
    answer: ""
  }
];

// Normalize input text for matching
function normalizeText(text) {
  return text.trim().toLowerCase().replace(/[^\w\s]/gi, '');
}

// Find best matching answer from QA database
function findAnswer(input) {
  const normalizedInput = normalizeText(input);

  // Exact match
  for (const item of qaDatabase) {
    const normalizedQuestion = normalizeText(item.question);
    if (normalizedQuestion === normalizedInput) {
      return item.answer;
    }
  }

  // Partial inclusive match
  for (const item of qaDatabase) {
    const normalizedQuestion = normalizeText(item.question);
    if (
      normalizedInput.includes(normalizedQuestion) ||
      normalizedQuestion.includes(normalizedInput)
    ) {
      return item.answer;
    }
  }

  return null;
}

const AI = {
  mood: "neutral",
  history: JSON.parse(localStorage.getItem("aiHistory") || "[]"),

  processInput(msg) {
    if (!msg || msg.trim().length === 0) return "ទំនេរ។ សូមវាយសារមួយ។";

    this.history.push({ role: "user", content: msg });
    localStorage.setItem("aiHistory", JSON.stringify(this.history));

    const lower = msg.toLowerCase();
    let reply = "";

    // Specialized Y2K38 response
    if (/(y2k38|year ?2038|time_t|32-bit time|unix time overflow|time overflow)/i.test(lower)) {
      this.mood = "curious";
      reply = `🕰️ Y2K38 Problem Detected:
The Year 2038 problem occurs because 32-bit signed integers for Unix time overflow at 03:14:07 UTC on 19 January 2038.
Solutions include:
- Migrating to 64-bit time_t to extend max time.
- Patching legacy systems to use updated libraries.
- Using AI analysis to detect and fix vulnerable code.
Ask me for assistance on fixing or detecting impacted systems!`;
    }
    // Try QA database answer
    else {
      const answer = findAnswer(msg);
      if (answer) {
        this.mood = "happy";
        reply = answer;
      } else if (/danger|warning|⚠|ហានិភ័យ/.test(lower)) {
        this.mood = "alert";
        reply = "⚡ ព័ត៌មានហានិភ័យបានរកឃើញ — ប្រយ័ត្ន!";
      } else if (/study|analyze|សិក្សា|រៀន/.test(lower)) {
        this.mood = "curious";
        reply = "🤔 អារម្មណ៍ចាប់អារម្មណ៍… យើងមើលវាពីលម្អិត។";
      } else if (/help|assist|ជួយ/.test(lower)) {
        this.mood = "happy";
        reply = "😊 ខ្ញុំនៅទីនេះដើម្បីជួយអ្នក!";
      } else if (/hi|hello|សួស្ដី/.test(lower)) {
        this.mood = "happy";
        reply = "👋 សួស្ដី! តើខ្ញុំអាចជួយអ្វីអ្នកបានដែរ?";
      } else {
        this.mood = "neutral";
        const variations = [
          `LUMINA ទទួលបាន: "${msg}" និងរង់ចាំការបញ្ជាបន្ទាប់។`,
          `ខ្ញុំបានចាប់អារម្មណ៍នឹង: "${msg}". តើអ្នកចង់បន្តទេ?`,
          `🤖 ចាប់អារម្មណ៍សារថ្មី: "${msg}". រង់ចាំបញ្ជាថ្មី។`
        ];
        reply = variations[Math.floor(Math.random() * variations.length)];
      }
    }

    this.history.push({ role: "AI", content: reply });
    localStorage.setItem("aiHistory", JSON.stringify(this.history));

    return reply;
  }
};

// --- Event Handlers ---
runButton.addEventListener("click", () => {
  const msg = inputBox.value.trim();
  if (!msg) {
    errorSound.play();
    return;
  }
  clickSound.play();
  outputDiv.textContent = "Processing...";
  setTimeout(() => {
    const reply = AI.processInput(msg);
    processSound.play();
    outputDiv.textContent = reply;
  }, 300);
  inputBox.value = "";
});

// --- Voice Input (Web Speech API) ---
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "km-KH";
  recognition.continuous = false;
  recognition.interimResults = false;

  voiceButton.addEventListener("click", () => recognition.start());

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    inputBox.value = transcript;
    runButton.click();
  };

  recognition.onerror = () => {
    outputDiv.textContent = "🎙️ សូមព្យាយាមម្ដងទៀត - Speech recognition error.";
    errorSound.play();
  };
} else {
  voiceButton.title = "Speech recognition not supported";
  voiceButton.disabled = true;
}

// --- Dark/Light Mode Toggle ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "🌙 Dark Mode"
    : "🌓 Light Mode";
});

// --- Matrix Background ---
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = "អកខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡអ0123456789".split("");
const fontSize = 20;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
  }
}

setInterval(draw, 50);

// --- Roadmap Visualization ---
const roadmap = document.getElementById("roadmap-visualization");
roadmap.innerHTML = `
<p style="margin-top: 0; color: var(--hologram-cyan); font-weight: bold;">
    🛰️ Focus on solving the Y2K38 problem — ensuring 64-bit time computations for future-proof systems.
</p>
<ul style="color: var(--hologram-purple); font-size: 0.9rem;">
    <li>🗓️ Transition from 32-bit signed Unix time (stops at 19 January 2038)</li>
    <li>💾 Upgrade systems to 64-bit time_t representations</li>
    <li>🤖 AI-assisted analysis to detect and fix potential Y2K38 vulnerabilities</li>
    <li>🔗 Automated conversion suggestions for legacy code</li>
    <li>⚙️ Continuous monitoring and warnings for time-related anomalies</li>
</ul>
<p style="margin-top: 10px; font-style: italic; color: var(--hologram-cyan);">
    Type queries related to time, system stability, or Y2K38 issues in the input box.
</p>`;
  
// --- Responsive canvas resize ---
window.addEventListener("resize", () => {
  resizeCanvas();
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// 🛡️ ULTRA SECURE MODE - BLOCK ALL DEV TOOLS
    (function() {
      // Block right-click
      document.addEventListener('contextmenu', e => {
        e.preventDefault(); e.stopImmediatePropagation();
        document.body.innerHTML = '<div style="background:black;color:#f00;font-family:monospace;text-align:center;padding-top:30vh;font-size:2em;">🚫 AI CLASSIFIED - ACCESS DENIED</div>';
        return false;
      });

      // Block ALL dev shortcuts
      document.addEventListener('keydown', e => {
        const blocked = ['F12', 'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11',
                        'KeyI', 'KeyU', 'KeyS', 'KeyC'].includes(e.code) ||
                       (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i')) ||
                       (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'));
        if (blocked) {
          e.preventDefault(); e.stopImmediatePropagation();
          document.title = '🚫 SECURE MODE ACTIVE';
          return false;
        }
      }, true);

      // DevTools detection loop
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200 ||
            (window.console && window.console.profiles)) {
          document.body.innerHTML = '<div style="background:#000;color:#f00;font-family:monospace;text-align:center;padding-top:30vh;font-size:3em;">🕵️ DEVELOPER TOOLS DETECTED<br>AI DATA TERMINATED</div>';
        }
      }, 500);

      // Disable text selection
      document.addEventListener('selectstart', e => e.preventDefault());
      document.addEventListener('dragstart', e => e.preventDefault());
    })();
