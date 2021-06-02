/*
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

// --- MY WAY --- //
function min(a, b) {
  return a < b? a : b;
}

// --- SOLUTION --- //
function min(a, b) {
  if (a < b) return a;
  else return b;
}
