document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function() {
    $('#hero-carousel').carousel({
        interval: 5000 // 5 seconds
    });

    $('#mobile-menu-btn').on('click', function() {
        $('#nav-links').slideToggle();
    });
});
