"use strict";
const guessing = document.querySelector(".guessing");
const b = document.querySelector("body");
console.log(b);

const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const correct = document.querySelector(".correct");
const inputnum = document.querySelector(".inputnum");
const check = document.getElementById("check");
const again = document.getElementById("again");
const scoreSpan1 = document.getElementById("ss");
const scoreSpan2 = document.getElementById("hs");

console.log(check, again);

console.log(guessing.textContent);
let rand = parseInt(Math.random() * 20) + 1;

check.addEventListener("click", function checking() {
  console.log("kittu");

  console.log(rand);
  const value = inputnum.value;
  console.log(value);
  if (rand == value) {
    console.log("Winner");
    guessing.innerHTML = "Winner";
    correct.innerHTML = rand;
    b.style.background = "green";
  } else {
    rand < value
      ? (guessing.innerHTML = "TooHigh")
      : (guessing.innerHTML = "TooLow");
    scoreSpan1.innerHTML = scoreSpan1.textContent - 1;
  }

  if (scoreSpan1.textContent > scoreSpan2.textContent) {
    scoreSpan2.textContent = scoreSpan1.textContent;
  }
});

again.addEventListener("click", () => {
  rand = parseInt(Math.random() * 20) + 1;
  b.style.background = "black";
  scoreSpan1.innerHTML = "20";
  guessing.innerHTML = "Start Guessing";
  correct.innerHTML = "?";
  inputnum.value = null;
});
