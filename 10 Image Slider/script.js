const slides = document.querySelector(".slides");

const images = document.querySelectorAll(".slides img");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let counter = 0;

const size = images[0].clientWidth;

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  counter++;
  slides.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slides.style.transform = `translateX(${-size * counter}px)`;
});
