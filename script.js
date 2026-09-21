/* =========================================================
   SAKIB PERSONAL WEBSITE
   JavaScript
   ========================================================= */

/* ---------- Mobile navigation ---------- */

document.addEventListener("click", function (event) {

    const menuButton = event.target.closest(".menu-button");

    if (menuButton) {
        event.preventDefault();

        const navbar = menuButton.closest(".navbar");
        const navLinks = navbar ? navbar.querySelector(".nav-links") : null;

        if (navLinks) {
            const isOpen = navLinks.classList.toggle("show");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        }

        return;
    }

    const navItem = event.target.closest(".nav-links a");

    if (navItem) {
        const navbar = navItem.closest(".navbar");
        const navLinks = navbar ? navbar.querySelector(".nav-links") : null;
        const button = navbar ? navbar.querySelector(".menu-button") : null;

        if (navLinks) navLinks.classList.remove("show");
        if (button) {
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open navigation");
        }
    }
});


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
