var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, element) {
  var myArray = ["apples", "oranges"];
  myArray = [...myArray, "bananas"];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  var myArray = ["apples", "oranges"];
  myArray.unshift("bananas");
  return myArray;
}
