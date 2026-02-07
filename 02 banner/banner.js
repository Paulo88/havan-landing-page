const banners = document.querySelectorAll(".content-banner");
const btnNext = document.querySelector(".arrow-right");
const btnPrev = document.querySelector(".arrow-left");
const dots = document.querySelectorAll(".dot");

let indice = 0;
let duracaoBanner;

banners.forEach(function (banner, index) {
	banner.classList.toggle("active", index === 0);
});

dots.forEach(function (dot, index) {
	dot.classList.toggle("active", index === 0);
});

function updateDots(indice) {
	dots.forEach(function (dot) {
		dot.classList.remove("active");
	});
	dots[indice].classList.add("active");
}

// NEXT (SETA DA DIREITA)
btnNext.addEventListener("click", function () {
	banners[indice].classList.remove("active");

	indice++;
	if (indice >= banners.length) {
		indice = 0;
	}

	banners[indice].classList.add("active");
	updateDots(indice);

	resetInterval();
});

// PREV (SETA DA ESQUERDA)
btnPrev.addEventListener("click", function () {
	banners[indice].classList.remove("active");

	indice--;
	if (indice < 0) {
		indice = banners.length - 1;
	}

	banners[indice].classList.add("active");
	updateDots(indice);

	resetInterval();
});

// DURAÇÃO DO BANNER
duracaoBanner = setInterval(function () {
	banners[indice].classList.remove("active");

	indice++;
	if (indice >= banners.length) {
		indice = 0;
	}

	banners[indice].classList.add("active");
	updateDots(indice);
}, 3000);

// FUNÇÃO PARA RESETAR QUANDO CLICAR NAS SETAS
function resetInterval() {
	clearInterval(duracaoBanner);

	duracaoBanner = setInterval(function () {
		banners[indice].classList.remove("active");

		indice++;
		if (indice >= banners.length) {
			indice = 0;
		}

		banners[indice].classList.add("active");
		updateDots(indice);
	}, 3000);
}
