const phrases = [
    "brindes corporativos personalizados ",
    "presentes corporativos personalizados ",
    "kits onboarding personalizados ",
    "materiais promocionais exclusivos ",
    "brindes para datas especiais ",
    "brindes exclusivos ",
  ];
  
  const el = document.getElementById("typing-text");
  
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;
  
  function type() {
    currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, letterIndex--);
    } else {
      el.textContent = currentPhrase.substring(0, letterIndex++);
    }
  
    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1500); // Pausa antes de apagar
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Pausa antes de começar a escrever
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);
  
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.container__clientes--track');
    const logos = Array.from(track.children); // Converte HTMLCollection para Array

    // Duplica os logos para criar o efeito de loop infinito
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    // Opcional: Pausar a animação no hover
    track.addEventListener('mouseover', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseout', () => {
        track.style.animationPlayState = 'running';
    });
});