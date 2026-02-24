const neuralResponses = { /* huge object mapping keywords → strings */ };

function processNeuralInput(input) {
  if (!input) return "Awaiting input...";
  const cmd = input.toLowerCase().trim();

  // Direct match first
  if (neuralResponses[cmd]) return neuralResponses[cmd];

  // Then check if any key is included in the string
  const keys = Object.keys(neuralResponses).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (cmd.includes(key)) return neuralResponses[key];
  }
  return `Command '${input}' not recognized.`;
}
