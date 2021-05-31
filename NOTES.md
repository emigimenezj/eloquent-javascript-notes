------
# Chapter 1: Values, Types, and Operators ([link](https://eloquentjavascript.net/01_values.html))
- **Values**
- **Numbers**
> JavaScript uses a fixed number of 64 bits to store a single number value.
>  
> Fractional numbers are written by using a dot and you may also use scientific notation by adding an `e` for *exponent* followed by the exponent of the number.

> **→ Arithmetic**
  >> The `+` and `*` symbols are called *operators*. When operators appear together without parentheses, the order in which they are applied is determined by the *precedence* of the operators.

> **→ Special numbers**
  >> There are three special values in JavaScript that are considered numbers: `Infinity`, `-Infinity` and `NaN` ("Not a Number").
- **Strings**
> Strings are writteng by enclosing their contnent in quotes, you can use single quotes, double quotes or backticks.

> You can use a backslash `\` to escape a character in strings.
 
> The `+` operator glues two strings together.

> The way JavaScript modeled Strings as a series of bits based on the *Unicode* standard. But there's a complication: JavaScript's representation uses 16 bits per string element, but Unicode defines more characters than 2^16. So some characters, such as many emoji, take up two "character positions" in JavaScript strings.
- **Unary Operators**
- **Boolean Values**
> There is only one value in JavaScript that is not equal to itself, and that is `NaN`.

- **Empty Values**
> There are two special values, written `null` and `undefined`.

- **Automatic Type Conversion** ⭐
> When an operator is applied to the "wrong" type of value, JavaScript will quietly convert that value to the type it needs.
> 
> ```javascript
> console.log(8 * null)
> // → 0
> console.log("5" - 1)
> // → 4
> console.log("5" + 1)
> // → 51
> console.log("five" * 2)
> // → NaN
> console.log(false == 0)
> // → true
> ```
>
> When `null` or `undefined` occurs on either side of the `==` operator, it produces true only if both sides are one of `null` or `undefined`.
>
> ```javascript
> console.log(null == undefined);
> // → true
> console.log(null == 0);
> // → false
> ```

> **→ Short-circuiting of logical operators**
  >> The logical operators `&&` and `||` convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the *original* left-hand value or the right-hand value.
  >> ```javascript
  >> console.log(null || "user")
  >> // → user
  >> console.log("Agnes" || "user")
  >> // → Agnes
  >> ```
  >>
  >> The rules for converting strings and numbers to Boolean values state that `0`, `NaN`, and the empty string `""` count as `false`, while all the other values count as `true`.
------
# Chapter 2: Program Structure ([link](https://eloquentjavascript.net/02_program_structure.html))
- **Expressions and Statements**
- **Bindings**
> There are three ways to declare bindings: `let`, `var` and `const`.

> A single `let`statement may define multiple bindings.

> The words `var` is the way bindings were declared in pre-2015 JavaScript.

> The word `const` defines a constant binding, which points at the same value for as log as it lives.
- **Binding Names**
> There are words with a special meaning and they may not be used as binding names.
> 
> This is the full list of *keywords*:
> 
> break case catch class const continue debugger default
> delete do else enum export extends false finally for
> function if implements import interface in instanceof let
> new package private protected public return static super
> switch this throw true try typeof var void while with yield
- **The Environment**
- **Functions**
- **The console.log Function**
- **Return Values**
- **Control Flow**
> There are three functions called `Number`, `String` and `Boolean` that convert values to those types.
- **Conditional Execution**
> The `Number.isNaN` function returns `true` only if the argument is it given is `NaN`.
- **While and Do Loops**
- **Indenting Code**
- **For Loops**
- **Breaking Out of a Loop** ⭐
> There is a special statement called `break` that has the effect of immediately jumping out of the enclosing loop.
>
> There is another special statement called `continue` that when is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration.

> The `%` operator is an easy way to test whether a number is divisible by another number.
- **Updating Bindings Succinclty**
- **Dispatching on a Value with Switch** ⭐
> There is a construct called `switch` that...
- **Capitalization**
- **Comments**
------
# Chapter 3: Functions ([link](https://eloquentjavascript.net/03_functions.html))
- **Defining a function**
> ```javascript
> const square = function(x) {
>   return x * x;
> }
> console.log(square(12));
> // → 144
> ```

> Some functions don't produce a value, like the next one, whose only result is a *side effect*.
> ```javascript
> const makeNoise = function() {
>  console.log("Pling!");
> };
> makeNoise();
> // → Pling!
> ```

> A `return` keyword without an expression after it will cause the function to return `undefined`.
> 
> Functions that don't have a `return` statement at all, such as `makeNoise`, similarly return `undefined`.
- **Bindings and scopes**
- **Nested scope**
- **Functions as values**
- **Declaration notation**
> This is a function *declaration*. The statement defines the binding `square` and points it at the given function.
> ```javascript
> function square(x) {
>   return x * x;
> }
> ```
> Function declarations are not part of the regular top-to-bottom flow of control. The preceding code works, even though the function is defined *below* the code that uses it.
> ```javascript
> console.log("The future says:", future());
>
> function future() {
>   return "You'll never have flying cars";
> }
> ```
- **Arrow functions**
> There's a third notation for functions. Instead of the `function` keyword, it uses an arrow `=>`.
> ```javascript
> const sum = (x, y) => {return x + y;};
> ```
> When there is only one parameter name, you can omit the parentheses around the parameter list. Also if the body is a single expression, rather than a block in braces, that expression will be returned from the function.
> ```javascript
> // These two definitions of square do the same thing.
> const square1 = (x) => {return x * x;};
> const square2 = x => x * x;
> ```
> When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.
> ```javascript
> const hello = () => {console.log("Hello world!");};
> ```
- **The call stack**
- **Optional arguments** ⭐
> If the number of arguments you pass to a function is too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value `undefined`.

> If you write an `=` operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
> ```javascript
> function sum(x, y = 1) {
>   return x + y;
> }
> console.log(sum(10));
> // → 11
> console.log(sum(10, 5));
> // → 15
> ```
- **Closure** ⭐
> The "being able to reference a specific instance of a local binding in an enclosing scope" feature is called *closure*. A function that references bindings from local scopes around it is called *a* closure.
> ```javascript
> function multiplier(factor) {
>   return number => number * factor;
> }
> let twice = multiplier(2);
> console.log(twice(5));
> // → 10
> ```
- **Recursion**
> In typical JavaScript implementations, the recursion it's about three times slower than the looping version. You have to decide between human-friendliness and machine-friendliness.
- **Growing functions**
- **Functions and side effects**
------
# Chapter 4: Data Structures: Objects and Arrays ([link](https://eloquentjavascript.net/04_data.html))
- **The weresquirrel**
- **Data sets**
- **Properties**
> Almost all JavaScript values have properties. The exceptions are `null` and `undefined`. If you try to access a property on one of these nonvalues, you get an error.

> The two main ways to access properties in JavaScript are with a dot and with square brackets. Both `value.x` and `value[x]` access aa propert on `value`, but not necessarily the same property. The difference is in how `x` is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is *evaluated* to get the property name.
- **Methods**
> String methods:
> 
> **→ toUpperCase**
  >> When called, it will return a copy of the string in which all letters have been converted to uppercase.
>
> **→ toLowerCase**
  >> Going the other way.
>
> Array methods:
> 
> **→ push**
  >> Adds values to the end of an array.
> 
> **→ pop**
  >> Removes the last value in the array and return it.
- **Objects**
> Reading a property that doesn't exist will give you the value `undefined`.

> It is possible to assign a value to a property expression with the `=` operator. This will replace the property's value if it already existed or create a new property on the object if it didn't.

> The `delete` operator is an unary operator that, when applied to an object property, will remove the named property from the object.

> To find out what properties an object has, you can use the `Object.keys` function.
> ```javascript
> console.log(Object.keys({x: 0, y: 0, z: 2}));
> // → ["x", "y", "z"]

