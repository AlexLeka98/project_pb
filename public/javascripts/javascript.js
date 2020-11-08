const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        burger.classList.toggle('toggle');
    });


}

navSlide();

// var e = document.getElementById("vid");
// e.style.opacity = 0;

// var vid = document.getElementById("vid");
// vid.oncanplaythrough = function () {
//     setTimeout(function () {
//         var e = document.getElementById('vid');
//         fade(e);
//     }, 1000);
// };

// function fade(element) {
//     var op = 0;
//     var timer = setInterval(function () {
//         if (op >= 1) clearInterval(timer);
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1 || 0.1;
//     }, 50);
// };