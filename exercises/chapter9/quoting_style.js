/*
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue.
Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/

// --- MY WAY (WRONG) --- //
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/'([^]*?[,.]+)'/g, "\"$1\""));
// → "I'm the cook," he said, "it's my job."

// It doens't work with this examples:
//   → 'I'm the cook,' he said, 'it's my job!'
//   → 'I'm the cook,' he's saying, 'it's my job.'

// --- THE SOLUTION --- //
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
