// ui.js
export function addLine(text, className) {
    const terminal = document.getElementById("terminal");
    if (!terminal) {
        console.error("Terminal element not found.");
        return;
    }
    const div = document.createElement("div");
    div.className = className;
    div.textContent = text;
    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
}

export function createRoadmapVisualization(data) {
    const container = document.getElementById("roadmap-visualization");
    if (!container) {
        console.error("Roadmap visualization container not found.");
        return;
    }
    // Simple visualization logic (can be replaced with a more complex one)
    data.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<h3>${item.year}: ${item.title}</h3><p>${item.description}</p>`;
        container.appendChild(itemElement);
    });
}
