var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = ["apples", "oranges"];
  myArray = [...myArray, "element"];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = ["apples", "oranges"];
  myArray.unshift("element");
  return myArray;
}
