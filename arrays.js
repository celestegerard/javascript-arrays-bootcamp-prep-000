var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, element) {
  var myArray = ["apples", "oranges"];
  myArray = [...myArray, "bananas"];
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  var myArray = ["apples", "oranges"];
  myArray.unshift("bananas");
}
