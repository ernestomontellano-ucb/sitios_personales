document.addEventListener("DOMContentLoaded", () => {
    const fontAwesome = document.createElement("script");
    fontAwesome.src = "https://kit.fontawesome.com/11be144c2e.js"; 
    fontAwesome.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesome);

    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach((carousel) => {
        const track = carousel.querySelector(".carousel");
        const slides = Array.from(track.children);
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        let index = 0;

        const updateCarousel = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${index * slideWidth}px)`;
        };

        nextButton.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        window.addEventListener("resize", updateCarousel);
        
        updateCarousel();
    });
});
