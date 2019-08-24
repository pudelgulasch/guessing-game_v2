import { numbers, h2, guessesleft, popup, random } from "./globals.js";

window.onload;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", numberEqual);
}

let clicks = 0; // count can not be imported, nicht im Gültigkeitsbereich

function numberEqual(e) {
  if (clicks < 2 && random != e.target.innerText) {
    clicks++;
    guessesleft.innerHTML = 3 - clicks;
    e.preventDefault();
    if (clicks == 2 && random != e.target.innerText) {
      h2.innerHTML = "One more try!";
    }
  } else if (random == e.target.innerText) {
    h2.innerText = "...";
    popup.style.display = "block";
    popup.innerHTML = "You won! One more time?" + popup.innerHTML;
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].removeEventListener("click", numberEqual);
      numbers[i].removeAttribute("href");
    }
    e.preventDefault();
  } else if (clicks <= 3 && random != e.target.innerText) {
    popup.style.display = "block";
    popup.innerHTML = "You lost. You should try again!" + popup.innerHTML;
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].removeEventListener("click", numberEqual);
      numbers[i].removeAttribute("href");
    }
    e.preventDefault();
  }

  console.log(e.target.innerText);
  console.log(random);
  console.log(clicks);
}

popup.addEventListener("click", e => {
  if (e.target.id == "no") {
    window.close();
  } else if (e.target.id == "yes") {
    document.location.reload(true);
  }
});
