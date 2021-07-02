/*
For each of the following items, write a regular expression to test whether any of
the given substrings occur in a string. The regular expression should match only strings
containing one of the substrings described.

Do not worry about word boundaries unless explicitly mentioned.
When your expression works, see whether you can make it any smaller.

1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
*/

//     /ca[rt]/   // THE SOLUTION
verify(/car|cat/, // MY WAY
       ["my car", "bad cats"],
       ["camper", "high art"]);

//     /pr?op/     // THE SOLUTION
verify(/pop|prop/, // MY WAY
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

//     /ferr(et|y|ari)/        // THE SOLUTION
verify(/ferret|ferry|ferrari/, // MY WAY
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// (OBS) When you have the same beginning for the words what you looking for you can reduce the regex working only with the last part of the search.

//     /ious\b/       // THE SOLUTION
verify(/\w*(ious)\b/, // MY WAY   (OBS) \w* was unnecesary
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/, // MY WAY AND THE SOLUTIONN
       ["bad punctuation :"],
       ["escape, the. period: "]);

verify(/\w{7}/, // MY WAY AND THE SOLUTION
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/\b[^\We]+\b/i, // THE SOLUTION
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
