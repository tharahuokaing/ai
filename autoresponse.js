// autoresponse.js
import { processCommand } from './ai_core.js';

let aiData = {};
let isDataLoaded = false;

export async function initializeAI() {
    // ប្រសិនបើអ្នកប្រើក្នុង Browser, ការប្រើ 'fs' នឹងមិនដំណើរការទេ 
    // អ្នកគួរប្រើ fetch() ដើម្បីទាញយក file CSV
    try {
        const response = await fetch('sentient_ai_bra.csv');
        const data = await response.text();
        
        // បំបែកទិន្នន័យ CSV ទៅជា Object (Simple Parser)
        const lines = data.split('\n');
        lines.forEach(line => {
            const [question, answer] = line.split(',');
            if (question && answer) {
                aiData[question.toLowerCase().trim()] = answer.trim();
            }
        });
        
        isDataLoaded = true;
        console.log('ទិន្នន័យ AI ត្រូវបានបញ្ចូលរួចរាល់។');
    } catch (error) {
        console.error('ការផ្ទុកទិន្នន័យមានបញ្ហា:', error);
    }
}

export async function getAutoResponse(question) {
    const normalizedQuestion = question.toLowerCase().trim();
    
    // ១. ឆែកក្នុងទិន្នន័យ CSV ជាមុន (Priority)
    if (aiData[normalizedQuestion]) {
        return aiData[normalizedQuestion];
    }
    
    // ២. បើរកមិនឃើញក្នុង CSV ឱ្យទៅឆែកក្នុង ai_core.js
    const coreResponse = processCommand(question);
    if (coreResponse && !coreResponse.includes("I'm sorry")) {
        return coreResponse;
    }

    return "សូមទោស ខ្ញុំមិនទាន់មានចម្លើយសម្រាប់សំណួរនេះនៅឡើយទេ។";
}
