var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  var myArray = ["apples", "oranges"];
  myArray = [...myArray, "bananas"];
}

function destructivelyAddElementToBeginningOfArray() {
  var myArray = ["apples", "oranges"];
  myArray.unshift("bananas");
}
