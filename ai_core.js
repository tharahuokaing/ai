import fs from "fs";
import path from "path";

// Load responses
const responsesPath = path.join(process.cwd(), "responses.json");
const neuralResponses = JSON.parse(fs.readFileSync(responsesPath, "utf8"));

/**
 * Process user input and return a response.
 * @param {string} input - Raw user command
 * @returns {string}
 */
export function processNeuralInput(input) {
  if (!input?.trim()) return "Awaiting input...";

  const cmd = input.toLowerCase().trim();

  // Exact match
  if (neuralResponses[cmd]) return neuralResponses[cmd];

  // Partial match, longest keys first
  const sortedKeys = Object.keys(neuralResponses).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    if (cmd.includes(key)) return neuralResponses[key];
  }

  return `Command '${input}' not recognized.`;
}
