var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = ["element", ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("element");
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [...array, "element"];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("element");
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
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
  }
  
  