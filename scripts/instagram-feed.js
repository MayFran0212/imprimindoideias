document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('insta-grid');

    // Aqui você altera os links e os caminhos das fotos quando as tiver
    const posts = [
        { link: 'https://www.instagram.com/p/DRfArtaEUNE/', img: 'assets/post1.jpg' },
        { link: 'https://www.instagram.com/p/DTaVHRrEq-e/?img_index=1', img: 'assets/post2.jpg' },
        { link: 'https://www.instagram.com/p/DQKuqOrAQLD/', img: 'assets/post3.jpg' },
        { link: 'https://www.instagram.com/p/DLVvdkZhh71/', img: 'assets/post4.jpg' },
        { link: 'https://www.instagram.com/imprimindoideias/p/DAqeynJtZPR/', img: 'assets/post5.jpg' },
        { link: 'https://www.instagram.com/imprimindoideias/p/DIhVsXuS6sv/', img: 'assets/post6.jpg' },
    ];

    posts.forEach(post => {
        const anchor = document.createElement('a');
        anchor.href = post.link;
        anchor.target = '_blank';
        anchor.classList.add('insta-item');

        anchor.innerHTML = `
            <img src="${post.img}" alt="Post Imprimindo Ideias">
            <div class="insta-overlay">
                <i class="fa-brands fa-instagram"></i>
            </div>
        `;

        grid.appendChild(anchor);
    });
});