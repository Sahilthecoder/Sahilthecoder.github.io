document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        });
    }

    // WhatsApp Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Use the standard wa.me link format with encoded text
            const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Open WhatsApp chat in a new tab
            // Using window.open with wa.me is the recommended way to pre-fill messages
            window.open(`https://wa.me/919875771550?text=${encodedMessage}`, '_blank');

            // Note: The hidden input #whatsapp-message and form action/method are not needed
            // when using window.open like this. They can be removed from the HTML.
        });
    }

    // Accordion toggle function (handles smooth animation and icon change)
    function toggleAccordion(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        const isOpening = !header.classList.contains('active'); // Check if it will be active

        header.classList.toggle('active', isOpening);
        icon.classList.toggle('fa-chevron-right', !isOpening);
        icon.classList.toggle('fa-chevron-down', isOpening);

        // Use maxHeight for smooth transition
        if (isOpening) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null; // Reset maxHeight to allow closing
        }
    }

    // Event delegation for manual accordion toggling
    // Listen for clicks on the document and check if the target is an accordion header
    document.addEventListener('click', function (event) {
        const accordionHeader = event.target.closest('.accordion-header');

        if (accordionHeader) {
            toggleAccordion(accordionHeader);
        }
    });

    // Auto-open specific accordions on page load
    const expHeader = document.getElementById('exp-header');
    const skillsHeader = document.getElementById('skills-header');

    // Auto-open Work Experience after a delay
    if (expHeader) {
        setTimeout(() => {
            // Only auto-open if it's not already active (e.g., from a previous session state)
            if (!expHeader.classList.contains('active')) {
                 toggleAccordion(expHeader);
            }
        }, 2000); // 2-second delay
    }

    // Auto-open Core Skills after another delay
    if (skillsHeader) {
         setTimeout(() => {
            // Only auto-open if it's not already active
            if (!skillsHeader.classList.contains('active')) {
                toggleAccordion(skillsHeader);
            }
        }, 5000); // 5-second delay (adjust as needed)
    }


    // Scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show/hide button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to top on button click
    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
});
