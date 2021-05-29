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
> 
> You can use a backslash `\` to escape a character in strings.
> 
> The `+` operator glues two strings together.
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
- **Methods**
- **Objects**
- **Mutability**
- **The Lycanthrope's log**
- **Computing correlation**
- **Array loops**
- **The final analysis**
- **Further arrayology**
- **Strings and their properties**
- **Rest Parameters**
- **The Math Object**
- **Destructuring**
- **JSON**

# Chapter 5: Higher-order Functions ([link](https://eloquentjavascript.net/05_higher_order.html))
- **Abstraction**
- **Abstracting repetition**
- **Higher-order Function**
- **Script Data Set**
- **Filtering Arrays**
- **Transforming with Map**
- **Summarizing with Reduce**
- **Composability**
- **Strings and Character Codes**
- **Recognizing Text**

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
