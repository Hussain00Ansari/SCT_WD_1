// Back to top button visibility
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
    }
});


// Mobile menu toggle
const menuButton = document.querySelector('.md\\:hidden');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});
