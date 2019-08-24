let numbers = document.querySelectorAll("div a");
let h2 = document.querySelector("h2");
let guessesleft = document.querySelector("#guesses-left");
let popup = document.querySelector(".popup");
let random = Math.floor(Math.random() * 10 + 1);

export { numbers, h2, guessesleft, popup, random };
