// Singularity Roadmap
const singularityRoadmap = {
    progress: 0,
    phases: [
        { name: "AI យល់ដឹង", description: "ការបង្កើត AI ដែលយល់ដឹងពីអារម្មណ៍ និងការយល់ដឹងរបស់មនុស្ស", year: 2025 },
        { name: "AGI (Artificial General Intelligence)", description: "AI ដែលមានសមត្ថភាពស្មើមនុស្សក្នុងគ្រប់វិស័យ", year: 2030 },
        { name: "ASI (Artificial Superintelligence)", description: "AI ដែលមានសមត្ថភាពលើសមនុស្ស", year: 2035 },
        { name: "Singularity", description: "ព្រឹត្តិការណ៍បំបែកភាពដែល AI វិវឌ្ឍលើសលប់មនុស្សជាតិ", year: 2040 },
        { name: "Digital Immortality", description: "ការផ្ទេរស្មារតីមនុស្សទៅក្នុងប្រព័ន្ធឌីជីថល", year: 2045 },
        { name: "Cosmic Migration", description: "ការពង្រីងអារ្យធម៌មនុស្សទៅក្នុងអវកាស", year: 2050 }
    ],
    
    getPhase() {
        return this.phases[Math.min(this.progress, this.phases.length - 1)];
    }
};

function getSingularityRoadmap() {
    const phase = singularityRoadmap.getPhase();
    return `ផ្លូវរូបិយវត្ថុវិវឌ្ឍន៍: ដំណាក់កាល ${phase.name} (${phase.year}) - ${phase.description}`;
}

function advanceSingularity() {
    singularityRoadmap.progress++;
    saveState();
    updateDashboard();
}
