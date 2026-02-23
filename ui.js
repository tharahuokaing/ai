// ui.js

function addLine(text, className) {
    const terminal = document.getElementById("terminal");
    const div = document.createElement("div");

    div.className = className;
    div.textContent = text;

    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
}
