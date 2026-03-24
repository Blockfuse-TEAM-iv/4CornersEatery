document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Navigation active state management
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-amber-500', 'bg-amber-500/20');
            link.classList.add('text-gray-300');

            const linkId = link.getAttribute('id').replace('nav-', '');
            if (linkId === current) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-amber-500', 'bg-amber-500/20');
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on any navigation link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
});
