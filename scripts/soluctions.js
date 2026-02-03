document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.closest('.accordion-item');
            const allItems = document.querySelectorAll('.accordion-item');
            const isOpen = currentItem.classList.contains('active');

            // Opcional: Fecha os outros quando um abre (efeito sanfona)
            allItems.forEach(item => {
                item.classList.remove('active');
            });

            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
});