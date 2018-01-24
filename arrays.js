var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = ["apples", "oranges"];
  myArray = ["element", ...myArray];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = ["apples", "oranges"];
  myArray.unshift("element");
  return myArray;
}

function addElementToEndOfArray(array, element) {
  var myArray = ["apples", "oranges"];
  myArray = [...myArray, "element"];
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = ["apples", "bananas"];
  myArray.push("element");
}

function accessElementInArray() {
  var brothers = ["Jack", "David", "Christian", "Ben", "Sam"];
  return brothers[3];
}

