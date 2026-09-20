/* =========================================================
   SAKIB PERSONAL WEBSITE
   JavaScript
   ========================================================= */

/* ---------- Mobile navigation ---------- */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* ---------- Reusable typing effect ---------- */

function startTyping(element, words, speed = 85, pause = 1300) {

    if (!element) {
        return;
    }

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeWriter() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            element.textContent =
                currentWord.substring(0, letterIndex + 1);

            letterIndex++;

            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeWriter, pause);

                return;
            }

        } else {

            element.textContent =
                currentWord.substring(0, letterIndex - 1);

            letterIndex--;

            if (letterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex === words.length) {
                    wordIndex = 0;
                }
            }
        }

        const currentSpeed = deleting ? 45 : speed;

        setTimeout(typeWriter, currentSpeed);
    }

    typeWriter();
}


/* ---------- Home typing ---------- */

startTyping(
    document.querySelector("#typing-text"),
    [
        "Web Developer",
        "Frontend Developer",
        "Python Programmer",
        "Creative Problem Solver"
    ]
);

startTyping(
    document.querySelector("#home-code-text"),
    [
        "clean code",
        "modern UI",
        "responsive websites",
        "creative solutions"
    ],
    70,
    1100
);

startTyping(
    document.querySelector("#home-typing-extra"),
    [
        "clean interfaces",
        "responsive websites",
        "useful projects",
        "modern experiences"
    ],
    70,
    1200
);


/* ---------- About typing ---------- */

startTyping(
    document.querySelector("#about-typing"),
    [
        "learn",
        "build",
        "experiment",
        "improve"
    ],
    90,
    1000
);


/* ---------- Skills typing ---------- */

startTyping(
    document.querySelector("#skills-typing"),
    [
        "practice",
        "build",
        "test",
        "improve"
    ],
    90,
    1050
);


/* ---------- Videos typing ---------- */

startTyping(
    document.querySelector("#videos-typing"),
    [
        "landscape 16:9",
        "vertical 9:16",
        "short-form content",
        "project showcases"
    ],
    70,
    1100
);


/* ---------- Contact typing ---------- */

startTyping(
    document.querySelector("#contact-typing"),
    [
        "questions",
        "projects",
        "collaboration",
        "creative ideas"
    ],
    85,
    1100
);


/* ---------- Premium reveal-on-scroll ---------- */

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.08
        }
    );

    revealItems.forEach(function (item) {

        revealObserver.observe(item);

    });
}


/* ---------- Close mobile menu after navigation ---------- */

if (navLinks) {

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });
}
