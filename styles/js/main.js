const product = document.querySelectorAll(".products");
const images = document.querySelectorAll(".image");
const img = document.querySelectorAll(".img");
const observer = new IntersectionObserver(
  (entris) => {
    // daire daire.eu.org
    entris.forEach((entry) => {
      entry.target.classList.toggle("onscreen", entry.isIntersecting);
    });
  },
  {
    root: document.getElementById("box"),
    rootMargin: "-150px",
  }
);

images.forEach((images) => {
  observer.observe(images);
});
img.forEach((img) => {
  observer.observe(img);
});
