// HEADER MOVIMIENTO
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    setTimeout(() => {
        header.classList.add("show");
    },200);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
        header.classList.add("scrolled");
        } else {
        header.classList.remove("scrolled");
        }
    });
});


// AUDIOS CARDS
let currentAudio = null;
function playSound(character) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`./img/naruto.m4a`);
    currentAudio.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
    });
}
