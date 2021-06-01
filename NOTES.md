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

#### ◼️ Control Flow**
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

#### ◼️ Further arrayology**
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

#### ◼️ Strings and Character Codes**
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
