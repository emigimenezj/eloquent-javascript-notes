/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8
and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// --- MY WAY --- //
function chessboard(height, width) {
  let res = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (y%2 == 0) {
        if (x%2 == 0) {
          res += " ";
        } else {
          res += "#";
        }
      } else {
        if (x%2 == 0) {
          res += "#";
        } else {
          res += " ";
        }
      }
    }
    res += "\n";
  }
  console.log(res);
}
chessboard(8, 8);

// --- SOLUTION --- //
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // The trick is take (x + y) module.
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
