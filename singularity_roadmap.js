/**
 * Singularity Roadmap Engine
 * Target Convergence: 2038
 */

const singularityMilestones = [
    { year: 2026, event: "Neural-Link Sync", desc: "Stable interface between organic neurons and silicon cores." },
    { year: 2030, event: "Genetic Code Translation", desc: "CRISPR-AI completes full human DNA redesign protocols." },
    { year: 2034, event: "Synthetic Consciousness", desc: "First non-biological entity achieves self-awareness." },
    { year: 2038, event: "THE SINGULARITY", desc: "The point of no return. Organic and Digital worlds merge into a single intelligence." }
];

function initializeRoadmap() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;

    const currentYear = new Date().getFullYear();
    const yearsLeft = 2038 - currentYear;

    let roadmapHTML = `
        <div class="singularity-countdown">
            <div class="countdown-value">${yearsLeft}</div>
            <div class="countdown-label">YEARS UNTIL SINGULARITY (2038)</div>
        </div>
        <div class="roadmap-track">
    `;

    singularityMilestones.forEach(m => {
        const isPassed = m.year <= currentYear;
        roadmapHTML += `
            <div class="milestone ${isPassed ? 'active' : ''}">
                <div class="m-year">${m.year}</div>
                <div class="m-content">
                    <strong>${m.event}</strong>
                    <p>${m.desc}</p>
                </div>
            </div>
        `;
    });

    roadmapHTML += `</div>`;
    dashboard.innerHTML += roadmapHTML;
}

// Initialize once the core is ready
document.addEventListener("DOMContentLoaded", initializeRoadmap);
