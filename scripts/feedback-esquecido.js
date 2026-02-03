// Dados dos seus feedbacks
const feedbacksData = [
    {
        title: 'EXPERIÊNCIA MARAVILHOSA',
        rating: 5,
        text: 'Experiência maravilhosa com a Imprimindo Ideias, atendimento, qualidade nos produtos, impressão nos materiais impecável. Cumprimento do contrato dentro do prazo, envio dos materiais bem embalados. Parabéns a toda equipe Imprimindo Ideias Personalizados.',
        name: 'LETICIA XL',
        company: 'Essentia Energia',
        avatar: 'assets/img-logo-essentia.jpg'
    },
    {
        title: 'REALMENTE SE IMPORTA COM O CLIENTE',
        rating: 5,
        text: 'Que experiência incrível com a Imprimindo Ideias! Atendimento nota 10, produtos de alta qualidade e uma equipe que realmente se importa com o cliente. Recomendo muito!',
        name: 'RAFAEL BRASILEIRO',
        company: 'Santander',
        avatar: 'assets/img-logo-santander.jpg'
    },
    {
        title: 'EXTREMAMENTE SATISFEITA',
        rating: 5,
        text: 'Trabalho impecável! Extremamente satisfeita com a agilidade na entrega, comunicação, atendimento e o cuidado com o desenvolvimento do brinde.',
        name: 'LETICIA RIBEIRO',
        company: 'Maskan',
        avatar: 'assets/img-logo-maskan.jpg'
    },
    {
        title: 'SEMPRE SURPREENDE',
        rating: 5,
        text: 'Sinônimo de criatividade, qualidade e atendimento personalizado! Sempre que preciso de brindes a primeira coisa que penso é na Imprimindo Ideias, o time é excelente e sempre surpreende no resultado.',
        name: 'ANA VELIS',
        company: 'Suzano',
        avatar: 'assets/img-logo-suzano.jpg'
    },
    {
        title: 'MELHOR EMPRESA DE BRINDES',
        rating: 5,
        text: 'Essa é a melhor empresa de brindes!! Extremamente competentes. Mariana é muito comprometida, simpática e seu senso de responsabilidade é o que eu mais admiro! Não troco a Imprimindo Ideias por nada',
        name: 'VINICIUS DUARTE',
        company: 'Atlas Copco',
        avatar: 'assets/img-logo-atlas.jpg'
    },
    {
        title: 'TRABALHO IMPECÁVEL',
        rating: 5,
        text: 'Um trabalho impecável, com muito carinho e cuidado em cada pedido entregue. Parabéns a toda equipe, vocês são incríveis!',
        name: 'MARKETING',
        company: 'Pão de Queijo Mineirão',
        avatar: 'assets/img-logo-mineirao.jpg'
    },
    {
        title: 'RECOMENDO DE OLHOS FECHADOS',
        rating: 5,
        text: 'Já estamos trabalhando com essa empresa há um tempo para fazer os brindes corporativos e amamos o trabalho além também do ótimo atendimento, profissionalismo e ótimos prazos de entrega. Recomendo de olhos fechados essa parceria.',
        name: 'FERNANDA CARONE',
        company: 'Bunge',
        avatar: 'assets/img-logo-bunge.jpg'
    },
    {
        title: 'BRINDES PARA PÚBLICO PREMIUM',
        rating: 5,
        text: 'Gostei muito dos serviços prestados, realizei confecção de brindes para um público Premium e fui bem atendido',
        name: 'LUCAS MARTINS',
        company: 'VERIFICAR',
        avatar: 'assets/beatriz-avatar.jpg'
    },
    {
        title: 'MELHOR FORNECEDOR DE BRINDES',
        rating: 5,
        text: 'Melhor fornecedor de brindes que já tivemos. Rápido, qualidade impecável e atendimento Encantador. Nota 100000',
        name: 'FLAVIA GUERREIRO',
        company: 'YAMAHA',
        avatar: 'assets/img-logo-yamaha.jpg'
    }
];

// Função auxiliar para criar as estrelas
function createStarRatingHTML(rating) {
    const totalStars = 5;
    let starsHtml = '';
    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else if (i - 0.5 === rating) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return `<div class="testimonial-rate">${starsHtml}</div>`;
}

// Função para criar um único card de feedback
function createFeedbackCard(feedbackData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('swiper-slide');
    
    const title = document.createElement('h3');
    title.textContent = `“${feedbackData.title}”`;
    title.classList.add('testimonial-title')
    cardDiv.appendChild(title);
    
    cardDiv.innerHTML += createStarRatingHTML(feedbackData.rating);
    
    const text = document.createElement('blockquote');
    text.textContent = feedbackData.text;
    text.classList.add('testimonial-quote');
    cardDiv.appendChild(text);
    
    const userDiv = document.createElement('div');
    userDiv.classList.add('testimonial-author');

    const userImg = document.createElement('div');
    userImg.classList.add('author-avatar');    
    
    const userAvatar = document.createElement('img');
    userAvatar.src = feedbackData.avatar;
    userAvatar.alt = `Avatar de ${feedbackData.name}`;
    userImg.appendChild(userAvatar);

    userDiv.appendChild(userImg);
    
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('author-info');
    const userName = document.createElement('h4');
    userName.textContent = feedbackData.name;
    const userCompany = document.createElement('p');
    userCompany.textContent = feedbackData.company;
    
    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(userCompany);
    userDiv.appendChild(userInfoDiv);
    
    cardDiv.appendChild(userDiv);
    
    return cardDiv;
}

// Função para popular o carrossel com os cards de feedback
function populateSwiperSlides() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    feedbacksData.forEach(feedback => {
        // Cria o slide usando a sua função que já está no código
        const slide = createFeedbackCard(feedback);
        // Adiciona o slide criado ao container do Swiper
        swiperWrapper.appendChild(slide);
    });
}

// Quando a página carregar, a gente roda a função que popula os slides
// e depois inicializa o Swiper.
document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Popula o carrossel com os slides criados dinamicamente
    populateSwiperSlides();

    // 2. Agora que os slides existem no HTML, inicializamos o Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 18
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            1188: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });
});