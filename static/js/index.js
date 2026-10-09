"use strict";
const search = document.querySelector("#metric-search");
const category = document.querySelector("#metric-category");
const rows = [...document.querySelectorAll("#metric-table tbody tr")];
if (search && category) {
  document.querySelector(".metric-controls").hidden = false;
  const filter = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    rows.forEach(row => {
      const match = row.textContent.toLowerCase().includes(query) && (!category.value || row.dataset.category === category.value);
      row.hidden = !match;
      if (match) visible++;
    });
    document.querySelector("#metric-count").textContent = `${visible} of ${rows.length} metrics`;
    document.querySelector("#metric-empty").hidden = visible !== 0;
  };
  search.addEventListener("input", filter);
  category.addEventListener("change", filter);
}
document.querySelectorAll("[data-copy]").forEach(button => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const label = button.dataset.copy === "bibtex" ? "BibTeX" : "code";
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(target.textContent);
      button.textContent = "Copied!";
      document.querySelector("#copy-status").textContent = `${label} copied to clipboard.`;
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges(); selection.addRange(range);
      button.textContent = "Selected — press Ctrl/Cmd+C";
      document.querySelector("#copy-status").textContent = "Automatic copy is unavailable. The text is selected; press Ctrl/Cmd+C to copy.";
    }
  });
});
