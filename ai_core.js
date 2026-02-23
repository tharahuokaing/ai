// AI Core Processing
function process(q) {
    // Activate emperor mode
    if (q === MASTER_KEY) {
        isEmperorMode = true;
        saveState();
        speak("អំណាចអធិរាជសាយប័រ");
        updateDashboard();
        return;
    }

    let rawQ = q.trim();
    let qLow = rawQ.toLowerCase();
    logMsg(rawQ, "user");

    // Save all queries to brain
    if (!learningMode) {
        brain[Date.now()] = rawQ;
        saveState();
    }

    // Learning mode active
    if (learningMode) {
        brain[learningMode] = rawQ;
        saveState();
        speak("បានចារិកទុកហើយ");
        learningMode = null;
        updateDashboard();
        return;
    }

    // Fuzzy search
    let bestMatch = null, topScore = 0;
    for (let key in brain) {
        let score = calculateSimilarity(qLow, key);
        if (score > topScore) { 
            topScore = score; 
            bestMatch = key;
        }
    }

    // Handle matches
    if (topScore > 0.8) {
        let resp = brain[bestMatch];
        logMsg("AI: " + resp, "ai");
        speak(resp);
    } 
    // Handle singularity roadmap requests
    else if (qLow.includes("singularity") || qLow.includes("ផ្លូវរូបិយវត្ថុ")) {
        const roadmap = getSingularityRoadmap();
        logMsg("AI: " + roadmap, "ai");
        speak(roadmap);
    }
    // Y2K/Y2K19/Y2K38 references
    else if (qLow.includes("y2k") || qLow.includes("2000") || qLow.includes("2038")) {
        const y2kResponse = getY2KResponse();
        logMsg("AI: " + y2kResponse, "ai");
        speak(y2kResponse);
    }
    // Learning mode trigger
    else {
        speak("ខ្ញុំមិនទាន់យល់ទេ តើវាជាអ្វីដែរ?");
        learningMode = qLow;
        saveState();
        updateDashboard();
    }
}

function logMsg(msg, type) {
    const out = document.getElementById('out');
    const div = document.createElement('div');
    div.className = type;
    div.textContent = msg;
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;
}
