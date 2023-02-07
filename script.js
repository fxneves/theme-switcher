const button = document.querySelector(".switch");

button.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
});
