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

new ScrollMagic.Scene({ triggerElement: "#newsletter" })
    .setClassToggle(".navigator li[data-id='newsletter']", "active") // add class toggle
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


