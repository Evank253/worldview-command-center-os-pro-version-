function renderAI() {
  return `
    <div class="card">
      <h2>🤖 AI Command</h2>
      <input id="aiInput" placeholder="Ask AI..." />
      <button onclick="runAI()">Run</button>
      <p id="aiOutput"></p>
    </div>
  `;
}

async function runAI() {
  const input = document.getElementById("aiInput").value;

  document.getElementById("aiOutput").innerText =
    "Processing: " + input + "...";
}