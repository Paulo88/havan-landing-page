document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');
    const carrosselArea = document.querySelector('.carrossel-area');
    
    // Criar barra de progresso
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position: absolute; bottom: 20px; left: 30px; height: 6px; background: #5689ed; border-radius: 10px; width: 100px; transition: left 0.3s ease; z-index: 1;';
    carrosselArea.appendChild(progressBar);
    
    function updateProgressBar() {
        const scrollLeft = carrossel.scrollLeft;
        const scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;
        const trackWidth = carrosselArea.offsetWidth - 60;
        const barWidth = 100;
        const maxLeft = trackWidth - barWidth;
        const progress = (scrollLeft / scrollWidth) * maxLeft;
        progressBar.style.left = (30 + progress) + 'px';
    }
    
    if (carrossel && setaEsquerda && setaDireita) {
        const card = carrossel.querySelector('.card');
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(carrossel).gap);
        const scrollAmount = cardWidth + gap;
        
        setaDireita.addEventListener('click', function() {
            carrossel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        setaEsquerda.addEventListener('click', function() {
            carrossel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        carrossel.addEventListener('scroll', updateProgressBar);
        updateProgressBar();
    }

    // Modal de imagem
    const modal = document.createElement('div');
    modal.className = 'modal-imagem';
    modal.innerHTML = '<span class="modal-fechar">&times;</span><img src="" alt="">';
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const fechar = modal.querySelector('.modal-fechar');

    document.querySelectorAll('.card img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.classList.add('ativo');
            modalImg.src = this.src;
        });
    });

    fechar.addEventListener('click', () => modal.classList.remove('ativo'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('ativo');
    });
});
