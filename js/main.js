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

    // 4. Formulario de Contacto -> Redirección a WhatsApp
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Tu número de WhatsApp (código de país + número sin espacios ni signos)
            const phoneNumber = '584129000510';

            // Obtener los valores de los campos del formulario
            const nameInput = contactForm.querySelector('input[type="text"], input[name="name"]');
            const eventInput = contactForm.querySelector('select, input[name="event"]');
            const dateInput = contactForm.querySelector('input[type="date"], input[name="date"]');
            const messageInput = contactForm.querySelector('textarea, input[name="message"]');

            const name = nameInput ? nameInput.value.trim() : '';
            const event = eventInput ? eventInput.value.trim() : '';
            const date = dateInput ? dateInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // Construir el mensaje personalizado
            let text = `¡Hola Franyeli! 👋🏻\n\n`;
            if (name) text += `*Nombre:* ${name}\n`;
            if (event) text += `*Tipo de evento:* ${event}\n`;
            if (date) text += `*Fecha del evento:* ${date}\n`;
            if (message) text += `*Mensaje / Detalles:* ${message}\n\n`;
            text += `Me gustaría recibir información para cotizar mi invitación con Franyeli A.R.T.✨`;

            // Crear el enlace seguro a WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

            // Abrir WhatsApp en una nueva pestaña
            window.open(whatsappUrl, '_blank');
        });
    }
});
