document.addEventListener("DOMContentLoaded", function () {

  const botao = document.getElementById("oferta-botao");
  const modal = document.getElementById("modal-ofertas");

  if (!botao || !modal) {
    console.error("Botão ou modal não encontrado");
    return;
  }

  botao.addEventListener("click", abrirModal);

  modal.addEventListener("click", function (e) {
    if (e.target.id === "modal-ofertas") {
      fecharModal();
    }
  });
});

function abrirModal() {
  document.getElementById("modal-ofertas").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  document.getElementById("modal-ofertas").style.display = "none";
  document.body.style.overflow = "";
}

function ajustarCardsHome() {
  const container = document.querySelector(".oferta-home");
  if (!container) return;

  const cards = container.children;
  const largura = window.innerWidth;

  let maxVisiveis;

  if (largura <= 600) {
    maxVisiveis = 4; // 2x2
  } else if (largura <= 900) {
    maxVisiveis = 3;
  } else if (largura <= 1200) {
    maxVisiveis = 5;
  } else {
    maxVisiveis = cards.length;
  }

  Array.from(cards).forEach((card, index) => {
    card.style.display = index < maxVisiveis ? "block" : "none";
  });
}

window.addEventListener("load", ajustarCardsHome);
window.addEventListener("resize", ajustarCardsHome);