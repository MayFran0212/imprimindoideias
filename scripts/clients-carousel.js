document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper-clients', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 5000, // Velocidade lenta para ser elegante
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1440: { slidesPerView: 6 }
        },
        allowTouchMove: false, // Evita que o usuário pare o movimento
    });
});