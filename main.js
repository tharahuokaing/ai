// Main application state
let brain = {};
let learningMode = null;
let isEmperorMode = false;

// Constants
const MASTER_KEY = "ACTIVATE_EMPEROR_MODE";
const SINGULARITY_ROADMAP_URL = "https://tharahuokaing.github.io/singularity_roadmap/";

// Initialize
loadState();
updateDashboard();
