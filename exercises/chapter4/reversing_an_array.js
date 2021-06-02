/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.
*/

// --- MY WAY --- //
function reverseArray(array) {
  let res = [];
  for (elem of array) res.unshift(elem);
  return res;
}

function reverseArrayInPlace(array) {
  const aux = [...array];
  for (let i = 0; i < array.length; i++) array[i] = aux[aux.length - i - 1];
}

// --- SOLUTION --- //
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
// (OBS) // I think at this point the book doesn't show the method "unshift" and the syntax "...array" and that's why the solution is a bit more complex.
