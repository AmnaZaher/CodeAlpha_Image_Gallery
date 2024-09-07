// script.js

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let currentIndex = 0;
let images = Array.from(document.querySelectorAll(".gallery img"));

// Open modal
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalImg.style.opacity = "1"; // Ensure image is visible immediately
        currentIndex = index;
    });
});

// Close modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

// Change slide
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    modalImg.style.opacity = "0"; // Fade out before changing image
    setTimeout(() => {
        modalImg.src = images[currentIndex].src;
        modalImg.style.opacity = "1"; // Fade in after changing image
    }, 200); // timeout to match the fade-out duration
}
