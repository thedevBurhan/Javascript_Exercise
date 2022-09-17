let cars = [
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

function createList (array) {
  // Create the list element:
  let list = document.createElement("ul");

  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    let item = document.createElement("li");

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));
    //   appendChild()  adds a node to the end of the list of children of a specified parent node
    //   The createTextNode() method is used to create a TextNode which contains element node and a text node

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

// Add the contents of cars to #car:
document.getElementById("car").appendChild(createList(cars));
