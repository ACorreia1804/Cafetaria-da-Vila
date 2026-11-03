const searchInput = document.getElementById("pesquisa-opinioes");
const filterButtons = [...document.querySelectorAll(".filtro-opinioes")];
const reviews = [...document.querySelectorAll(".opiniao[data-plataforma]")];
const emptyMessage = document.querySelector(".sem-opinioes");

function normalizeText(text) {
  return text.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function updateReviews() {
  const selectedPlatform = document.querySelector(".filtro-opinioes.ativo")?.dataset.filtro ?? "todas";
  const searchTerm = normalizeText(searchInput.value.trim());
  let visibleReviews = 0;

  for (const review of reviews) {
    const matchesPlatform = selectedPlatform === "todas" || review.dataset.plataforma === selectedPlatform;
    const matchesSearch = normalizeText(review.textContent).includes(searchTerm);
    const isVisible = matchesPlatform && matchesSearch;
    review.hidden = !isVisible;
    if (isVisible) visibleReviews += 1;
  }

  emptyMessage.hidden = visibleReviews > 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    for (const filterButton of filterButtons) {
      const isActive = filterButton === button;
      filterButton.classList.toggle("ativo", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    }

    updateReviews();
  });
}

searchInput.addEventListener("input", updateReviews);
