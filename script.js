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

    // Mobile Menu Toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.toggle('hidden');
            if (closeIcon) closeIcon.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking on any navigation link
    if (mobileNavLinks) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
                if (closeIcon) closeIcon.classList.add('hidden');
            });
        });
    }

   
});
  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");
  const text = document.getElementById("selectedText");
  const input = document.getElementById("serviceInput");
  const arrow = document.getElementById("arrow");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
  });

  document.querySelectorAll("#dropdownMenu div").forEach(item => {
    item.addEventListener("click", () => {
      text.textContent = item.textContent;
      text.classList.remove("text-gray-400");
      text.classList.add("text-white");
      input.value = item.dataset.value;
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    });
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      arrow.classList.remove("rotate-180");
    }
  });