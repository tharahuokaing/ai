// singularity_roa.js
import { createRoadmapVisualization } from './ui.js';

const roadmapData = [
    { year: 2025, title: "AI Emotion Understanding", description: "AI systems achieve human-level emotion recognition" },
    { year: 2026, title: "Self-Aware Systems", description: "Development of autonomous AI decision-making" },
    { year: 2027, title: "Neural Interface Integration", description: "Direct brain-computer interface implementation" }
];

document.addEventListener('DOMContentLoaded', () => {
    createRoadmapVisualization(roadmapData);
});
