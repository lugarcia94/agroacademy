import './style';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 700 } });

new ScrollMagic.Scene({ triggerElement: "#about" })
    .setClassToggle(".navigator li[data-id='about']", "active") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#full" })
    .setClassToggle(".navigator li[data-id='full']", "active") // add class toggle
    .addTo(controller);



new ScrollMagic.Scene({ triggerElement: "#student" })
    .setClassToggle(".navigator li[data-id='student']", "active") // add class toggle
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#teacher" })
    .setClassToggle(".navigator li[data-id='teacher']", "active") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#company" })
    .setClassToggle(".navigator li[data-id='company']", "active") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#footer" })
    .setClassToggle(".navigator li[data-id='footer']", "active") // add class toggle
    .addTo(controller);


AOS.init();


$('.mobile__only').on('click', function () {
    $('body').addClass('on__menu')
})
$('.close').on('click', function () {
    $('body').removeClass('on__menu')
})

$('#login').on('click', function () {
    $('body').addClass('on__login')
})

$('.login__popup-close').on('click', function () {
    $('body').removeClass('on__login')
})

$('#register').on('click', function () {
    $('body').addClass('on__register')
})

$('.register__popup-close').on('click', function () {
    $('body').removeClass('on__register')
})