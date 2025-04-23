// Dark Mode Toggle
document.getElementById('toggleBtn').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

// WhatsApp Contact Form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    document.getElementById('whatsapp-message').value = whatsappMessage;
    window.location.href = `https://api.whatsapp.com/send?phone=+919875771550&text=${whatsappMessage}`;
});

// Accordion toggle function
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');
    const willBeActive = !header.classList.contains('active');

    header.classList.toggle('active', willBeActive);
    icon.classList.toggle('fa-chevron-right', !willBeActive);
    icon.classList.toggle('fa-chevron-down', willBeActive);

    content.style.maxHeight = willBeActive ? content.scrollHeight + 'px' : null;
}

// Smooth accordion auto-open
function openAccordionSmoothly(header) {
    const content = header.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';
    header.classList.add('active');
    header.querySelector('i').classList.remove('fa-chevron-right');
    header.querySelector('i').classList.add('fa-chevron-down');
}

// Auto-open Work Experience and Core Skills
const openAccordions = () => {
    const expHeader = document.getElementById('exp-header');
    const skillsHeader = document.getElementById('skills-header');

    setTimeout(() => {
        if (expHeader && !expHeader.classList.contains('active')) {
            toggleAccordion(expHeader);
        }
    }, 2000);

    setTimeout(() => {
        if (skillsHeader && !skillsHeader.classList.contains('active')) {
            toggleAccordion(skillsHeader);
        }
    }, 5000);
};
openAccordions();

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
