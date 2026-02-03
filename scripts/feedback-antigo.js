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
        title: 'AGILIDADE E EXCELÊNCIA',
        rating: 4.5,
        text: 'A Imprimindo Ideias superou nossas expectativas com a agilidade na entrega e a excelência dos brindes. Nossos clientes adoraram!',
        name: 'Fernando Costa',
        company: 'Marketing Solutions',
        avatar: 'assets/fernando-avatar.jpg'
    },
    {
        title: 'PARCERIA DE SUCESSO',
        rating: 4,
        text: 'Desde o primeiro contato, a equipe foi muito atenciosa. Os produtos são de alta qualidade e contribuíram muito para nossas campanhas.',
        name: 'Mariana Alves',
        company: 'Inova Tech',
        avatar: 'assets/mariana-avatar.jpg'
    },
    {
        title: 'RESULTADOS CONCRETOS',
        rating: 5,
        text: 'Os brindes da Imprimindo Ideias foram fundamentais para nossa campanha de reconhecimento de funcionários. Qualidade e pontualidade impecáveis!',
        name: 'Rafael Mendes',
        company: 'Rh Solutions',
        avatar: 'assets/rafael-avatar.jpg'
    },
    {
        title: 'ATENDIMENTO IMPECÁVEL',
        rating: 5,
        text: 'Fomos muito bem atendidos do início ao fim. Profissionalismo e criatividade que se destacam no mercado. Recomendo fortemente!',
        name: 'Beatriz Almeida',
        company: 'Eventos Premium',
        avatar: 'assets/beatriz-avatar.jpg'
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
    return `<div class="card__stars">${starsHtml}</div>`;
}

// Função para criar um único card de feedback
function createFeedbackCard(feedbackData) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('feedback__card');
    
    const title = document.createElement('h3');
    title.textContent = `“${feedbackData.title}”`;
    cardDiv.appendChild(title);
    
    cardDiv.innerHTML += createStarRatingHTML(feedbackData.rating);
    
    const text = document.createElement('p');
    text.textContent = feedbackData.text;
    cardDiv.appendChild(text);
    
    const userDiv = document.createElement('div');
    userDiv.classList.add('card__user');
    
    const userAvatar = document.createElement('img');
    userAvatar.src = feedbackData.avatar;
    userAvatar.alt = `Avatar de ${feedbackData.name}`;
    userDiv.appendChild(userAvatar);
    
    const userInfoDiv = document.createElement('div');
    const userName = document.createElement('h4');
    userName.textContent = feedbackData.name;
    const userCompany = document.createElement('span');
    userCompany.textContent = feedbackData.company;
    
    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(userCompany);
    userDiv.appendChild(userInfoDiv);
    
    cardDiv.appendChild(userDiv);
    
    return cardDiv;
}

// Lógica do carrossel
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.feedback__carousel__track');
    const prevButton = document.querySelector('.carousel__button.prev');
    const nextButton = document.querySelector('.carousel__button.next');
    const trackContainer = document.querySelector('.feedback__carousel__track--container');

    let currentPosition = 0;
    let cardFullWidth = 0;
    let totalCards = 0;

    function populateCarousel() {
        if (!carouselTrack) return;
        feedbacksData.forEach(feedback => {
            const cardElement = createFeedbackCard(feedback);
            carouselTrack.appendChild(cardElement);
        });
        totalCards = feedbacksData.length;
        updateCarouselDimensions();
        updateButtonStates();
    }

    function updateCarouselDimensions() {
        if (totalCards === 0) return;
        const firstCard = carouselTrack.querySelector('.feedback__card');
        if (firstCard) {
            const cardStyle = getComputedStyle(firstCard);
            cardFullWidth = firstCard.offsetWidth + parseFloat(cardStyle.marginRight);
        }
    }

function updateCarouselPosition() {
    // Garante que a posição não ultrapasse os limites
    currentPosition = Math.max(0, Math.min(currentPosition, totalCards - 1));

    // Pega a referência do card atual
    const currentCard = carouselTrack.children[currentPosition];
    if (!currentCard) return;

    // Calcula a largura total do contêiner visível
    const trackContainerWidth = trackContainer.clientWidth;

    // Calcula a largura total do card, incluindo as margens
    const cardFullWidth = currentCard.offsetWidth;
    const cardStyle = getComputedStyle(currentCard);
    const cardMarginRight = parseFloat(cardStyle.marginRight);

    // Calcula a posição do card para que ele fique no meio da tela
    const centerPosition = (trackContainerWidth / 2) - (cardFullWidth / 2);

    // Deslocamento para mover o card atual para o centro
    const offset = -(currentPosition * (cardFullWidth + cardMarginRight)) + centerPosition;

    carouselTrack.style.transform = `translateX(${offset}px)`;
    updateButtonStates();
}

    function updateButtonStates() {
        prevButton.disabled = currentPosition === 0;
        nextButton.disabled = currentPosition >= totalCards - 1;
    }

    // Adiciona Event Listeners para os botões
    prevButton.addEventListener('click', () => {
        currentPosition = currentPosition - 1;
        updateCarouselPosition();
    });

    nextButton.addEventListener('click', () => {
        currentPosition = currentPosition + 1;
        updateCarouselPosition();
    });

    window.addEventListener('resize', () => {
        updateCarouselDimensions();
        updateCarouselPosition();
    });

    populateCarousel();
});