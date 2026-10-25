// =================================
// PÁGINAS WEB LOJA
// JAVASCRIPT PREMIUM
// =================================


// HEADER CAMBIO AL HACER SCROLL

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,8,22,.95)";

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.35)";

    } else {

        header.style.background =
            "rgba(5,8,22,.75)";

        header.style.boxShadow =
            "none";

    }


});






// ANIMACIONES AL SCROLL


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {


            entry.target.classList.add("show");


        }


    });


}, {

    threshold: .15

});



const animatedElements =
    document.querySelectorAll(
        ".service-box,.glass,.section-title,.about,.contact"
    );



animatedElements.forEach(el => {


    el.classList.add("hidden");


    observer.observe(el);


});








// MENU MOVIL


const menuButton =
    document.querySelector(".mobile-button");


const nav =
    document.querySelector("nav");



if (menuButton) {


    menuButton.addEventListener("click", () => {


        nav.classList.toggle("active");


    });


}






// EFECTO PARALLAX TARJETA HERO


const heroCard =
    document.querySelector(".glass");



document.addEventListener("mousemove", (e) => {


    if (!heroCard) return;



    let x =
        (e.clientX / window.innerWidth - .5) * 15;


    let y =
        (e.clientY / window.innerHeight - .5) * 15;



    heroCard.style.transform =
        `
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});






// VOLVER NORMAL CUANDO SALE DEL MOUSE


document.addEventListener("mouseleave", () => {


    if (heroCard) {

        heroCard.style.transform =
            "rotateY(0deg) rotateX(0deg)";


    }


});







// BOTONES WHATSAPP CON MENSAJE


const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );



whatsappLinks.forEach(link => {


    link.addEventListener("click", () => {


        console.log(
            "Usuario interesado en Páginas Web Loja"
        );


    });


});
// =========================
// PÁGINAS WEB LOJA
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // HEADER
    // =========================

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    // =========================
    // MENU MOVIL
    // =========================

    const menuButton = document.querySelector(".mobile-menu");

    const nav = document.querySelector("nav");

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }


    // =========================
    // REVEAL
    // =========================

    const reveals = document.querySelectorAll(

        ".service-card,.benefit-card,.project-card,.testimonial-card,.process-item"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    reveals.forEach(card => {

        observer.observe(card);

    });





    // =========================
    // FAQ
    // =========================

    const faqButtons = document.querySelectorAll(".faq-item button");

    faqButtons.forEach(button => {

        button.addEventListener("click", () => {

            const faq = button.parentElement;

            faq.classList.toggle("open");

        });

    });





    // =========================
    // CONTADORES
    // =========================

    const counters = document.querySelectorAll(".numbers strong");

    counters.forEach(counter => {

        let target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let value = 0;

        let speed = Math.ceil(target / 80);

        const update = () => {

            value += speed;

            if (value > target) {

                value = target;

            }

            counter.innerText = value + "+";

            if (value < target) {

                requestAnimationFrame(update);

            }

        }

        update();

    });





    // =========================
    // FORMULARIO WHATSAPP
    // =========================

    const form = document.getElementById("whatsappForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const nombre = document.getElementById("name").value;

            const negocio = document.getElementById("business").value;

            const servicio = document.getElementById("service").value;

            const mensaje = document.getElementById("message").value;

            const texto =

                `Hola.

Mi nombre es ${nombre}

Negocio: ${negocio}

Servicio: ${servicio}

Mensaje:

${mensaje}`;

            window.open(

                "https://wa.me/593960934663?text=" + encodeURIComponent(texto),

                "_blank"

            );

        });

    }





    // =========================
    // BOTON VOLVER ARRIBA
    // =========================

    const topButton = document.createElement("div");

    topButton.className = "top-button";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("visible");

        } else {

            topButton.classList.remove("visible");

        }

    });

});
/*=========================
LOADER
=========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});



/*=========================
SCROLL BAR
=========================*/

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const total = document.documentElement.scrollHeight - window.innerHeight;

    const current = (window.scrollY / total) * 100;

    progress.style.width = current + "%";

});



/*=========================
CURSOR
=========================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a,button").forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

    });

    el.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

    });

});
/*==================================
3D TILT
==================================*/

document.querySelectorAll(".service-card,.project-card,.benefit-card")

    .forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;

            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / 18);

            const rotateY = ((centerX - x) / 18);

            card.style.transform =

                `perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =

                "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        });

    });





/*==================================
RIPPLE
==================================*/

document.querySelectorAll(".btn,button")

    .forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const size = Math.max(

                this.clientWidth,

                this.clientHeight

            );

            ripple.style.width = size + "px";

            ripple.style.height = size + "px";

            ripple.className = "ripple";

            ripple.style.left =

                e.offsetX - size / 2 + "px";

            ripple.style.top =

                e.offsetY - size / 2 + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });





/*==================================
MAGNET EFFECT
==================================*/

document.querySelectorAll(".btn-primary")

    .forEach(btn => {

        btn.addEventListener("mousemove", (e) => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / 9;

            const moveY = (y - rect.height / 2) / 9;

            btn.style.transform =

                `translate(${moveX}px,${moveY}px)`;

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translate(0,0)";

        });

    });





/*==================================
PARALLAX HERO
==================================*/

const hero = document.querySelector(".hero-preview");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    hero.style.transform =

        `translate(${x}px,${y}px)`;

});

document.querySelectorAll(".faq-item button").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.closest(".faq-item");

        item.classList.toggle("active");

    });

});