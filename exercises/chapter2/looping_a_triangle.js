/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

// --- MY WAY --- //
let str = "";
for (let i = 0; i < 7; i++) {
  str += "#";
  console.log(str);
}

// --- SOLUTION --- //
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
