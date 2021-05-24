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
  >> There are three special values in JavaScript that are considered numbers: `Infinity`, `-Infinity` and `NaN` (« Not a Number»).
- **Strings**
> Strings are writteng by enclosing their contnent in quotes, you can use single quotes, double quotes or backticks.
> 
> You can use a backslash `\` to escape a character in strings.
> 
> The `+` operator glues two strings together.
- **Unary operators**
- **Boolean values**
> There is only one value in JavaScript that is not equal to itself, and that is `NaN`.

- **Empty values**
> There are two special values, written `null` and `undefined`.

- **Automatic type conversion**
> When an operator is applied to the « wrong » type of value, JavaScript will quietly convert that value to the type it needs.
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
- **Expressions and statements**
- **Bindings**
- **Binding names**
- **The environment**
- **Functions**
- **The console.log function**
- **Return values**
- **Control flow**
- **Conditional execution**
- **While and do loops**
- **Indenting Code**
- **For loops**
- **Breaking out of a loop**
- **Updating bindings succinclty**
- **Dispatching on a value wwith switch**
- **Capitalization**
- **Comments**

# Chapter 3: Functions ([link](https://eloquentjavascript.net/03_functions.html))
- **Defining a function**
- **Bindings and scopes**
- **Nested scope**
- **Functions as values**
- **Declaration notation**
- **Arrow functions**
- **The call stack**
- **Optional arguments**
- **Closure**
- **Recursion**
- **Growing functions**
- **Functions and side effects**

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
