document.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let currentIndex = 0;
    let images = Array.from(document.querySelectorAll(".gallery img"));

    // Ensure modal is hidden when page loads or refreshes
    modal.style.display = "none";

    // Open modal when image is clicked
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalImg.style.opacity = "1";
            currentIndex = index;
        });
    });

    // Close modal when the close button is clicked
    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal if the escape key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // Function to change slides in the modal
    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        modalImg.style.opacity = "0";
        setTimeout(() => {
            modalImg.src = images[currentIndex].src;
            modalImg.style.opacity = "1";
        }, 200);
    }

    // Attach changeSlide to prev and next buttons
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
});
