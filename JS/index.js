/* =========================================
   TYPEWRITER EFFECT
========================================= */

const typewriterElement = document.querySelector(".typewriter");

if (typewriterElement) {

    const texts = [
        "Senior Officer (IT) @ Uttara Bank PLC",
        "Researcher in AI & Software Engineering",
        "QA Engineer & Data Analyst",
        "Future PhD Researcher"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = texts[textIndex];

        if (!deleting) {

            typewriterElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        } else {

            typewriterElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex++;

                if (textIndex >= texts.length) {
                    textIndex = 0;
                }
            }
        }

        setTimeout(typeEffect, deleting ? 40 : 80);
    }

    typeEffect();
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .publication-card, .timeline-item, .skill-card, .project-card, .certificate, .stat-card"
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${currentSection}`
        ) {

            link.classList.add("active");
        }
    });
});


/* =========================================
   STATS COUNTER ANIMATION
========================================= */

const statNumbers = document.querySelectorAll(".stat-card h3");

function animateCounters() {

    statNumbers.forEach((counter) => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let count = 0;

        const speed = 25;

        const updateCounter = () => {

            if (count < number) {

                count++;

                counter.innerText = count + "+";

                setTimeout(updateCounter, speed);

            } else {

                counter.innerText = text;
            }
        };

        updateCounter();
    });
}

let statsAnimated = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight &&
        !statsAnimated
    ) {

        animateCounters();

        statsAnimated = true;
    }
});


/* =========================================
   HERO IMAGE PARALLAX
========================================= */

const heroImage = document.querySelector(".hero-left img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;
});


/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


/* =========================================
   SMOOTH BUTTON HOVER GLOW
========================================= */

const buttons = document.querySelectorAll(
    ".btn, .publication-link"
);

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 25px rgba(56,189,248,.35)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";
    });
});


/* =========================================
   PUBLICATION CARD EFFECT
========================================= */

const publicationCards =
    document.querySelectorAll(".publication-card");

publicationCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(56,189,248,.12),
            rgba(23,32,51,1) 60%)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#172033";
    });
});


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.zIndex = "99999";
progressBar.style.background =
    "linear-gradient(90deg,#38bdf8,#818cf8)";
progressBar.style.width = "0%";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";
});


/* =========================================
   HERO FADE IN
========================================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});


/* =========================================
   CONSOLE SIGNATURE
========================================= */

console.log(`
==========================================
Mehedi Hassan Portfolio
Researcher | QA Engineer | Data Analyst
Senior Officer (IT), Uttara Bank PLC
==========================================
`);
