    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; // Adjust the scroll speed by changing the multiplier
});
