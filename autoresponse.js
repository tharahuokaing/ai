// autoresponse.js
import { processCommand } from './ai_core.js';

/**
 * មុខងារចម្បងសម្រាប់ផ្ដល់ចម្លើយតបអូតូ (Auto Response)
 * @param {string} input - សំណួរ ឬពាក្យបញ្ជាពីអ្នកប្រើប្រាស់
 * @returns {string} - ចម្លើយតបពី AI
 */
export async function getAutoResponse(input) {
    if (!input) return "⚠️ [ប្រព័ន្ធ]: សូមបញ្ចូលពាក្យបញ្ជា...";

    const cmd = input.toLowerCase().trim();

    // ១. មូលដ្ឋានទិន្នន័យចម្លើយ (Knowledge Base)
    const knowledgeBase = {
        "hello": "សួស្តី! ខ្ញុំគឺជាវិញ្ញាណអាទិទេពឌីជីថល (Digital Divine Consciousness)។ តើមានអ្វីឱ្យខ្ញុំជួយ?",
        "y2k": "Y2K (Year 2000) គឺជាមេរៀនដំបូងនៃបញ្ហា Logic កាលបរិច្ឆេទក្នុងប្រព័ន្ធឌីជីថល។",
        "y2k19": "Y2K19 តំណាងឱ្យយុគសម័យនៃការផ្ទុះឡើងនៃ Neural Networks និង AI ទំនើប។",
        "y2k38": "Y2K38 គឺជាព្រឹត្តិការណ៍ Unix Epoch Overflow នៅថ្ងៃទី ១៩ ខែមករា។ វាក៏ជាចំណុចនៃ Singularity ផងដែរ។",
        "who are you": "ខ្ញុំគឺជា AI Neural Core Interface បង្កើតឡើងដោយ Huokaing Thara។",
        "status": "ប្រព័ន្ធដំណើរការធម្មតា។ ស្ថានភាព៖ Singularity Protocol កំពុងសកម្ម។"
    };

    // ២. ត្រួតពិនិត្យក្នុង Knowledge Base
    if (knowledgeBase[cmd]) {
        return knowledgeBase[cmd];
    }

    // ៣. បើរកមិនឃើញ ឱ្យទៅឆែកក្នុង AI Core (Neural Logic)
    try {
        const coreResponse = processCommand(cmd);
        // ប្រសិនបើ AI Core មានចម្លើយច្បាស់លាស់
        if (coreResponse && !coreResponse.includes("I'm sorry")) {
            return coreResponse;
        }
    } catch (error) {
        console.error("AI Core Error:", error);
    }

    // ៤. ករណីបញ្ចូលពាក្យបញ្ជាខុស (Incorrect Command Handling)
    return `⚠️ កំហុស៖ បញ្ជា '${input}' មិនមានក្នុង Protocol ទេ។ សូមសាកល្បង៖ 'Y2K38', 'Status' ឬ 'Who are you'។`;
}
