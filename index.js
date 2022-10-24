const div = Array.from(document.getElementsByClassName("div"));
let h1 = document.getElementById("h1");

let random;
div.forEach((divs) => {
  divs.addEventListener("click", (e) => {
    divs.classList.add("change");
    random = divs.innerHTML = Math.floor(Math.random() * 10);
    if (random === 0) {
      h1.innerHTML = "You have lost the Game!";
      h1.classList.add("h1");
    }
  });
});
