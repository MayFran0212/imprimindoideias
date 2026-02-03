document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navLinks = document.getElementById('nav__links');
    const toggleIcon = navToggle.querySelector('i'); // Seleciona a tag <i> dentro do botão

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            // Alterna a classe 'active' para controlar o CSS
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Troca os ícones
            if (navToggle.classList.contains('active')) {
                // Menu aberto: mostra o ícone de fechar (X)
                toggleIcon.classList.remove('fa-gift');
                toggleIcon.classList.add('fa-xmark');
            } else {
                // Menu fechado: mostra o ícone de barras
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-gift');
            }
        });
    }
});