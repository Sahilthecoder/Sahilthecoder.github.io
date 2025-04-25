document.addEventListener('DOMContentLoaded', function () {

    // Apply a beautiful animated gradient background to the container
    const container = document.querySelector('.container');
    if (container) {
        // Function to apply gradient background
        const applyGradient = () => {
            container.style.backgroundImage = 'none';
            container.style.background = 'linear-gradient(270deg, #4A90E2, #50E3C2, #9013FE, #D0021B)';
            container.style.backgroundSize = '800% 800%';

            // Add a CSS animation for smooth gradient shifting
            const style = document.createElement('style');
            style.textContent = `
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animated-gradient {
                    animation: gradientShift 15s ease infinite;
                }
            `;
            document.head.appendChild(style);

            container.classList.add('animated-gradient');
        };

        // Function to remove gradient background
        const removeGradient = () => {
            container.style.background = ''; // Remove inline background
            // Remove dynamically added style tag
            const styleTag = document.head.querySelector('style');
            if (styleTag) {
                document.head.removeChild(styleTag);
            }
            container.classList.remove('animated-gradient');
        };

        // Function to check if dark mode is active
        const isDarkMode = () => {
            return document.documentElement.getAttribute('data-theme') === 'dark';
        };

        // Apply or remove gradient based on initial theme
        if (!isDarkMode()) {
            applyGradient();
        }

        // Dark Mode Toggle
        const toggleBtn = document.getElementById('toggleBtn');
        if (toggleBtn) {
            // Initialize checkbox state based on current theme
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            toggleBtn.checked = currentTheme === 'dark';

            toggleBtn.addEventListener('change', function () {
                const newTheme = toggleBtn.checked ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);

                // Apply or remove gradient based on new theme
                if (!isDarkMode()) {
                    applyGradient();
                } else {
                    removeGradient();
                }
            });
        }
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

    const profileImage = document.querySelector('.profile-image');
    const images = [
        "https://res.cloudinary.com/dlbxotngq/image/upload/v1745297414/WhatsApp_Image_2025-04-22_at_10.19.49_8ecdd7f1_tvmopi.jpg",
        "https://res.cloudinary.com/dlbxotngq/image/upload/v1745295730/WhatsApp_Image_2025-04-22_at_02.36.52_bd29328a_gsrlh8.jpg"
    ];
    let currentIndex = 0;

    if (profileImage) {
        profileImage.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % images.length;
            profileImage.src = images[currentIndex];
        });
    }

});
