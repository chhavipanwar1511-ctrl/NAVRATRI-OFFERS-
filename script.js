/* =========================
   CHHAVI MEHNDI ART
   NAVRATRI '26
========================= */


/* =========================
   SCROLL REVEAL
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


/* =========================
   BUTTON TAP EFFECT
========================= */

const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});


/* =========================
   NAVRATRI SPARKLES
========================= */

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.innerHTML = Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = "-20px";

    sparkle.style.fontSize =
        Math.random() * 9 + 8 + "px";

    sparkle.style.color = "#e8a84b";
    sparkle.style.opacity = "0.6";

    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "9999";

    document.body.appendChild(sparkle);


    const duration =
        Math.random() * 3000 + 3000;


    sparkle.animate(

        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform: "translateY(50vh) rotate(180deg)",
                opacity: 0.7
            },

            {
                transform: "translateY(110vh) rotate(360deg)",
                opacity: 0
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    );


    setTimeout(() => {
        sparkle.remove();
    }, duration);

}


/* Create sparkles occasionally */

setInterval(() => {

    if (Math.random() > 0.45) {
        createSparkle();
    }

}, 1400);


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.querySelector("footer small");

if (yearElement) {

    yearElement.textContent =
        "© " +
        new Date().getFullYear() +
        " Chhavi Mehndi Art";

}


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
