// main.js

document.addEventListener("DOMContentLoaded", () => {

    const inputBox = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    function handleInput() {
        const input = inputBox.value;
        if (!input) return;

        addLine(">>> " + input, "user");

        const response = processNeuralInput(input);

        setTimeout(() => {
            addLine(response, "ai");
        }, 300);

        inputBox.value = "";
    }

    sendBtn.addEventListener("click", handleInput);

    inputBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleInput();
        }
    });

});
