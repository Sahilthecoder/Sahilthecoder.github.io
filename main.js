document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        // Initialize checkbox state based on current theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        toggleBtn.checked = currentTheme === 'dark';

        toggleBtn.addEventListener('change', function () {
            const newTheme = toggleBtn.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        });
    }

    // WhatsApp Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Open WhatsApp chat in a new tab with pre-filled message
            window.open(`https://wa.me/919875771550?text=${encodedMessage}`, '_blank');
        });
    }

    // Accordion toggle function (smooth animation & icon change)
    function toggleAccordion(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i.arrow-icon');
        const isOpening = !header.classList.contains('active');

        header.classList.toggle('active', isOpening);
        if (icon) {
            icon.classList.toggle('fa-chevron-right', !isOpening);
            icon.classList.toggle('fa-chevron-down', isOpening);
        }

        if (isOpening) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    }

    // Event delegation for accordion toggling on click
    document.addEventListener('click', function (event) {
        const accordionHeader = event.target.closest('.accordion-header');
        if (accordionHeader) {
            toggleAccordion(accordionHeader);
        }
    });

    // Keyboard accessibility for accordion headers (toggle on Enter or Space)
    document.addEventListener('keydown', function (event) {
        if (event.target.classList.contains('accordion-header')) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleAccordion(event.target);
            }
        }
    });

    // Auto-open all accordions with a delay
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header, index) => {
        setTimeout(() => {
            if (!header.classList.contains('active')) {
                toggleAccordion(header);
            }
        }, 2000 * (index + 1)); // 2-second gap between each
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.scrollY > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        // Scroll to top on button click
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

     // Global Ripple Effect with Mouse Coordinates
    document.addEventListener('click', function (e) {
        // Get mouse coordinates relative to the viewport
        const x = e.clientX;
        const y = e.clientY;

        // Move the ripple to the click position
        document.documentElement.style.setProperty('--mouse-x', x + 'px');
        document.documentElement.style.setProperty('--mouse-y', y + 'px');

        // Add and remove the class to trigger the animation
        document.body.classList.add('ripple-active');
        setTimeout(() => {
            document.body.classList.remove('ripple-active');
        }, 400); // Duration should match transition in CSS
    });
});
