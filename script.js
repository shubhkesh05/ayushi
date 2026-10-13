/* ================================================= */
/* BIRTHDAY DATE */
/* ================================================= */

/*
    CHANGE THIS DATE

    Example:
    October 15, 2026

    Format:
    YYYY-MM-DDTHH:MM:SS

    For midnight:
    2026-10-15T00:00:00
*/

const birthdayDate =
    new Date("2026-10-15T00:00:00").getTime();


/* ================================================= */
/* COUNTDOWN */
/* ================================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ================================================= */
/* BACKGROUND MUSIC */
/* ================================================= */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");


let musicPlaying = false;


musicBtn.addEventListener("click", async () => {

    try {

        if (!musicPlaying) {

            await music.play();

            musicPlaying = true;

            musicBtn.innerHTML =
                "⏸️ Pause Music";

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.innerHTML =
                "🎵 Play Music";
        }

    } catch (error) {

        alert(
            "Please check whether birthday-song.mp3 exists inside the music folder."
        );

    }

});


/* ================================================= */
/* LETTER MODAL */
/* ================================================= */

const letterModal =
    document.getElementById("letterModal");

const openLetter =
    document.getElementById("openLetter");

const closeLetter =
    document.getElementById("closeLetter");


openLetter.addEventListener("click", () => {

    letterModal.classList.add("show");

});


closeLetter.addEventListener("click", () => {

    letterModal.classList.remove("show");

});


letterModal.addEventListener("click", (event) => {

    if (event.target === letterModal) {

        letterModal.classList.remove("show");

    }

});


/* ================================================= */
/* SURPRISE BUTTON */
/* ================================================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const secretMessage =
    document.getElementById("secretMessage");


surpriseBtn.addEventListener("click", () => {

    secretMessage.classList.add("show");

    surpriseBtn.innerHTML =
        "✨ Surprise Opened!";

    launchConfetti();

    createHearts();

});


/* ================================================= */
/* PHOTO LIGHTBOX */
/* ================================================= */

const galleryImages =
    document.querySelectorAll(".gallery-image");

const photoLightbox =
    document.getElementById("photoLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src =
            image.src;

        photoLightbox.classList.add("show");

    });

});


closeLightbox.addEventListener("click", () => {

    photoLightbox.classList.remove("show");

});


photoLightbox.addEventListener("click", (event) => {

    if (event.target === photoLightbox) {

        photoLightbox.classList.remove("show");

    }

});


/* ================================================= */
/* CLOSE LIGHTBOX WITH ESC */
/* ================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        photoLightbox.classList.remove("show");

        letterModal.classList.remove("show");

        cinematicScreen.classList.remove("show");

    }

});


/* ================================================= */
/* CONFETTI */
/* ================================================= */

function launchConfetti() {

    const confettiCount = 150;


    for (let i = 0; i < confettiCount; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add("confetti");


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.width =
            Math.random() * 8 + 5 + "px";


        confetti.style.height =
            Math.random() * 12 + 8 + "px";


        confetti.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        confetti.style.animationDelay =
            Math.random() * 1 + "s";


        confetti.style.background =
            getRandomColor();


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}


/* ================================================= */
/* RANDOM COLORS */
/* ================================================= */

function getRandomColor() {

    const colors = [
        "#f04491",
        "#7950c7",
        "#ffb6d5",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#ffffff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


/* ================================================= */
/* FLOATING HEARTS */
/* ================================================= */

function createHearts() {

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "✨",
        "🌸"
    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDuration =
            Math.random() * 4 + 4 + "s";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        heart.style.fontSize =
            Math.random() * 20 + 20 + "px";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

}


/* ================================================= */
/* CINEMATIC EXPERIENCE */
/* ================================================= */

const cinematicBtn =
    document.getElementById("cinematicBtn");

const cinematicScreen =
    document.getElementById("cinematicScreen");

const countdownNumber =
    document.getElementById("countdownNumber");

const cinematicMessage =
    document.getElementById("cinematicMessage");

const cinematicName =
    document.getElementById("cinematicName");

const cinematicFinal =
    document.getElementById("cinematicFinal");

const closeCinematic =
    document.getElementById("closeCinematic");


/* ================================================= */
/* START CINEMATIC */
/* ================================================= */

cinematicBtn.addEventListener(
    "click",
    startCinematicExperience
);


function startCinematicExperience() {

    cinematicScreen.classList.add("show");


    countdownNumber.style.display =
        "block";

    cinematicMessage.innerHTML =
        "";

    cinematicName.innerHTML =
        "";

    cinematicFinal.style.display =
        "none";


    let number = 3;


    countdownNumber.innerText =
        number;


    const countdown =
        setInterval(() => {

            number--;


            if (number > 0) {

                countdownNumber.innerText =
                    number;

                restartAnimation(
                    countdownNumber,
                    "cinematicZoom"
                );

            } else {

                clearInterval(countdown);

                countdownNumber.style.display =
                    "none";

                showCinematicMessage();

            }

        }, 1000);

}


/* ================================================= */
/* RESTART CSS ANIMATION */
/* ================================================= */

function restartAnimation(
    element,
    animationName
) {

    element.style.animation = "none";

    element.offsetHeight;

    element.style.animation =
        `${animationName} 1s ease`;

}


/* ================================================= */
/* TYPEWRITER MESSAGE */
/* ================================================= */

function showCinematicMessage() {

    const message =
        "Today isn't just about getting older...";

    typeMessage(
        cinematicMessage,
        message,
        60,
        () => {

            setTimeout(() => {

                const secondMessage =
                    "It's about celebrating the beautiful person you are. ✨";

                typeMessage(
                    cinematicMessage,
                    secondMessage,
                    50,
                    () => {

                        setTimeout(
                            showBirthdayName,
                            1000
                        );

                    }
                );

            }, 1200);

        }
    );

}


/* ================================================= */
/* TYPEWRITER FUNCTION */
/* ================================================= */

function typeMessage(
    element,
    message,
    speed,
    callback
) {

    element.innerHTML = "";

    let index = 0;


    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if (callback) {
                callback();
            }

        }

    }


    type();

}


/* ================================================= */
/* FINAL BIRTHDAY MESSAGE */
/* ================================================= */

function showBirthdayName() {

    cinematicName.innerHTML =
        "Ayushi 💖";


    setTimeout(() => {

        cinematicFinal.style.display =
            "block";


        launchConfetti();

        createHearts();


        /* More celebration */

        setTimeout(() => {

            launchConfetti();

            createHearts();

        }, 1500);


    }, 1500);

}


/* ================================================= */
/* CLOSE CINEMATIC */
/* ================================================= */

closeCinematic.addEventListener(
    "click",
    () => {

        cinematicScreen.classList.remove(
            "show"
        );

    }
);


/* ================================================= */
/* AUTO CREATE SMALL FLOATING EFFECTS */
/* ================================================= */

setInterval(() => {

    const heart =
        document.createElement("div");


    heart.classList.add("heart");

    heart.innerText =
        Math.random() > 0.5
            ? "♡"
            : "✨";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 15 + 12 + "px";


    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 11000);

}, 1800);


/* ================================================= */
/* CONSOLE MESSAGE */
/* ================================================= */

console.log(
    "🎂 Birthday Website Loaded Successfully! 💖"
);

console.log(
    "✨ Made with HTML + CSS + JavaScript"
);