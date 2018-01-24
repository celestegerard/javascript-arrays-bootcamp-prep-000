var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, element) {
  var array = ["apples", "oranges"];
  myArray = [...myArray, "element"];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  var array = ["apples", "oranges"];
  myArray.unshift("element");
  return myArray;
}
