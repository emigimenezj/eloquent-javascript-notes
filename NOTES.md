------
# Chapter 1: Values, Types, and Operators ([link](https://eloquentjavascript.net/01_values.html))

**◼️ Values**

#### ◼️ Numbers
> JavaScript uses a fixed number of 64 bits to store a single number value.
>  
> Fractional numbers are written by using a dot and you may also use scientific notation by adding an `e` for *exponent* followed by the exponent of the number.

> **→ Arithmetic**
  >> The `+` and `*` symbols are called *operators*. When operators appear together without parentheses, the order in which they are applied is determined by the *precedence* of the operators.

> **→ Special numbers**
  >> There are three special values in JavaScript that are considered numbers: `Infinity`, `-Infinity` and `NaN` ("Not a Number").
#### ◼️ Strings
> Strings are writteng by enclosing their contnent in quotes, you can use single quotes, double quotes or backticks.

> You can use a backslash `\` to escape a character in strings.
 
> The `+` operator glues two strings together.

> The way JavaScript modeled Strings as a series of bits based on the *Unicode* standard. But there's a complication: JavaScript's representation uses 16 bits per string element, but Unicode defines more characters than 2^16. So some characters, such as many emoji, take up two "character positions" in JavaScript strings.

**◼️ Unary Operators**

#### ◼️ Boolean Values
> There is only one value in JavaScript that is not equal to itself, and that is `NaN`.

#### ◼️ Empty Values
> There are two special values, written `null` and `undefined`.

#### ◼️ Automatic Type Conversion ⭐
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

**◼️ Expressions and Statements**

#### ◼️ Bindings
> There are three ways to declare bindings: `let`, `var` and `const`.

> A single `let`statement may define multiple bindings.

> The words `var` is the way bindings were declared in pre-2015 JavaScript.

> The word `const` defines a constant binding, which points at the same value for as log as it lives.
#### ◼️ Binding Names
> There are words with a special meaning and they may not be used as binding names.
> 
> This is the full list of *keywords*:
> 
> break case catch class const continue debugger default
> delete do else enum export extends false finally for
> function if implements import interface in instanceof let
> new package private protected public return static super
> switch this throw true try typeof var void while with yield

**◼️ The Environment**

**◼️ Functions**

**◼️ The console.log Function**

**◼️ Return Values**

#### ◼️ Control Flow
> There are three functions called `Number`, `String` and `Boolean` that convert values to those types.
#### ◼️ Conditional Execution
> The `Number.isNaN` function returns `true` only if the argument is it given is `NaN`.

**◼️ While and Do Loops**

**◼️ Indenting Code**

**◼️ For Loops**

#### ◼️ Breaking Out of a Loop ⭐
> There is a special statement called `break` that has the effect of immediately jumping out of the enclosing loop.
>
> There is another special statement called `continue` that when is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration.

> The `%` operator is an easy way to test whether a number is divisible by another number.

**◼️ Updating Bindings Succinclty**

#### ◼️ Dispatching on a Value with Switch ⭐
> There is a construct called `switch` that...

**◼️ Capitalization**

**◼️ Comments**

------
# Chapter 3: Functions ([link](https://eloquentjavascript.net/03_functions.html))
#### ◼️ Defining a function
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

**◼️ Bindings and scopes**

**◼️ Nested scope**

**◼️ Functions as values**

#### ◼️ Declaration notation
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
#### ◼️ Arrow functions
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

**◼️ The call stack**

#### ◼️ Optional arguments ⭐
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
#### ◼️ Closure ⭐
> The "being able to reference a specific instance of a local binding in an enclosing scope" feature is called *closure*. A function that references bindings from local scopes around it is called *a* closure.
> ```javascript
> function multiplier(factor) {
>   return number => number * factor;
> }
> let twice = multiplier(2);
> console.log(twice(5));
> // → 10
> ```

#### ◼️ Recursion
> In typical JavaScript implementations, the recursion it's about three times slower than the looping version. You have to decide between human-friendliness and machine-friendliness.

**◼️ Growing functions**

**◼️ Functions and side effects**

------
# Chapter 4: Data Structures: Objects and Arrays ([link](https://eloquentjavascript.net/04_data.html))

**◼️ The weresquirrel**

**◼️ Data sets**

#### ◼️ Properties
> Almost all JavaScript values have properties. The exceptions are `null` and `undefined`. If you try to access a property on one of these nonvalues, you get an error.

> The two main ways to access properties in JavaScript are with a dot and with square brackets. Both `value.x` and `value[x]` access aa propert on `value`, but not necessarily the same property. The difference is in how `x` is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is *evaluated* to get the property name.
#### ◼️ Methods
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
#### ◼️ Objects
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
#### ◼️ Mutability ⭐
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

**◼️ The Lycanthrope's log**

**◼️ Computing correlation**

#### ◼️ Array loops ⭐
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

**◼️ The final analysis**

#### ◼️ Further arrayology
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

#### ◼️ Strings and their properties
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
#### ◼️ Rest Parameters ⭐
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
#### ◼️ The Math Object
> Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JavaScript does this for bindings you declared with `let` and `const` but not for standard bindings nor for bindings declared with `var` or `function`.

**◼️ Destructuring**

**◼️ JSON**

# Chapter 5: Higher-order Functions ([link](https://eloquentjavascript.net/05_higher_order.html))

**◼️ Abstraction**

#### ◼️ Abstracting repetition
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

#### ◼️ Higher-order Function ⭐
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

**◼️ Script Data Set**

#### ◼️ Filtering Arrays
> Filter method explained.
#### ◼️ Transforming with Map
> Map method explained.
#### ◼️ Summarizing with Reduce
> Reduce method explained.

**◼️ Composability**

#### ◼️ Strings and Character Codes
> JavaScript's `charCodeAt` method gives you a code unit, not a full character code. The `codePointAt` method, added later, does give a full Unicode character.
#### ◼️ Recognizing Text
> Another array method is `findIndex`. This method finds the first value for which the given function returns true. It returns -1 when no such element is found.
------
# Chapter 6: The Secret Life of Objects ([link](https://eloquentjavascript.net/06_object.html))

**◼️ Encapsulation**

#### ◼️ Methods
> If you want to pass `this` explicitly, you can use a function's `call` method, which takes the `this` value as its first argument and treats further arguments as normal parameters.
> ```javascript
> function speak(line) {
>   console.log(`The ${this.type} rabbit says '${line}'`);
> }
> let hungryRabbit = {type: "hungry", speak};
> 
> hungryRabbit.speak("Feed me!");
> // → The hungry rabbit says 'Feed me!'
> 
> speak.call(hungryRabbit, "Feed me!");
> // → The hungry rabbit says 'Feed me!'
> ```

> Arrow functions do not bind their own `this` but can see the `this` binding of the scope around them. Thus, you can do something like the following code, which references `this` from inside a local function:
> ```javascript
> function normalize() {
>   console.log(this.coords.map(n => n / this.length));
> }
> normalize.call({coords: [0,2,3], length: 5});
> // → [0, 0.4, 0.6]
> ```
> If I had written the argument to `map` using the `function` keyword, the code wwouldn't work.
#### ◼️ Prototypes ⭐
> A prototype is another object that is used as a fallback source of properties.

> The entity behind almost all object is `Object.prototype`.
> ```javascript
> console.log(Object.getPrototypeOf({}) == Object.prototype);
> // → true
> console.log(Object.getPrototypeOf(Object.prototype));
> // → null
> ```
> As you guess, `Object.getPrototypeOf` returns the prototype of an object.

> Functions derive from `Function.prototype`, and arrays derive from `Array.prototype`.
> ```javascript
> console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
> // → true
> console.log(Object.getPrototypeOf([]) == Array.prototype);
> // → true
> ```

> You can use `Object.create` to create an object with a specific prototype.
> ```javascript
> let protoRabbit = {
>   speak(line) {
>     console.log(`The ${this.type} rabbit says '${line}'`);
>   }
> };
> let killerRabbit = Object.create(protoRabbit);
> killerRabbit.type = "killer";
> killerRabbit.speak("SKREEEE!");
> // → The killer rabbit says 'SKREEEE!'
> ```

**◼️ Classes**

#### ◼️ Class Notation
> JavaSript classes are constructor functions with a prototype property and until 2015 we have a better notation.
> ```javascript
> class Rabbit {
>   constructor(type) {
>     this.type = type;
>   }
>   speak(line) {
>     console.log(`The ${this.type} rabbit says '${line}'`);
>   }
> }
> 
> let killerRabbit = new Rabbit("killer");
> let blackRabbit = new Rabbit("black");
> ```
> The `class` keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. The method named `constructor` provides the actual constructor function, which will be bound to the name Rabbit.

> Class declarations currently allow only *methods* (properties that hold functions) to be added to the prototype. If you want to save a non-function value, you can create such properties by direclty manipulating the prototype after you've defined the class.

> Like `functions`, `class` can be used both in statementns and in expressions.

**◼️ Overriding Derived Properties**

#### ◼️ Maps
> JavaScript comes with a class called `Map` that is written for stores a mapping and allows any type of keys.
> ```javascript
> let ages = new Map();
> ages.set("Boris", 39);
> ages.set("Liang", 22);
> ages.set("Júlia", 62);
> console.log(`Júlia is ${ages.get("Júlia")}`);
> // → Júlia is 62
> console.log("Is Jack's age known?", ages.has("Jack"));
> // → Is Jack's age known? false
> console.log(ages.has("toString"));
> // → false
> ```
> The methods `set`, `get` and `has` are part of the interface of the Map object.

> It is useful to know that `Object.keys` returns onlye an object's *own* keys, not those in the prototype.

> As an alternative to the `in` operator, you can use the `hasOwnProperty` method, which ignores the object's prototype.
> ```javascript
> console.log({x: 1}.hasOwnProperty("x"));
> // → true
> console.log({x: 1}.hasOwnProperty("toString"));
> // → false
> ```

#### ◼️ Polymorphism
> When a piece of code is written to work with objects that have a certain interface, any kind of object that happens to support this interface can be plugged into the code and it will just work. This technique is called *polymorphism*. Polymorphic code can work with values of different shapes, as long as they support the interface it expects.

#### ◼️ Symbols
> Property names usually are strings but they can also be *symbols*. Symbols are values created with the `Symbol` function. Unlike strings, newly created symbols are unique (you cannot create the same symbol twice).

#### ◼️ The Iterator Interface ⭐
> The object given to a `for/of` loop is expected to be *iterable*. This means it has a method named with the `Symbol.iterator` symbol (a symbol value defined by the language, stored as a property of the `Symbol` function).
> 
> When called, that method should return an object that provides a second interface, *iterator*. It has a `next` method that returns the next result. That result should be an object with a `value` property that provides the next value, if there is one, and a `done` property, which should be true when there are no more results and false otherwise.

> Let's implement an iterable data structure. We'll build a *matrix* class, acting as a two-dimensional array.
> ```javascript
> class Matrix {
>   constructor(width, height, element = (x, y) => undefined) {
>     this.width = width;
>     this.height = height;
>     this.content = [];
>     
>     for (let y = 0; y < height; y++) {
>       for (let x = 0; x < width; x++) {
>         this.content[y * width + x] = element(x, y);
>       }
>     }
>   }
>   get(x, y) {
>     return this.content[y * this.width + x];
>   }
>   set(x, y, value) {
>     this.content[y * this.width + x] = value;
>   }
> }
> ```
> 
> So now, we'll haave our iterator produce objects with `x`, `y` and `value` properties.
> ```javascript
> class MatrixIterator {
>   constructor(matrix) {
>     this.x = 0;
>     this.y = 0;
>     this.matrix = matrix;
>   }
>   next() {
>     if (this.y == this.matrix.height) return {done: true};
>     
>     let value ={
>       x: this.x,
>       y: this.y,
>       value: this.matrix.get(this.x, this.y)
>     };
>     this.x++;
>     if (this.x == this.matrix.width) {
>       this.x = 0;
>       this.y++;
>     }
>     return {value, done: false};
>   }
> }
> ```

> Let's set up the `Matrix` class to be iterable.
> ```javascript
> Matrix.prototype[Symbol.iterator] = function() {
>   return new MatrixIterator(this);
> };
> ```
> We can now loop over a matrix with `for/of`.
> ```javascript
> let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
> for (let {x, y, value} of matrix) {
>   console.log(x, y, value);
> }
> // → 0 0 value 0,0
> // → 1 0 value 1,0
> // → 0 1 value 0,1
> // → 1 1 value 1,1
> ```

#### ◼️ Getters, setters, and statics ⭐
> It is not even necessary for such an object to compute and store such a property ddirectly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called *getters*, and they are defined by writing `get` in front of the method name in an object expression or class declaration. You can do a similar thing when a property is wwritteen to, using a *setter*. Finally, inside a class declaration, methods that have `static`writen before their names are stored on the constructor. So the following code allows you to write `Temperature.fromFarenheit(100)` to create a temperature using degrees Fahrenheit.
> ```javascript
> class Temperature {
>   constructor(celsius) {
>     this.celsius = celsius;
>   }
>   get fahrenheit() {
>     return this.celsius * 1.8 + 32;
>   }
>   set fahrenheit(value) {
>     this.celsius = (value - 32) / 1.8;
>   }
>
>   static fromFahrenheit(value) {
>     return new Temperature((value - 32) / 1.8);
>   }
> }
>
> let temp = new Temperature(22);
> console.log(temp.fahrenheit);
> // → 71.6
> temp.fahrenheit = 86;
> console.log(temp.celsius);
> // → 30
> ```

#### ◼️ Inheritance
> JavaScript's prototype system makes it possible to create a *new* class, much like the old class, but with new definitions for some of its properties. The prototype for the neww class derives from the old prototype but adds a new definition for, say, the `set` method. This is called *inheritance*. The new class inherits properties and behavior form the old class.
> ```javascript
> class SymmetricMatrix extends Matrix {
>   constructor(size, element = (x, y) => undefined) {
>     super(size, size, (x, y) => {
>       if (x < y) return element(y, x);
>       else return element(x, y);
>     });
>   }
>   
>   set(x, y, value) {
>     super.set(x, y, value);
>     if (x != y) super.set(y, x, value);
>   }
> }
> 
> let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
> console.log(matrix.get(2,3));
> // → 3,2
> ```
> The use of the word `extends` indicates that this class shouldn't be direclty based on the default `Object` prototype but on some other class. This is called the *superclass*. The derived class is the *subclass*.
> 
> To initialize, the constructor calls its superclass's constructor through the `super` keyword.
> 
> The `set` method again uses `super` but this time not to call the constructor but to call a specific method from the superclass's set of methods. We are redefining `set` but do want to use the original behavior. Because `this.set` refers to the *new* `set` method, calling that wouldn't work. Inside class methods, `super` provides a way to call methods as they were defined in the superclass.

#### ◼️ The Instanceof Operator
> For know whether an object was derived from a specific class, JavaScript provides a binary operator called `instanceof`.
> ```javascript
> console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
> // → true
> console.log(new SymmetricMatrix(2) instanceof Matrix);
> // → true
> console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
> // → false
> console.log([1] instanceof Array);
> // → true
> ```

# Chapter 7: Project: A Robot ([link](https://eloquentjavascript.net/07_robot.html))
#### ◼️ Meadowfield
> ```javascript
> function buildGraph(edges) {
>   let graph = Object.create(null);
>   function addEdge(from, to) {
>     if (graph[from] == null) {
>       graph[from] = [to];
>     } else {
>       graph[from].push(to);
>     }
>   }
>   // Example of pattern matching in javascript <-----------------------
>   for (let [from, to] of edges.map(r => r.split("-"))) {
>     addEdge(from, to);
>     addEdge(to, from);
>   }
>   return graph;
> }
> ```

**◼️ The Task**

### ◼️ Persistent Data

> Data structures that don’t change are called *immutable* or *persistent*. They behave a lot like strings and numbers in that they are who they are and stay that way, rather than containing different things at different times.

> There is a function called `Object.freeze` that changes an object so that writing to its properties is ignored.
> ```javascript
> let object = Object.freeze({value: 5});
> object.value = 10;
> console.log(object.value);
> // → 5
> ```
> Be careful with this and use it with caution or will be thhe reason of many problems.

### ◼️ Simulation

> Remember that `Math.random()` returns a number between zero and one, but always below one. Multiplying such a number by an integer allows you to extend the random pick range and when you apply `Math.floor`, it gives to you a random integer (not float) number.
> ```javascript
> function randomNumberBetween(start, end) {
>   return Math.floor(Math.random()*(++end-start) + start);
> }
> ```
> This function returns a random number between start and end inclusive. Check it out that `++end` it works well, but` end++` it doesn't work in this specific case.

**◼️ The Mail Truck's Route**

### ◼️ Pathfinding

> Dijkstra
> ```javascript
> function findRoute(graph, from, to) {
>   let work = [{at: from, route: []}];
>   for (let i = 0; i < work.length; i++) {
>     let {at, route} = work[i];
>     for (let place of graph[at]) {
>       if (place == to) return route.concat(place);
>       if (!work.some(w => w.at == place)) {
>         work.push({at: place, route: route.concat(place)});
>       }
>     }
>   }
> }
> ```

# Chapter 8: Bugs and Errors (Coming soon)

**◼️ Language**

### ◼️ Strict Mode
> JavaScript can enable *strict mode* by putting the string `"use strict"`  at the top of a file or a function body.

> A change in strict mode is that the `this` binding holds the value `undefined` in functions that are not called as methods.
> 
> When making such a call outside of strict mode, `this` refers to the global scope object, which is an object whose properties are the global bindings.
> 
> So if you accidentally call a method or constructor incorrectly in strict mode, JavaScript will produce an error as soon as it tries to read something from this, rather than happily writing to the global scope.
> 
> ```javascript
> // Example
> function Person(name) {
>   this.name = name;
> }
> let ferdinand = Person("Ferdinand"); // oops
> console.log(name);
> // → Ferdinand
> ```
> 
> Fortunately, constructors created with the `class` notation will always complain if they are called without `new`.

### ◼️ Type

> There are several JavaScript dialects that add types to the language and check them. The most popular one is called `TypeScript`.

**◼️ Testing**

### ◼️ Debugging

> A way to set a breakpoint is to include a debugger statement in your program. If the developer tools of your browser are active, the program will pause whenever it reaches such a statement.

**◼️ Error Propagation**

### ◼️ Exceptions

> The `throw` keyword is used to raise an exception.
> 
> Catching one is done by wrapping a piece of code in a `try` block, followed by the keyword `catch`.
> 
> When the code in the `try` block causes an exception to be raised, the `catch` block is evaluated, with the name in parentheses bound to the exception value.

> You can use the `Error` constructor to create an exception value.
> ```javascript
> // Example
> function promptDirection(question) {
>   let result = prompt(question);
>   if (result.toLowerCase() == "left") return "L";
>   if (result.toLowerCase() == "right") return "R";
>   throw new Error("Invalid direction: " + result);
> }
> ```

### ◼️ Cleaning Up After Exceptions

> The `try` statement may be followed by a `finally` block either instead of or in addition to a `catch` block.
> 
> A `finally` block says "no matter *what* happens, run this code after trying to run the code in the `try` block".
> 
> *(this is because if the `try` block throw an exception, the control flow of the code stops immediately and that isn't always practical)*

### ◼️ Selective Catching

> You can define a new type of error and use `instanceof` to identify it.
> ```javascript
> class InputError extends Error {}
> 
> for (;;) {
>   try {
>     let dir = promptDirection("Where?");
>     console.log("You chose ", dir);
>     break;
>   } catch (e) {
>     if (e instanceof InputError) {
>       console.log("Not a valid direction. Try again.");
>     } else {
>       throw e;
>     }
>   }
> }
> ```
> 
> The new class `InputError` it doesn't define anything at all, the class is empty.
> So its behave is like `Error` objects, except that they have a different name by which we can recognize them.

**◼️ Assertions**

# Chapter 9: Regular Expressions

**◼️ Creating a Regular Expression**

### ◼️ Testing for Matches
> Regular expression objects have a number of methods. The simplest one is `test`. If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.
> ```javascript
> console.log(/abc/.test("abcde"));
> // → true
> console.log(/abc/.test("abxde"));
> // → false
> ```
> If *abc* occurs anywhere in the string we are testing against (not just at the start), `test` will return `true`.

### ◼️ Set of Characters ⭐

> In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.
> ```javascript
> console.log(/[0123456789]/.test("in 1992"));
> // → true
> console.log(/[0-9]/.test("in 1992"));
> // → true
> ```
> Characters 0 to 9 sit right next to each other in Unicode numbers (codes 48 to 57), so [0-9] covers all of them and matches any digit.

> A number of common character groups have their own built-in shortcuts.
> - \d	Any digit character
> - \w	An alphanumeric character (“word character”)
> - \s	Any whitespace character (space, tab, newline, and similar)
> - \D	A character that is not a digit
> - \W	A nonalphanumeric character
> - \S	A nonwhitespace character
> - .	Any character except for newline

> To *invert* a set of characters, you can write a caret (^) character after the opening bracket.
> ```javascript
> let notBinary = /[^01]/;
> console.log(notBinary.test("1100100010100110"));
> // → false
> console.log(notBinary.test("1100100010200110"));
> // → true
> ```

### ◼️ Repeating Parts of a Pattern

> The `+` symbol means one or more characters.
> 
> The `*` symbol means zero or more characters.
> 
> The `?` symbol means *optional* character.

> The `{n}` symbol means that the pattern should occur *n* times.
> 
> It is also possible to specify a range this way: `{2,4}` means the element must occur at least twice and at most four times.
> 
> ```javascript
> // Example of regular expression for date and time pattern
> let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
> console.log(dateTime.test("1-30-2003 8:45"));
> // → true
> ```
> You can also specify open-ended ranges when using braces by omitting the number after the comma. So, `{5,}` means five or more times.

### ◼️ Grouping Subexpressions

> Use parentheses to group subexpressions.

> The `i` at the end of the expression makes a regular expression case insensitive.
> ```javascript
> let cartoonCrying = /boo/i;
> console.log(cartoonCrying.test("Boo"));
> // → true
> ```

### ◼️ Matches and groups

> Regular expressions also have an `exec` (execute) method that will return `null` if no match was found and return an object with information about the match otherwise.
> ```javascript
> let match = /\d+/.exec("one two 100");
> console.log(match);
> // → ["100"]
> console.log(match.index);
> // → 8
> ```
> An object returned from `exec` has an `index` property that tells us *where* in the string the successful match begins.
> 
> String values have a match method that behaves similarly.
> ```javascript
> console.log("one two 100".match(/\d+/));
> // → ["100"]
> ```

> When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array. The whole match is always the first element.
> 
> The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.
> 
> ```javascript
> let quotedText = /'([^']*)'/;
> console.log(quotedText.exec("she said 'hello'"));
> // → ["'hello'", "hello"]
> ```

> When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output array will hold undefined.
> ```javascript
> console.log(/bad(ly)?/.exec("bad"));
> // → ["bad", undefined]
> ```

### ◼️ The Date Class ⭐

> JavaScript standard class for representing dates is called `Date`. If you simply create a date object using `new`, you get the current date and time.
> ```javascript
> console.log(new Date());
> // → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)
> ```

> You can also create an object for a specific time.
> ```javascript
> console.log(new Date(2009, 11, 9));
> // → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
> console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
> // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
> ```

> You can use the method `getTime` on a date object to returns milliseconds passed since Jan 1 1970.
> ```javascript
> console.log(new Date(2013, 11, 19).getTime());
> // → 1387407600000
> console.log(new Date(1387407600000));
> // → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
> ```

> Putting parentheses around the parts of the expression that we are interested in, we can now create a date object from a string.
> ```javascript
> function getDate(string) {
>   let [_, month, day, year] =
>     /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
>   return new Date(year, month - 1, day);
> }
> console.log(getDate("1-30-2003"));
> // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
> ```

### ◼️ Word and String Boundaries

> If we want to enforce that the match must span the whole string, we can add the markers ^ and $. So, `/^\d+$/` matches a string consisting entirely of one or more digits, `/^!/` matches any string that starts with an exclamation mark.

> If we just want to make sure the date starts and ends on a word boundary, we can use the marker \b.
> ```javascript
> console.log(/cat/.test("concatenate"));
> // → true
> console.log(/\bcat\b/.test("concatenate"));
> // → false
> ```


### ◼️ Choice Patterns

> The pipe character `|` denotes a choice between the pattern to its left and the pattern to its right.
> ```
> let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
> console.log(animalCount.test("15 pigs"));
> // → true
> console.log(animalCount.test("15 pigchickens"));
> // → false
> ```

**◼️ The Mechanics of Matching**

**◼️ Backtracking**

### ◼️ The Replace Method

> String values have a `replace` method that can be used to replace part of the string with another string.
> 
> The first argument can also be a regular expression. When a g option (for *global*) is added to the regular expression, all matches in the string will be replaced, not just the first.
> ```javascript
> console.log("Borobudur".replace(/[ou]/, "a"));
> // → Barobudur
> console.log("Borobudur".replace(/[ou]/g, "a"));
> // → Barabadar
> ```

> The real power of using regular expressions with `replace` comes from the fact that we can refer to matched groups in the replacement string.
> ```javascript
> console.log(
>   "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
>     .replace(/(\w+), (\w+)/g, "$2 $1"));
> // → Barbara Liskov
> //   John McCarthy
> //   Philip Wadler
> ```
> The `$1` and `$2` in the replacement string refer to the parenthesized groups in the pattern. `$1` is replaced by the text that matched against the first group, `$2` by the second, and so on, up to `$9`. The whole match can be referred to with `$&`.

> It is possible to pass a function —rather than a string— as the second argument to `replace`.
> ```javascript
> let stock = "1 lemon, 2 cabbages, and 101 eggs";
> function minusOne(match, amount, unit) {
>   amount = Number(amount) - 1;
>   if (amount == 1) { // only one left, remove the 's'
>     unit = unit.slice(0, unit.length - 1);
>   } else if (amount == 0) {
>     amount = "no";
>   }
>   return amount + " " + unit;
> }
> console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
> // → no lemon, 1 cabbage, and 100 eggs
> ```

### ◼️ Greed

> It is possible to use `replace` to write a function that removes all comments from a piece of JavaScript code.
>```javascript
> function stripComments(code) {
>   return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
> }
> console.log(stripComments("1 + /* 2 */3"));
> // → 1 + 3
> console.log(stripComments("x = 10;// ten!"));
> // → x = 10;
> console.log(stripComments("1 /* a */+/* b */ 1"));
> // → 1  1 // This have gone wrong.
>```
> 
> The `[^]*` part of the expression will first match as much as it can. In the example, the matcher first tries to match the whole rest of the string and then moves back (backtracking) from there. It will find an occurrence of `*/` after going back four characters and match that.
> 
> Because of this behavior, we say the repetition operators `+, *, ?, and {}` are *greedy*, meaning they match as much as they can and backtrack from there.
> 
> If you put a question mark after them `+?, *?, ??, {}?`, they become nongreedy and start by matching as little as possible.
> 
> ```javascript
> function stripComments(code) {
>   return code.replace(/\/\/.*|\/\*[^]*?\*\//g, ""); // replace [^]* by [^]*?
> }
> console.log(stripComments("1 /* a */+/* b */ 1"));
> // → 1 + 1
> ```

### ◼️ Dynamically Creating RegExp Objects

> You can build up a string and use the RegExp constructor on that.
> ```javascript
> let name = "harry";
> let text = "Harry is a suspicious character.";
> let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
> console.log(text.replace(regexp, "_$1_"));
> // → _Harry_ is a suspicious character.
> ```

> If the name is "dea+hl[]rd", we can add backslashes before any character that has a special meaning.
> ```javascript
> let name = "dea+hl[]rd";
> let text = "This dea+hl[]rd guy is super annoying.";
> let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
> let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
> console.log(text.replace(regexp, "_$&_"));
> // → This _dea+hl[]rd_ guy is super annoying.
> ```

### ◼️ The Search Method

> The `indexOf` method on strings cannot be called with a regular expression. There is another method, `search`, that does expect a regular expression.
> ```javascript
> // In RegEx, the '\S' symbol means a nonwhitespace character
> console.log("  word".search(/\S/));
> // → 2
> console.log("    ".search(/\S/));
> // → -1
> ```

**◼️ The lastIndex property** (wtf)

### ◼️ Looping Over Matches

> You can loop over the matches of a regular expression:
> ```javascript
> let input = "A string with 3 numbers in it... 42 and 88.";
> let number = /\b\d+\b/g;
> let match;
> while (match = number.exec(input)) {
>   console.log("Found", match[0], "at", match.index);
> }
> // → Found 3 at 14
> //   Found 42 at 33
> //   Found 88 at 40
> ```

**◼️ Parsing an INI File**

**◼️ International Characters**

# Chapter 10: Modules

**◼️ Modules**

**◼️ Packages**

**◼️ Improvised Modules**

**◼️ Evaluating Data as Code**

**◼️ CommonJS**

### ◼️ ECMAScript Modules

> New notation; *ES modules*. The notation is integrated into the language by using `import` and `from`keyword, instead of calling a function to access a dependency.
> ```javascript
> import ordinal from "ordinal";
> import {days, months} from "date-names";
> 
> export function formatDate(date, format) { /* ... */ }
> ```
> The `export` keyword is used to export things. It may appear in front of a function, class or bindingn definition (`let`, `const` or `var`).
> 
> (OBS) When you import something, you import the *binding*, not the value. So the value of a binding could change at some point. (like a pointer in C++)

> When there is a binding named `default`, it is treated as the module's main exported value. If you import a module without braces around the binding name, you get its `default` binding.
> 
> To create a default export, just write `export default` before an expression, function declaration or a class declaration.
> ```javascript
> export default ["Winter", "Spring", "Summer", "Autumn"];
> ```

> It is possible to rename imported bindings using the word `as`.
> ```javascript
> import {days as dayNames} from "date-names";
> console.log(dayNames.length);
> // → 7
> ```

**◼️ Building and Bundling**

**◼️ Module Design**

# Chapter 11: Asynchronous Programming

**◼️ Asynchronicity**

**◼️ Crow Tech**

**◼️ Callbacks**

### ◼️ Promises ⭐

> One way to create a promise is by calling `Promise.resolve`.
> ```javascript
> let fifteen = Promise.resolve(15);
> fifteen.then(value => console.log(`Got ${value}`));
> // → Got 15
> ```
> To get the result of a promise, you can use its `then` method. This registers a callback function to be called when the promise resolves and produces a value.
> 
> The `then` method returns another promise, which resolves to the value that the handler function returns or, if that returns a promise, waits for that promise and then resolves to its result.

> Another way to create a promise, you can use `Promise` as a constructor.
> ```javascript
> function storage(nest, name) {
>   return new Promise(resolve => {
>     nest.readStorage(name, result => resolve(result));
>   });
> }
> storage(bigOak, "enemies")
>   .then(value => console.log("Got", value));
> ```

### ◼️ Failure ⭐

> The promises can be either resolved (the action finished successfully) or rejected (it failed). Much like resolving a promise provides a value, rejecting one also provides one.

> There's a `Promise.reject` function that creates a new ommediately rejected promise.
> 
> To explicity handle such rejections, promises have a `catch` method that registers a handler to be called when the promise is rejected, similar to how `then` handlers handle normal resolution.
> 
> The `catch` method is also very much like `then` in that it returns a new promise. If a `catch` handler throws an error, the new promise is also rejected.

> As a shorthand, `then` also accepts a rejection handler as a second argument.

> Handlers that don't match the type of outcome (success or failure) are ignored.
> 
> But those that do match are called, and their outcome determines what kind of value comes next...
> - Success: when it returns a non-promise value.
> - Rejection: whenn it throws an exception.
> - Another promise: when the outcome is a promise.
> ```javascript
> new Promise((_, reject) => reject(new Error("Fail")))
>   .then(value => console.log("Handler 1"))
>   .catch(reason => {
>     console.log("Caught failure " + reason);
>     return "nothing";
>   })
>   .then(value => console.log("Handler 2", value));
> // → Caught failure Error: Fail
> // → Handler 2 nothing
> ```

**◼️ Networks are Hard**

### ◼️ Collections of Promises ⭐

> When working with collections of promises running at the same time, the `Promise.all` function can be useful. It returns a promise that waits for all the promises in the array to resolve. If any promise is rejected, the result of `Promise.all` is itself rejected.
> ```javascript
> function availableNeighbors(nest) {
>   let requests = nest.neighbors.map(neighbor => {
>     return request(nest, neighbor, "ping")
>       .then(() => true, () => false);
>   });
>   return Promise.all(requests).then(result => {
>     return nest.neighbors.filter((_, i) => result[i]);
>   });
> }
> ```
> This makes use of the fact that `filter` passes the array index of the current element as a second argument to its filtering function (`map`, `some`, and similar *higher-order array methods* do the same).

### ◼️ Network Flooding

> Explain how to send a message to each node of the whole network by using a style of network communication called *flooding* (it floods the network with a piece of information until all nodes have it).

### ◼️ Message routing

> Explain how to send a message to a single node of the network.

### ◼️ Async Functions

> An async function is marked by the word `async` before the `function` keyword.
> 
> Inside an `async` function, the word `await` can be put in front of an expression to wait for a promise to resolve and only then continue the execution of the function. Such a function no longer runs from start to competion in one go. Instead, it can be *frozen* at any point that has an `await`, and can bbe resumed at a later time.

### ◼️ Generators ⭐

> There are other functions in JavaScript with the ability to be paused (without promises), that functions are called *generators*.
> 
> When you define a function with `function*`, it becomes a *generator*. When you call a generator, it returns an iterator.
> ```javascript
> function* powers(n) {
>   for (let current = n; current < 600; current *= n) {
>     yield current;
>   }
> }
> 
> for (let power of powers(2)) {
>   //if (power > 600) break;
>   console.log(power);
> }
> // → 3
> // → 9
> // → 27
> ```
> Initially, when you call *powers*, the function is frozen at its start. Every time you call `next` on the iterator, the function runs until it hits a `yield` expression which pauses it and causes the yielded value to become the next value produced by the iterator. When the function returns (the one in the example never does), the iterator is done.

> The `yield` expressions may occur only directly in the generator function itself and not in an inner function you define inside of it.

> An `async` function is a special type of generator. It produces a promise when called, which is resolved when it returns (finishes) and rejected when it throws an exception. Whenever it yields (awaits) a promise, the result of that promise (value or thrown exception) is the result of the `await` expression.

**◼️ The Event Loop**

**◼️ Asynchronous Bugs**

# Chapter 12: Project: A Programming Language

### ◼️ Parsing

> First part of the parser:
> ```javascript
> function parseExpression(program) {
>   program = skipSpace(program);
>   let match, expr;
>   if (match = /^"([^"]*)"/.exec(program)) {
>     expr = {type: "value", value: match[1]};
>   } else if (match = /^\d+\b/.exec(program)) {
>     expr = {type: "value", value: Number(match[0])};
>   } else if (match = /^[^\s(),#"]+/.exec(program)) {
>     expr = {type: "word", name: match[0]};
>   } else {
>     throw new SyntaxError("Unexpected syntax: " + program);
>   }
> 
>   return parseApply(expr, program.slice(match[0].length));
> }
> 
> function skipSpace(string) {
>   let first = string.search(/\S/);
>   if (first == -1) return "";
>   return string.slice(first);
> }
> ```

> `SyntaxError` is an exceptionn constructor of another standard error type.

> Second part of the parser:
> ```javascript
> function parseApply(expr, program) {
>   program = skipSpace(program);
>   if (program[0] != "(") {
>     return {expr: expr, rest: program};
>   }
> 
>   program = skipSpace(program.slice(1));
>   expr = {type: "apply", operator: expr, args: []};
>   while (program[0] != ")") {
>     let arg = parseExpression(program);
>     expr.args.push(arg.expr);
>     program = skipSpace(arg.rest);
>     if (program[0] == ",") {
>       program = skipSpace(program.slice(1));
>     } else if (program[0] != ")") {
>       throw new SyntaxError("Expected ',' or ')'");
>     }
>   }
>   return parseApply(expr, program.slice(1));
> }
> ```

### ◼️ The Evaluator

> You give it a syntax tree and a scope object that associates names with values, and it will evaluate the expression.
> ```javascript
> const specialForms = Object.create(null);
> 
> function evaluate(expr, scope) {
>   if (expr.type == "value") {
>     return expr.value;
>   } else if (expr.type == "word") {
>     if (expr.name in scope) {
>       return scope[expr.name];
>     } else {
>       throw new ReferenceError(
>         `Undefined binding: ${expr.name}`);
>     }
>   } else if (expr.type == "apply") {
>     let {operator, args} = expr;
>     if (operator.type == "word" &&
>         operator.name in specialForms) {
>       return specialForms[operator.name](expr.args, scope);
>     } else {
>       let op = evaluate(operator, scope);
>       if (typeof op == "function") {
>         return op(...args.map(arg => evaluate(arg, scope)));
>       } else {
>         throw new TypeError("Applying a non-function.");
>       }
>     }
>   }
> }
> ```

### ◼️ Special Forms

> The `=` operator returns the value that was assigned.

> `if` operator
> ```javascript
> specialForms.if = (args, scope) => {
>   if (args.length != 3) {
>     throw new SyntaxError("Wrong number of args to if");
>   } else if (evaluate(args[0], scope) !== false) {
>     return evaluate(args[1], scope);
>   } else {
>     return evaluate(args[2], scope);
>   }
> };
> ```

> `while` operator
> ```javascript
> specialForms.while = (args, scope) => {
>   if (args.length != 2) {
>     throw new SyntaxError("Wrong number of args to while");
>   }
>   while (evaluate(args[0], scope) !== false) {
>     evaluate(args[1], scope);
>   }
> 
>   // Since undefined does not exist in Egg, we return false,
>   // for lack of a meaningful result.
>   return false;
> };
> ```

> `do` operator
> ```javascript
> specialForms.do = (args, scope) => {
>   let value = false;
>   for (let arg of args) {
>     value = evaluate(arg, scope);
>   }
>   return value;
> };
> ```

> `define` operator
> ```javascript
> specialForms.define = (args, scope) => {
>   if (args.length != 2 || args[0].type != "word") {
>     throw new SyntaxError("Incorrect use of define");
>   }
>   let value = evaluate(args[1], scope);
>   scope[args[0].name] = value;
>   return value;
> };
> ```

### ◼️ The Environment

> Boolean bindings
> ```javascript
> const topScope = Object.create(null);
> 
> topScope.true = true;
> topScope.false = false;
> ```

> Basic arithmetic and comparison operators. In the interest of keeping the code short, we’ll use `Function` to synthesize a bunch of operator functions in a loop.
> ```javascript
> for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
>   topScope[op] = Function("a, b", `return a ${op} b;`);
> }
> ```

> Print binding
> ```javascript
> topScope.print = value => {
>   console.log(value);
>   return value;
> };
> ```

### ◼️ Functions

> Add a `fun` consntruct, which treats its last argument as the function's body and uses all arguments before that as the names of the function's parameters.
> ```javascript
> specialForms.fun = (args, scope) => {
>   if (!args.length) {
>     throw new SyntaxError("Functions need a body");
>   }
>   let body = args[args.length - 1];
>   let params = args.slice(0, args.length - 1).map(expr => {
>     if (expr.type != "word") {
>       throw new SyntaxError("Parameter names must be words");
>     }
>     return expr.name;
>   });
> 
>   return function() {
>     if (arguments.length != params.length) {
>       throw new TypeError("Wrong number of arguments");
>     }
>     let localScope = Object.create(scope);
>     for (let i = 0; i < arguments.length; i++) {
>       localScope[params[i]] = arguments[i];
>     }
>     return evaluate(body, localScope);
>   };
> };
> ```

**◼️ Compilation**

**◼️ Cheating**

# Chapter 13: JavaScript and the Browser (Coming soon)
# Chapter 14: The Document Object Model (Coming soon)
# Chapter 15: Handling Events (Coming soon)
# Chapter 16: Project: A Platform Game (Coming soon)
# Chapter 17: Drawing on Canvas (Coming soon)
# Chapter 18: HTTP and Forms (Coming soon)
# Chapter 19: Project: A Pixel Art Editor (Coming soon)
# Chapter 20: Node.js (Coming soon)
# Chapter 21: Project: Skill-Sharing Website  (Coming soon)
