export function initFilterSystem(): void {
  const searchInput = document.getElementById("search-input") as HTMLInputElement;
  const categoryFilter = document.getElementById("category-filter") as HTMLSelectElement;
  const resourceList = document.getElementById("resource-list") as HTMLElement;
  const resultsCount = document.getElementById("results-count") as HTMLElement;
  const noResults = document.getElementById("no-results") as HTMLElement;

  // Verificar que todos los elementos existen
  if (!searchInput || !categoryFilter || !resourceList || !resultsCount || !noResults) {
    console.warn('Filter system: Some required elements not found');
    return;
  }

  function filterResources(): void {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const cards = resourceList.querySelectorAll(".resource-card") as NodeListOf<HTMLElement>;

    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const name = card.dataset.name || "";
      const description = card.dataset.description || "";
      const tags = card.dataset.tags || "";

      const matchesCategory = !selectedCategory || category === selectedCategory;
      const matchesSearch = !searchTerm ||
        name.includes(searchTerm) ||
        description.includes(searchTerm) ||
        tags.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Actualizar UI
    resultsCount.textContent = visibleCount.toString();
    noResults.style.display = visibleCount === 0 ? "block" : "none";
    resourceList.style.display = visibleCount === 0 ? "none" : "grid";
  }

  // Event listeners
  searchInput.addEventListener("input", filterResources);
  categoryFilter.addEventListener("change", filterResources);

  // Opcional: Ejecutar filtro inicial
  filterResources();
}