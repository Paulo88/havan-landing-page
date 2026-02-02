const cards = document.querySelectorAll(".produto");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");
const progressBar = document.getElementById("carouselProgress");

let currentPage = 0;

function getCardsPerPage() {
	const width = window.innerWidth;

	if (width <= 480) return 1;
	if (width <= 768) return 2;
	if (width <= 1200) return 4;
	return 6;
}

function getTotalPages() {
	const perPage = getCardsPerPage();
	return Math.ceil(cards.length / perPage);
}

function updateProgress() {
	const totalPages = getTotalPages();

	if (totalPages <= 1) {
		progressBar.style.width = "100%";
		progressBar.style.left = "0%";
		return;
	}

	const step = 100 / totalPages;

	progressBar.style.width = `${step}%`;
	progressBar.style.left = `${currentPage * step}%`;
}

function showPage(page) {
	const perPage = getCardsPerPage();

	cards.forEach((card) => card.classList.remove("active"));

	const start = page * perPage;
	const end = start + perPage;

	for (let i = start; i < end; i++) {
		if (cards[i]) {
			cards[i].classList.add("active");
		}
	}

	updateProgress();
}

nextBtn.addEventListener("click", () => {
	const totalPages = getTotalPages();

	currentPage++;
	if (currentPage >= totalPages) {
		currentPage = 0;
	}

	showPage(currentPage);
});

prevBtn.addEventListener("click", () => {
	const totalPages = getTotalPages();

	currentPage--;
	if (currentPage < 0) {
		currentPage = totalPages - 1;
	}

	showPage(currentPage);
});

window.addEventListener("resize", () => {
	currentPage = 0;
	showPage(currentPage);
});

showPage(currentPage);
