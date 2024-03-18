const images = [
    { src: "/FOTOS/UTKU_06.jpg", caption: "Photo 1", metadata: "Photographer: Seval Kilic | Camera Settings: ..."},
    { src: "/FOTOS/SEVAL_07.jpg", caption: "Photo 2", metadata: "Photographer: Utku Bakay | Camera Settings: ..."},
    // Add more images as needed
];

window.onload = function() {
    const galleryContainer = document.getElementById("gallery-container");

    images.forEach((image, index) => {
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo";
        photoDiv.onclick = function() {
            openModal(image.src, image.caption, image.metadata);
            currentSlide(index + 1);
        };

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.caption;

        photoDiv.appendChild(img);
        galleryContainer.appendChild(photoDiv);
    });
};

function openModal(imageSrc, caption, metadata) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = "<p>" + caption + "</p><p>" + metadata + "</p>";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
