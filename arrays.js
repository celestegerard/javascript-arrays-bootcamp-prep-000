var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(theArray, element) {
  var array = ["apples", "oranges"];
  myArray = [...myArray, "element"];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(theArray, element) {
  var array = ["apples", "oranges"];
  myArray.unshift("element");
  return myArray;
}