> There's an `Object.assign` function that copies all properties from one object into another.
> ```javascript
> let objectA = {a: 1, b: 2};
> Object.assign(objectA, {b: 3, c: 4});
> console.log(objectA);
> // → {a: 1, b: 3, c: 4}
- **Mutability** ⭐
> The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all *immutable* (it is impossible to change values of those types). If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".

> Bindings can also be changeable or constant, but this is separate from the way their values behave. Even though number values don't change, you can use a `let` binding to keep track of a changing number by changing the value the binding points at. Similarly, though a `const` binding to an object can itself not be changed and will continue to point at the same object, the *contents* of that object might change.
> ```javascript
> const score = {visitors: 0, home: 0};
> // This is okay
> score.visitors = 1;
> // This isn't allowed
> score = {visitors: 1, home: 1};
> ```

> When you compare objects with JavaScript's `==` operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return `false`, even if they have identical properties. There is no "deep" comparison operation built into JavaScript, which compares objects by contents.
- **The Lycanthrope's log**
- **Computing correlation**
- **Array loops** ⭐
> There is a simple way to write loops in modern JavaScript.
> ```javascript
> let arr = [10,20,30]
> for (let index in arr) console.log(index);
> // → 0,1,2
> for (let value of arr) console.log(value);
> // → 10,20,30
> ```
> Use the keyword `in` after a variable definition to loop over the index of the array.
> 
> Use the keyword `of` after a variable definition to loop over the elements of the array.
- **The final analysis**
- **Further arrayology**
> The methods for adding and removing things at the start of an array are called `unshift` and `shift` respectively.
> ```javascript
> let arr = [1,2,3,4,5]
> arr.shift // arr = [2,3,4,5] // returns 1 (the element removed)
> arr.unshift(1)); // arr = [1,2,3,4,5] // returns 5 (the new length of the array)
> ```

> To search for a specific value, array provide an `indexOf` method. The method searches through the array from the start to the end and returns the index at which the requested value was found or -1 if it wasn't found. To search from the end instead of the start, there's a method called `lastIndexOf`.
> ```javascript
> console.log([1,2,3,2,1].indexOf(2));
> // → 1
> console.log([1,2,3,2,1].lastIndexOf(2));
> // → 3
> ```
> Both methods take an optional second argument that indicates where to start searching.

> Another method is `slice`, which takes start (inclusive) and end (exclusive) indices and returns an array that has only the elements between them.
> ```javascript
> console.log([0,1,2,3,4].slice(2,4));
> // → [2, 3]
> console.log([0,1,2,3,4].slice(2));
> // → [2,3,4]

