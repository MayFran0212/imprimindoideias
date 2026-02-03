import { createFeedbackCard, feedbacksData } from './feedback-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-feedback .swiper-wrapper');

    if (swiperWrapper) {
        swiperWrapper.innerHTML = ''; 
        feedbacksData.forEach(feedback => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            
            slide.innerHTML = createFeedbackCard(feedback);
            swiperWrapper.appendChild(slide);
        });
    }

    const swiper = new Swiper('.swiper-feedback', {
        // O SEGREDO DO RESPIRO: 1.2 mostra o card central e 10% de cada lado dos outros
        slidesPerView: 1.2, 
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: true, // Mantém o card principal no meio
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // No Desktop voltamos para 3 colunas
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
});