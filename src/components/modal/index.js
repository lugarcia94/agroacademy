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


$('.mobile__only img').on('click', function () {
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

$('.sub_title').on('click', function () {
    $(this).parent().toggleClass('on__menu-mobile')
})


$('ul.nav__pages-menu li').on('click', function () {
    $('ul.nav__pages-menu li').removeClass('active__tab')
    $(this).addClass('active__tab')
    var className = $(this).attr('class').split(" ");
    $('div.sobre').removeClass('active__tab')
    $('div.lideres').removeClass('active__tab')
    $('div.nossos').removeClass('active__tab')
    $('div.contato').removeClass('active__tab')
    $('div.sobre').hide()
    $('div.lideres').hide()
    $('div.nossos').hide()
    $('div.contato').hide()
    $('body').find('div.' + className[0]).addClass('active__tab')

    var nameItem = $(this).html()

    $('.topo__page h2').html(nameItem)
})

$('.menu__content label').click(function (event) {
    $('body').addClass('on__block-menu')
})

$('.close__menu-horizontal').click(function (event) {
    $('body').removeClass('on__block-menu')
})

$('#link_popup').on('click', function () {
    $('body').addClass('on__pop-links')
})

$('.action__popup-close').on('click', function () {
    $('body').removeClass('on__pop-links')
})

$('#link_popup-m').on('click', function () {
    $('body').addClass('on__pop-links')
})

