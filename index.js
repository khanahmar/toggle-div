const div = Array.from(document.getElementsByClassName("div"));

div.forEach((divs) => {
  divs.addEventListener("click", (e) => {
    divs.classList.toggle("change");
  });
});
