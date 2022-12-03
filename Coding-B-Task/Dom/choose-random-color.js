var colors = [
  "red",
  "blue",
  "green",
  "teal",
  "rosybrown",
  "tan",
  "plum",
  "saddlebrown",
  "black",
  "gray",
];
var box = document.querySelectorAll(".box");
// The querySelectorAll() method returns all elements that matches a CSS selector(s)
var button = document.querySelector("button");
// querySelector() The Document method querySelector() returns the first Element
//  within the document that matches the specified selector,
// or group of selectors. If no matches are found, null is returned.
button.addEventListener("click", function () {
  for (i = 0; i < colors.length; i++) {
    box[i].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    box[i].style.width = "10rem";
    box[i].style.height = "5rem";
  }
});
