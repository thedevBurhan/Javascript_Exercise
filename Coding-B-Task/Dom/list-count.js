const LIST = [
  "BMW",
  "Audi",
  "Bentley",
  "Chevrolet",
  "Ferrari",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Lamborghini",
  " Land Rover",
];
let button = document.querySelector("button");
button.addEventListener("click", clickMeToKnowCount);

function clickMeToKnowCount() {
  document.getElementById("count").innerHTML = LIST.length;
  document.getElementById("count").style.color = "blue";
}
localStorage.setItem(
  (document.getElementById("count").innerHTML = LIST.length)
);
