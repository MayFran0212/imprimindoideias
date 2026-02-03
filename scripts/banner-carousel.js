document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o Swiper no Banner
    const swiperHero = new Swiper('.swiper-hero', {
        loop: true,           // Torna o carrossel infinito
        effect: 'fade',       // Adiciona o efeito de fade que você gostou
        fadeEffect: {
            crossFade: true   // Faz a transição ficar bem suave
        },
        speed: 1000,          // Velocidade da transição (1 segundo)
        autoplay: {
            delay: 5000,      // Troca sozinho a cada 5 segundos
            disableOnInteraction: false,
        },
        // Ativa as setinhas
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Ativa as bolinhas (opcional)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});