> The `concat` method can be used to glue arrays together to create a new array.
> ```javascript
> function remove(array, index) {
>   return array.slice(0, index).concat(array.slice(index+1));
> }
> console.log(remove(["a","b","c","d","e"], 2))
> // → ["a","b","d","e"]
> ```

- **Strings and their properties**
> Method `slice` and `indexOf`.
> ```javascript
> console.log("coconuts".slice(4,7));
> // → nut
> console.log("coconut".indexOf("u"));
> // → 5
> ```

> Method `trim` removes whitespace (spaces, newlines, tabs, and similar characters).
> ```javascript
> console.log("    okay \n  ".trim());
> // → okay

> Method `padStart` takes the desired length and padding character as arguments.
> ```javascript
> console.log(String(6).padStart(3,"0"));
> // → 006

> ⭐
> 
> You can split a string on every occurrence of another string with `split` and join it agaian with `join`.
> ```javascript
> let sentence = "Hello world!"
> let words = sentence.split(" ");
> console.log(words);
> // → ["Hello", "world!"]
> console.log(words.join(", "));
> // → Hello, world!
> ```

> Method `repeat` creates a new strinngg containing multiple copies of the original string, glued together.
> ```javascript
> console.log("LA".repeat(3));
> // → LALALA
> ```
- **Rest Parameters** ⭐
> To accept any number of arguments in a function, you put three dots before the function's last parameter.
> ```javascript
> function max(...numbers) {
>   let result = -Infinity;
>   for (let number of numbers) {
>     if (number > result) result = number;
>   }
>   return result;
> }
> console.log(max(4,1,9,-2));
> // → 9
> ```
> When such a function is called, the *rest parameter* is bound to an array containing all further arguments. If there are other parameters before it, their values aren't part of that array.
> 
> Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
> ```javascript
> let words = ["never, "fully"]
> console.log(["will", ...words, "understand"]);
> // → ["will", "never", "fully", "understand"]
> ```
- **The Math Object**
> Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JavaScript does this for bindings you declared with `let` and `const` but not for standard bindings nor for bindings declared with `var` or `function`.
- **Destructuring**
- **JSON**

