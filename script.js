const button = document.querySelector("button");
const hamburger = document.querySelector(".hamburger-open");

button.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-clicked-open");
});
