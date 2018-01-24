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

function destructivelyAddElementToEndOfArray(array, "element") {
  myArray.push("element");
}

function accessElementInArray() {
  var brothers = ["Jack", "David", "Christian", "Ben", "Sam"];
  return brothers[3];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return cookies;
}