# Chapter 5: Higher-order Functions ([link](https://eloquentjavascript.net/05_higher_order.html))
- **Abstraction**
- **Abstracting repetition**
> We can abstract "doing something N times" as a function.
> ```javascript
> function repeat(n, action) {
>   for (let i = 0; i < n; i++) {
>     action(i);
>   }
> }
> repeat(3, console.log);
> // → 0
> // → 1
> // → 2
> ```
> 
> We don't have to pass a predefined function to `repeat`. Often, it is easier to create a function value on the spot instead.
> ```javascript
> let labels = []
> repeat(5, i => {
>   labels.push(`Unit ${i + 1}`);
> });
> console.log(labels);
> // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
> ```

- **Higher-order Function** ⭐
> Higher-order functions allow us to abstract over *actions*, not just values. For example, we can have functions that create new functions.
> ```javascript
> function greaterThan(n) {return m => m > n;}
> let greaterThan10 = greaterThan(10);
> console.log(greaterThan(11));
> // → True  
> ```
> 
> We can even write functions that provide new types of control flow.
> ```javascript
> function unless(test, then) {
>   if (!test) then();
> }
> repeat(3, n => {
>   unless(n % 2 == 1, () => {
>     console.log(n, "is even");
>   });
> });
> // → 0 is even
> // → 2 is even
> ```
> 
> There is a built-in array method, `forEach`, that provides something like a for/of loop as a higher-order function.
> ```javascript
> ["A","B"].forEach(l => console.log(l));
> // → A
> // → B
> ```
- **Script Data Set**
- **Filtering Arrays**
> Filter method explained.
- **Transforming with Map**
> Map method explained.
- **Summarizing with Reduce**
> Reduce method explained.
- **Composability**
- **Strings and Character Codes**
> JavaScript's `charCodeAt` method gives you a code unit, not a full character code. The `codePointAt` method, added later, does give a full Unicode character.
- **Recognizing Text**
> Another array method is `findIndex`. This method finds the first value for which the given function returns true. It returns -1 when no such element is found.

# Chapter 6: The Secret Life of Objects ([link](https://eloquentjavascript.net/06_object.html))
- **Encapsulation**
- **Methods**
- **Prototypes**
- **Classes**
- **Class Notation**
- **Overriding Derived Properties**
- **Maps**
- **Polymorphism**
- **Symbols**
- **The Iterator Interface**
- **Getters, setters, and statics**
- **Inheritance**
- **The Instance of Operator**

# Chapter 7: Project: A Robot ([link](https://eloquentjavascript.net/07_robot.html))
- **Meadowfield**
- **The Task**
- **Persistent Data**
- **Simulation**
- **The Mail Truck's Route**
- **Pathfinding**

# Chapter 8: Bugs and Errors (Coming soon)
# Chapter 9: Regular Expressions (Coming soon)
# Chapter 10: Modules (Coming soon)
# Chapter 11: Asynchronous Programming (Coming soon)
# Chapter 12: Project: A Programming Language (Coming soon)
# Chapter 13: JavaScript and the Browser (Coming soon)
# Chapter 14: The Document Object Model (Coming soon)
# Chapter 15: Handling Events (Coming soon)
# Chapter 16: Project: A Platform Game (Coming soon)
# Chapter 17: Drawing on Canvas (Coming soon)
# Chapter 18: HTTP and Forms (Coming soon)
# Chapter 19: Project: A Pixel Art Editor (Coming soon)
# Chapter 20: Node.js (Coming soon)
# Chapter 21: Project: Skill-Sharing Website  (Coming soon)
