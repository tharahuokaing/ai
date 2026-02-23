/**
 * Utils - Bio-Digital Support Functions
 * Foundational tools for the Singularity Interface
 */

const Utils = {
    // 1. Generate Random Bio-Data Strings (Simulates DNA/Neural sequences)
    generateSequence: function(length = 20) {
        const chars = "ATGC01"; // Adenine, Thymine, Guanine, Cytosine + Binary
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    // 2. Format Currency/Numbers to "Digital Credit" style
    formatDataSize: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    // 3. Coordinate Randomizer (For the Status Bar pulse)
    getRandomCoords: function() {
        const lat = (Math.random() * (11.6 - 11.4) + 11.4).toFixed(4);
        const lon = (Math.random() * (105.0 - 104.8) + 104.8).toFixed(4);
        return `LAT: ${lat} | LON: ${lon}`;
    },

    // 4. Typewriter Effect Logic (Cleaned up for reuse)
    typeText: function(element, text, speed = 50, callback) {
        let i = 0;
        element.innerHTML = "";
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        typing();
    },

    // 5. Chance Engine (Returns true based on percentage)
    chance: function(percentage) {
        return Math.random() * 100 < percentage;
    }
};
