document.addEventListener('DOMContentLoaded', () => {
    console.log("Página de Privacidade carregada.");
    
    // Se você tiver um botão de "voltar" ou quiser animações simples:
    const content = document.querySelector('.privacy-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.8s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 100);
});