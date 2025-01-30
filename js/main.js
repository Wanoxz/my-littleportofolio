let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll(".portofolio");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].classList.remove("active");
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

function showPreview(imgElement) {
  var preview = document.getElementById("preview");
  var previewImg = document.getElementById("preview-img");

  previewImg.src = imgElement.src;
  preview.style.display = "flex";
}

function closePreview() {
  var preview = document.getElementById("preview");
  preview.style.display = "none";
}
