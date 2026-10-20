document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Responsive Móvil
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Filtro del Catálogo de Diseños
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.catalog-grid .card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Activar botón seleccionado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Acordeón de Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // Cerrar los demás
            document.querySelectorAll('.faq-item').forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove('active');
                }
            });

            // Alternar actual
            item.classList.toggle('active');
        });
    });
});