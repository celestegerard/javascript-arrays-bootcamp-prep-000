var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = ["foo", ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, "") {
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
  var brothers = [0, 1, 2, 3, 4];
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
  
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
