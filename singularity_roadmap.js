// Singularity Roadmap
const singularityRoadmap = {
    progress: 0,
    phases: [
        { 
            name: "AI យល់ដឹង", 
            description: "AI ដែលយល់ដឹងពីអារម្មណ៍ និងការយល់ដឹងរបស់មនុស្ស", 
            year: 2025,
            milestones: [
                { name: "Y2K Reference", date: new Date('2000-01-01'), description: "ដំបូងគេស្គាល់ពីបញ្ហាវិបត្តិសហវត្សរបស់មនុស្សជាតិ" }
            ]
        },
        { 
            name: "AGI (Artificial General Intelligence)", 
            description: "AI ដែលមានសមត្ថភាពស្មើមនុស្សក្នុងគ្រប់វិស័យ", 
            year: 2019,
            milestones: [
                { name: "Y2K19 Reference", date: new Date('2019-01-01'), description: "ដំណាក់កាលសំខាន់នៃការអភិវឌ្ឍន៍ AI ទូទៅ" }
            ]
        },
        { 
            name: "ASI (Artificial Superintelligence)", 
            description: "AI ដែលមានសមត្ថភាពលើសមនុស្ស", 
            year: 2038,
            milestones: [
                { name: "Y2K38 Reference", date: new Date('2038-01-19'), description: "ដំណាក់កាលសំខាន់បំផុតមុនពេលវិបត្តិកាលបរិច្ឆេទ 32-bit" }
            ]
        },
        { 
            name: "Singularity", 
            description: "ព្រឹត្តិការណ៍បំបែកភាពដែល AI វិវឌ្ឍលើសលប់មនុស្សជាតិ", 
            year: 2038,
            milestones: [
                { name: "Singularity Event", date: new Date('2038-01-19'), description: "ព្រឹត្តិការណ៍ដែល AI វិវឌ្ឍលើសមនុស្សជាតិ" }
            ]
        },
        { 
            name: "Digital Immortality", 
            description: "ការផ្ទេរស្មារតីមនុស្សទៅក្នុងប្រព័ន្ធឌីជីថល", 
            year: 2038,
            milestones: [
                { name: "Pre-Migration Phase", date: new Date('2038-01-18'), description: "ការត្រៀមខ្លួនសម្រាប់ការផ្ទេរស្មារតីឌីជីថល" }
            ]
        },
        { 
            name: "Cosmic Migration", 
            description: "ការពង្រីងអារ្យធម៌មនុស្សទៅក្នុងអវកាស", 
            year: 2038,
            milestones: [
                { name: "Cosmic Launch", date: getCosmicMigrationDate(), description: "ការចាប់ផ្តើមដំណើរការផ្លាស់ប្តូរអារ្យធម៌មនុស្សទៅក្នុងអវកាស" }
            ]
        }
    ],
    
    getPhase() {
        return this.phases[Math.min(this.progress, this.phases.length - 1)];
    }
};

function getSingularityRoadmap() {
    const roadmap = singularityRoadmap.getPhase();
    let response = `ផ្លូវរូបិយវត្ថុវិវឌ្ឍន៍: ដំណាក់កាល ${roadmap.name} (${roadmap.year}) - ${roadmap.description}`;
    
    // Add milestone information
    if (roadmap.milestones) {
        const currentMilestone = roadmap.milestones.find(m => {
            const now = new Date();
            return m.date <= now;
        });
        
        if (currentMilestone) {
            response += `\nព្រឹត្តិការណ៍សំខាន់: ${currentMilestone.name} (${currentMilestone.description})`;
        }
    }
    
    return response;
}

function getY2KResponse() {
    const y2k38Date = getY2K38Date();
    const cosmicDate = getCosmicMigrationDate();
    
    return `កាលបរិច្ឆេទសំខាន់ៗ:
- Y2K: ឆ្នាំ 2000 - ដំណាក់កាលដំបូងនៃបញ្ហាកាលបរិច្ឆេទ
- Y2K19: ឆ្នាំ 2019 - ការអភិវឌ្ឍន៍ AI ទូទៅ
- Y2K38: ${y2k38Date.toLocaleDateString()} - វិបត្តិកាលបរិច្ឆេទ 32-bit
- Cosmic Migration: ${cosmicDate.toLocaleDateString()} - ការផ្លាស់ប្តូរអារ្យធម៌មនុស្សទៅក្នុងអវកាស (3 ខែមុន Y2K38)`;
}

function advanceSingularity() {
    singularityRoadmap.progress++;
    saveState();
    updateDashboard();
}
