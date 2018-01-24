var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function AddElementToBeginningOfArray() {
  var myArray = ["apples", "oranges"];
  ["bananas", ...myArray];
}

function destructivelyAddElementToBeginningOfArray() {
  var myArray = ["apples", "oranges"];
  myArray.unshift("bananas");
}
