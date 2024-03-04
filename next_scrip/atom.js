let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset:true
});

sr.reveal('.logo',{dlay:200, origin:'left'});
sr.reveal('.navbar',{dlay:400, origin:'top'});
sr.reveal('.menu-btn',{dlay:520, origin:'right'});
sr.reveal('.home-text span',{dlay:600, origin:'right'});
sr.reveal('.home-text h1',{dlay:680, origin:'left'});
sr.reveal('.home-text p',{dlay:750, origin:'right'});
sr.reveal('.main-btn',{dlay:860, origin:'left'});
sr.reveal('.share',{dlay:950, origin:'bottom'});
sr.reveal('.home-imge',{dlay:1000, origin:'right'});


 


