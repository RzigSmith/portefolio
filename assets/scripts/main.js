const navbar = document.querySelector('.navar');
window.addEventListener('scroll', () => {
    if (window.scroll > 50) {
        navbar.style.background = 'var(--white)';
        navbar.style.boxshadow = 'var(--box-shadow)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxshadow = 'none';
    }
});