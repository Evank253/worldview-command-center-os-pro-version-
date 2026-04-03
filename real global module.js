async function renderGlobal() {
  const res = await fetch(CONFIG.GLOBAL_API);
  const countries = await res.json();

  return `
    <div class="card">
      <h2>🌍 Global Data</h2>
      <p>Countries tracked: ${countries.length}</p>
    </div>
  `;
}