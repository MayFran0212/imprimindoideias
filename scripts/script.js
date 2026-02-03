// 1. Apenas os dados dos logos
const logosData = [
    { src: 'assets/logo-apoio.png', alt: 'logo Apoio' },
    { src: 'assets/logo-atlas.png', alt: 'logo Atlas Copco' },
    { src: 'assets/logo-bunge.png', alt: 'logo Bunge' },
    { src: 'assets/logo-cruzeiro.png', alt: 'logo Cruzeiro do Sul' },
    { src: 'assets/logo-mastercard.png', alt: 'logo Mastercard' },
    { src: 'assets/logo-natura.png', alt: 'logo Natura' },
    { src: 'assets/logo-niterra.png', alt: 'logo Niterra' },
    { src: 'assets/logo-picpay.png', alt: 'logo PicPay' },
    { src: 'assets/logo-qiagen.png', alt: 'logo Qiagen' },
    { src: 'assets/logo-santander.png', alt: 'logo Santander' },
    { src: 'assets/logo-shein.png', alt: 'logo Shein' },
    { src: 'assets/logo-suzano.png', alt: 'logo Suzano' },
    { src: 'assets/logo-tiktok.png', alt: 'logo TikTok' },
    { src: 'assets/logo-yamaha.png', alt: 'logo Yamaha' }
];

// 2. Função para montar os logos no HTML automaticamente
function populateClientsSwiper() {
    const swiperWrapper = document.querySelector('.swiper-clients .swiper-wrapper');
    if (!swiperWrapper) return; // Evita erro se a seção não existir na página

    logosData.forEach(logo => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.alt;
        
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });
}

// 3. Inicialização do Movimento Infinito (Sem Pausas)
document.addEventListener('DOMContentLoaded', () => {
    populateClientsSwiper();
    
    const swiperClients = new Swiper(".swiper-clients", {
        loop: true,
        allowTouchMove: true,
        speed: 6000, // Velocidade constante (mais alto = mais lento)
        autoplay: {
            delay: 0, // Sem nenhuma pausa entre movimentos
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 'auto',
        freeMode: {
            enabled: true,
            sticky: false,
        },
        momentum: false, // Remove inércia para não variar a velocidade
    });
});