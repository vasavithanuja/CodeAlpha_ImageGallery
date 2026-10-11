
function filterImages(category, event) {
    const items = document.querySelectorAll(".gallery-item");

    document.querySelectorAll(".filters button").forEach(function(button) {
        button.classList.remove("active");
    });

    if (event) {
        event.currentTarget.classList.add("active");
    }

    items.forEach(function(item) {
        item.style.setProperty(
            "display",
            category === "all" || item.dataset.category === category
                ? "block"
                : "none",
            "important"
        );
    });
}

// Open image in large view
let currentImageIndex = 0;

function openLightbox(image) {
    const images = Array.from(
        document.querySelectorAll(".gallery-item img")
    );

    currentImageIndex = images.indexOf(image);

    document.getElementById("lightbox-img").src = image.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction, event) {
    if (event) {
        event.stopPropagation();
    }

    const images = Array.from(
        document.querySelectorAll(".gallery-item img")
    );

    currentImageIndex =
        (currentImageIndex + direction + images.length) % images.length;

    document.getElementById("lightbox-img").src =
        images[currentImageIndex].src;
}

// Prevent clicks on the image from closing the lightbox
document.addEventListener("DOMContentLoaded", function() {
    const lightboxImage = document.getElementById("lightbox-img");

    if (lightboxImage) {
        lightboxImage.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
});