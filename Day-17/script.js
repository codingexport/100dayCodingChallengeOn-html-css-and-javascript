// JavaScript for dynamic scroll width calculation and effect
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator .progress');
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / maxScrollHeight) * 100;

    scrollIndicator.style.width = scrollPercentage + '%';

    // Add active class to increase glow effect while scrolling
    scrollIndicator.classList.add('active');

    // Remove the active class after a short delay
    setTimeout(() => {
        scrollIndicator.classList.remove('active');
    }, 250);
});
