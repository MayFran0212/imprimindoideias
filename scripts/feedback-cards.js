// Função auxiliar para criar as estrelas usando Font Awesome
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

// Função para criar o conteúdo do card de feedback
function createFeedbackCard(feedbackData) {
    // Criamos um fragmento ou uma string para evitar a div extra .feedback__card que buga o layout
    const cardContent = `
        <h3>“${feedbackData.title}”</h3>
        ${createStarRatingHTML(feedbackData.rating)}
        <p class="testimonial-quote">${feedbackData.text}</p>
        <div class="card__user">
            <img src="${feedbackData.avatar}" alt="Logo ${feedbackData.name}">
            <div class="author-info">
                <h4>${feedbackData.name}</h4>
                <span>${feedbackData.company}</span>
            </div>
        </div>
    `;
    return cardContent;
}

const feedbacksData = [
    {
        title: 'EXPERIÊNCIA MARAVILHOSA',
        rating: 5,
        text: 'Experiência maravilhosa com a Imprimindo Ideias, atendimento, qualidade nos produtos, impressão nos materiais impecável. Cumprimento do contrato dentro do prazo, envio dos materiais bem embalados.',
        name: 'LETICIA XL',
        company: 'Essentia Energia',
        avatar: 'assets/img-logo-essentia.jpg'
    },
    {
        title: 'REALMENTE SE IMPORTA',
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
        text: 'Sinônimo de criatividade, qualidade e atendimento personalizado! O time é excelente e sempre surpreende no resultado.',
        name: 'ANA VELIS',
        company: 'Suzano',
        avatar: 'assets/img-logo-suzano.jpg'
    },
    {
        title: 'MELHOR EMPRESA DE BRINDES',
        rating: 5,
        text: 'Essa é a melhor empresa de brindes!! Extremamente competentes. Mariana é muito comprometida e simpática. Não troco por nada!',
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
        title: 'RECOMENDO',
        rating: 5,
        text: 'Já trabalhamos com essa empresa há um tempo e amamos o trabalho além também do ótimo atendimento e ótimos prazos de entrega.',
        name: 'FERNANDA CARONE',
        company: 'Bunge',
        avatar: 'assets/img-logo-bunge.jpg'
    },
    {
        title: 'PRODUTO DE ALTA QUALIDADE',
        rating: 5,
        text: 'Atendimento impecável, produto de alta qualidade e prazo atendido. Nosso evento foi um sucesso e os brindes foram parte relevante do todo. Agradeço e recomendo a Imprimindo Ideias!!',
        name: 'ARQ. RAFAEL ASSIZ',
        company: 'JAA Arquitetura',
        avatar: 'assets/img-logo-jaa.jpg'
    },
    {
        title: 'NOTA 100000',
        rating: 5,
        text: 'Melhor fornecedor de brindes que já tivemos. Rápido, qualidade impecável e atendimento Encantador.',
        name: 'FLAVIA GUERREIRO',
        company: 'Yamaha',
        avatar: 'assets/img-logo-yamaha.jpg'
    }
];

export { createFeedbackCard, feedbacksData };