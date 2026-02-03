// // 1. Bloqueia o clique com o botão direito
// document.addEventListener('contextmenu', (event) => event.preventDefault());

// // 2. Bloqueia atalhos de teclado comuns de "copiões"
// document.addEventListener('keydown', (event) => {
//     // Bloqueia F12 (Inspecionar)
//     if (event.keyCode === 123) {
//         event.preventDefault();
//     }
//     // Bloqueia Ctrl+Shift+I (Inspecionar)
//     if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
//         event.preventDefault();
//     }
//     // Bloqueia Ctrl+U (Ver código fonte)
//     if (event.ctrlKey && event.keyCode === 85) {
//         event.preventDefault();
//     }
//     // Bloqueia Ctrl+C (Copiar)
//     if (event.ctrlKey && event.keyCode === 67) {
//         event.preventDefault();
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    // Verifica se o usuário já aceitou antes
    if (!localStorage.getItem("cookiesAceitos")) {
        cookieBanner.style.display = "flex";
    } else {
        cookieBanner.style.display = "none";
    }

    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAceitos", "true");
        cookieBanner.style.display = "none";
    });
});