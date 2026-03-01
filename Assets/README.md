
 1) What is the difference between `null` and `undefined`?

Answer: Undefined means a variable has been declared but hasn’t been assigned a value yet  and JavaScript sets this automatically. On the other hand, null means a variable was intentionally set to have no value which I can assign by myself.

2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

Answer: map() is used to transform an array and returns a new array with the modified values.ForEach() just loops through the array to execute a function and does not return anything.

 3) What is the difference between `==` and `===`?

 Answer: (==) compares values after converting their types if needed, which can lead to unexpected results. (===)  compares both value and type exactly as they are, with no type conversion, so it’s safer and more predictable.

 4) What is the significance of `async`/`await` in fetching API data?

 Answer: async/await makes asynchronous API calls easier to read and manage by allowing us to write asynchronous code that looks like synchronous code. It waits for a Promise (like a fetch request) to resolve before moving to the next line, making error handling and data handling cleaner and more structured.

 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

 Answer: Scope means where a variable can be accessed in our code.

Global scope → variable is accessible anywhere in the program.

Function scope → variable is accessible only inside that function.

Block scope → variable is accessible only inside a block { } (used with let and const not var).