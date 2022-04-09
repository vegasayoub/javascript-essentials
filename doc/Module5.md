# Module 5 - Functions

After completing Module 5, the student will:

 * be able to declare and call functions;
 * know how to pass call arguments to a function and return the result of its operation from it;
 * understand the concept of a local variable and the effect of shadowing variables with the same names within a function;
 * know that a function in JS is a first-class member and be able to take advantage of this by declaring functions using function expressions and passing functions as arguments to calls of other functions;
 * understand the concept of recursion in the context of functions and be able to solve simple programming problems by using it;
 * have a basic understanding of the callback function and be able to use it asynchronously in conjunction with the setTimeout and setInterval methods;
 * have a clear understanding of arrow function notation and be able to write alternative functions as regular declarations, function expressions, and arrow functions.


## Section 1 - Functions – Part 1

Topics in this section:

 * What are functions?
 * Declaring functions
 * Calling functions
 * Local variables
 * The return statement
 * Function parameters
 * Shadowing
 * Parameter validation


### Functions

We talked about functions in the chapter on variables, when we discussed the scope of visibility of local variables declared with the keyword var. We learned on this occasion what functions are, but in this chapter, we will take a much closer look at them, expanding our knowledge on the subject.

So what is a function? It's a separated piece of code, constituting a certain closed logical whole, intended to perform a specific task. We usually assign a name to such a separated piece of code. With this name, we can call it (execute it) many times in different places of the program.

This is a simplification, because there are functions that do not have a name, for example, anonymous functions (we will talk about them later). For the time being, let’s assume that a function has a name, which we give when declaring it. This name is used when calling the function, in other words, when running the code contained in it.

The declaration and calling of functions are independent of each other, which we will see in a moment.


#### Why do we use functions?

There are many reasons, one of the most important being to divide the code into some logically independent parts. Such modularity increases the readability of the code – it is easier to write and analyze a long program that is not a sequence of single instructions. It also allows for easy testing of code fragments closed in functions independently of the rest of the program.

A very important reason for using a function is the reuse of code – if you repeat the same sequence of instructions in the program in many places, you can close this sequence in a function, and in those places you only have to call the function.

Apart from reducing the amount of code in a program (thus increasing its readability), it also means that if you need to make some changes in this sequence of instructions, you have to do it only once, inside the function. If we didn’t use a function in this situation, we would have to make changes independently in every place where this sequence of instructions appeared in the code.

Let's take a look at a simple program, written without any functions.

```
let temperatures;
let sum;
let meanTemp;

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log('mean: ${meanTemp}'); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log('mean: ${meanTemp}'); // -> mean: 18.083333333333332
```

The program will calculate and display the mean daily temperature on the basis of the provided data (24 temperature measurements, in hourly intervals, starting from midnight). In the program, we declare the variable temperatures, which will be a 24-element table containing the obtained measurements.

We have measurements for two successive days, for which we will make calculations. The mean temperature is of course calculated by summing up all values and dividing the result by their number.

At first glance, you can see that the code fragment responsible for a calculation is repeated twice. In two places of the program, we use the same sequence of instructions, so it would be worth thinking about creating a function out of them.

We will do it in several stages, introducing some new concepts related to functions. Let's start with a function declaration.


### Declaring functions

As with variables, functions need to be declared before we can use them. The syntax for function declaration looks like this:

```
function functionName() {
   code
}
```

This type of function declaration in JavaScript is called a **function statement**. A function statement starts with the `function` keyword followed by the function name. Function names need to follow the same rules as variable names, and should also be meaningful. After the function name, there are parentheses that can optionally have function parameters, which we’ll discuss in a while. After the parentheses comes the function body, which is made from any number of statements (a code block).

So let's try to declare a function according to these rules, which will contain a fragment of our program code calculating the mean daily temperature. We will call it `getMeanTemp`. For now, the function will use variables, declared outside of it (in the surrounding context). In fact, it is practically never done that way, but we will deal with it at one of the subsequent stages.

```
let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}
```

We have declared our function by giving it a name and defining a sequence of instructions that it should perform. However, if you tried to execute this code, you would not see any effect. Why? Because declaring a function is only a preparation. In order to execute this code, we have to **call** the function.


### Calling functions

To call a function, we need to write a function name and follow it with parentheses. Our complete example should therefore look like this:

```
let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log('mean: ${meanTemp}'); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log('mean: ${meanTemp}'); // -> mean: 18.083333333333332
```

At the beginning of the program, after the variable declaration, we have the getMeanTemp function declaration. In the later part of the code, we call it twice by writing getMeanTemp(). Each call causes the program to jump into the function code, execute its instructions and return to the next instruction after the function call. Simple, isn't it?

Usually, functions are declared before they are called, mostly at the beginning of the code. However, this is only a good practice, which increases the readability of the code, not a JavaScript syntax requirement. Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.

So the code:

```
let name = Alice

function showName() {
    console.log(name);
}

showName(); // -> Alice
```

will work exactly the same as:

```
let name = Alice

showName(); // -> Alice


function showName() {
    console.log(name);
}
```

So we already know what a declaration and a function call are. It is time to take a closer look at its contents. Let's start with the variables we use in it.


### Functions - Local variables

Let's try to make a small change to our program calculating the mean temperature. Do you remember what local variables are? This is how we call the variables that are declared and used in some limited scope and are not visible in the whole program, which means that we can only use them inside that particular scope. Variables declared with the let keyword are local inside the code block (i.e. inside the range limited by curly brackets), while variables declared with the var keyword are local inside the function block. So if you declare a variable inside a function block, whether using `let` or var, it will only be visible (and usable) inside the function block. This is very useful, because usually the variables you use inside a function are not needed outside of it.

In our code, an example of such a variable is sum. Although we have declared it outside the `getMeanTemp` function (it is a global variable), we only refer to it inside the function. A global declaration is therefore unnecessary. Let's put it in order, declaring sum locally.

```
function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}
```

The behavior of the program is the same, but the code has gained some clarity. The sum variable is now local, it can only be used inside the `getMeanTemp` function (which is enough for us, because it was not needed for anything outside the function). In general, we should strive to keep the function code as separate from the surrounding context as possible, among other things by not using global variables inside it. In our example, there are two more such variables: temperatures and meanTemp. The latter, meanTemp, is used inside the function to store and return the calculated result. Let's deal with it.


### The return statement

Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to store in some variable. The return keyword comes to help us in this case. What exactly is `return` for?

 * First, it causes the function to end exactly where this word occurs, even if there are further instructions.
 * Second, it allows us to return a given value from inside the function to the place where it was called.

Let's move away for a moment from our example with mean temperature calculation and play with a slightly simpler code. The `showMsg` function contains only two `console.logs` separated by return.

```
function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}

showMsg(); // -> message 1
```

As expected, the call ends up displaying only the first message "message 1", then the `return` interrupts the function. In practice, using `return` here would not make much sense. It causes the `console.log("message 2")` to never be called. So it would be easier not to write a second `console.log` call at all.

However, using the conditional instructions, we can, for example, react to errors inside the function, and in certain situations interrupt the function immediately.

As we said, `return` allows us not only to terminate a function. If we place some expression (literal, variable, function call) immediately after the return keyword, the value of this expression will be returned by the completed function to the place where it was called. You can then, for example, assign the returned value to a variable. Let's take a look at an example of the getTrue function.

In the example, we declare a simple `getTrue` function, which always returns true. Pay attention to the function call – we store the result of this call in the test variable. As you can guess, this variable will have the true value.

```
function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true
```

Let's go back to the example with mean temperatures. Until now, the calculations made inside the `getMeanTemp` function have been performed on the global variable `meanTemp`. We will change this. Inside the function, we will declare the local `result` variable, which will contain the calculated result, and use `return` to return it. The global variable `meanTemp` will contain the result of the function call, that is, the first time, `16.666666666666668` and the second time, `18.083333333333332`.

```
let temperatures;
let meanTemp;

function getMeanTemp() {
    let sum = 0;
    let result;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    result = sum / temperatures.length;
    return result;  
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log('mean: ${meanTemp}');

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log('mean: ${meanTemp}');
```

The `result` variable is actually only used to temporarily store the value to be returned. So we can simplify the function code even more. We will skip the `result` variable by placing the appropriate operation directly after `return`.

```
function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}
```

The `meanTemp` variable has also become slightly redundant. We store the result of the function call in it, which is then displayed on the console. This can also be simplified by placing the `getMeanTemp` function call directly in `console.logp` (without the use of the `meanTemp` variable).

```
let temperatures;

function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log('mean: ${getMeanTemp()}');

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log('mean: ${getMeanTemp()}');
```

Our `getMeanTemp` is slowly beginning to look like a normal function. It is a logically independent piece of code, it returns a calculated value, and it operates on local variables. There is one small problem left to solve. We count the mean using the data contained in the global variable temperatures. And the function should be independent of what is happening outside it. At the same time, it should allow us to calculate the mean value for different data. How do we reconcile these two conflicting demands? The function parameters are used for this.


### Parameters

First of all, the use of parameters in functions is optional. There may be functions that do not have parameters, as we have seen in our previous examples, just as there may be functions that do not return values. However, most often we create functions that have defined parameters and return values.

In JavaScript, a function’s parameters appear in its declaration. These are names separated by commas, placed in parentheses after the function name. Each parameter inside a function will be treated as a local variable. A function whose definition specifies the parameters must be invoked in an appropriate way. When such a function is called, the values (literals, variables, function calls) should be placed in parentheses after its name, and are treated as parameters inside the function. The values given during a call are called arguments. Arguments, if there is more than one, are separated by commas and must be passed in the same order as the parameters we define in the function declaration.

Let's look at a simple function that adds two values. We will call it add.

```
function add(first, second) {
    return first + second;
}
```

In the function declaration, in parentheses, we put two parameters: `first` and `second`. The names of the parameters, just like the variables, should be related to their purpose – in this case, we have done it differently to emphasize that the order of the parameters is important. Inside the add function, these parameters are treated as local variables, whose values will be given when the function is called.

```
let result = add(5, 7));
console.log(result); // -> 12
```

In the example call, we pass the arguments `5` and `7` to the function. Thus, during the function operation, the `first` parameter has a value of `5` and the `second` parameter has a value of `7`. The function returns the value `12` to the result variable.

You can pass any type of data as arguments to the function, both simple and complex. Let's write the `getElement` function, which will return the selected element from the array, with the array and index of the element being the function's parameters.

```
function getElement(elements, index) {
    return elements[index];
}
```

Let's call it with sample arguments:

```
let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve
```

Let's go back to the example with mean temperature. The `getMeanTemp` function will take one parameter – temperatures. At the same time, we will remove the global variable with this name from the program and create two others, `day1` and `day2`, which will contain the measurement data. These data will be passed on to the function.

```
function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log('mean: ${getMeanTemp(day1)}'); // -> mean: 16.666666666666668

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log('mean: ${getMeanTemp(day2)}'); // -> mean: 18.083333333333332
```

The first time the `getMeanTemp` function is called, the `day1` variable is passed on to the `getMeanTemp` function as an argument. The calculations performed inside the function using the temperatures parameter will therefore be based on the values from the day1 variable. In the second call, we pass another array to the function, stored in the `day2` variable.

You can probably already point out one more thing: when calling the `console.log` method (a function related to the console object) we also pass an argument to it – a string to be displayed on the console. This means that we have been using the parameters of the function since the beginning of the course.


### Shadowing

As we mentioned earlier, the parameters are treated inside the function as local variables. And just like the local variables explicitly declared inside a function, they shadow the global variables of the same name (or more generally, variables from the outer scope). Let's go back for a moment to the example with adding numbers. The `add` function has two parameters: `first` and `second`. At the same time, we will declare, out of the function, global variables named `first`, `second`, `third`, and `fourth`.

If inside the function, we refer to the variable:

 * `first`, it will be treated as the parameter with such a name that shadows the `first` global variable (i.e. we will operate on the value passed as the first argument)
 * `second`, it will also be treated as the function parameter (the value passed as the second argument)
 * `third`, it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter with that name that would shadow it;
 * `fourth`, it will be treated as global, the same as `third`.

Of course, outside the function, each of these names will refer to global variables.

```
function add(first, second) {
return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120
```

Analyze the example carefully, writing down the specific values that are passed on to the add function in each of the four calls.

Also try to run and analyze one more simple example, in which you can shadow variables with both parameters and local variables.

```
let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
```


## Section 2 - Functions – Part 2

Topics in this section:

 * Recursion
 * Functions as first-class members
 * Function expressions
 * Synchronous callbacks
 * Asynchronous callbacks
 * Arrow functions


### Parameters validation

Remember how we said that we sometimes use the return keyword to interrupt functions in the case of errors? A good example is the validation of function parameters.

Let's go back to the example with the `getMeanTemp` function. The last version we wrote needs an array of numbers as an argument. Before starting the calculation, we can check if the value passed to it is actually an array.

```
function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
```


### Recursion

During your math lessons, you probably came across the concept of factorials. A factorial is a function, indicated by an exclamation mark in mathematical notation. We pass an integer to this function and its result is obtained by multiplying all integers from the number 1 to the number given as an argument. Formally, you define a factorial as follows:

> n!=n∙(n-1)∙(n-2)∙… ∙2∙1

So, for example, the factorial of 6 is:

> 6!=6∙5∙4∙3 ∙2∙1=720

Let's try to write a function that will calculate the factorial from the given number. It will take the parameter n and return the calculated value.

```
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720
```

In this case, we use the iterative approach to calculate the factorial, in other words, we use a loop in which, during each iteration we multiply the previous result by another element of the sequence. After the first iteration, the result is 6, after the second, 30, after the third, 120, and so on. The iterations are repeated to the last significant element of the sequence, that is, to the value 2 (hence the condition of ending the loop n > 1).

However, the definition of a factorial can be written in a slightly different way. It will be the factorial of the previous element n - 1 multiplied by n.

For example, 6! is 5! multiplied by 6. Such a factorial definition uses the recursion, i.e. referring a function to itself (but with a different argument). A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions and present them in an elegant form. We can also successfully use recursion in programming.

Let's declare the `factorial` function again, this time using recursion.

```
function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720
```

In order to get a shorter, more compact code, instead of an if conditional instruction, we use the ternary conditional operator. In it, we check if the argument n is greater than 1. Depending on that, we return either the result of multiplying the number n by the result of the factorial(n – 1) call, or the value 1. The figure below shows a sequence of factorial function calls starting from a call for the value 6 (the arrows show where the value from the called function is returned).

Recursion is commonly used in programming. However, as with any solution, recursion must be handled with care. We shouldn't use it where we can't estimate the number of embedded calls. We should also be very careful in formulating the condition that will interrupt the function sequence calls – errors can cause the program to suspend.


### Functions as first-class members

In JavaScript, functions are first-class members. This term means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions. For example, we can declare the showMessage function and then store it in the variable `sm`.

```
function showMessage(message) {
    console.log('Message: ${message}');
}

let sm = showMessage;
```

We can store any function that is accessible in this scope in a variable and use a function call operator () to execute it. We can check that the sm variable is now a function by using the typeof operator.

```
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function
```

But it’s important to remember that when assigning a function to a variable, we don't use a function call operator, as this would execute the function and assign the result of the function to a variable, and not to the function itself.

```
function doNothing() {
    return undefined;
}

let a = doNothing(); // assign result of function call
let b = doNothing;   // assign a function

console.log(typeof a); // -> undefined
console.log(typeof b); // -> function
```

In the example, the result of the doNothing function call (i.e. the undefined value returned by the function) is stored in the a variable, while the doNothing function itself is stored in the b variable (or more precisely, a reference to the function is stored in the b variable).

This property is especially useful when passing the function as a call parameter to other functions, which we will soon learn more about. For now, let's test that something like this is actually feasible.

```
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200
```

The operation function takes as its first argument the function (parameter func) and calls it with the other two arguments passed (parameters first and second).


### Function expressions

To store a function in a variable or pass it as an argument to call a function, you do not necessarily have to declare it previously and use its name. Let's go back to our example with the add function:

```
function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20));     // -> 30
console.log(add(10, 20));   // -> 30
```

We first declare the add function, and then store it in the variable myAdd. We can call the same function using both the name add and the variable myAdd. We can shorten this notation and declare the function by storing it in a variable.

```
let myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30
```

In the example, we again declare the add function, and at the same time store it in the myAdd variable. This form of defining a function is called function expression. In this case, it is specifically a named function expression, because the function has a name (add). If there is a named function expression, there will probably also be an unnamed, or precisely, an anonymous function expression. In fact, simply remove the name following the function keyword to change the function from named to anonymous.

```
let myAdd = function(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
```

Let's go back to the concept of anonymous functions. It may seem a little incomprehensible when you use a name (although it is a variable name) to refer to a function. In this case, it's about anonymity, i.e. the lack of a name, in the very definition of a function. This will be much more evident when passing a function as a call parameter to another function. Let's look at the example:

```
function operation(func, first, second) {
    return func(first, second);
}

let myAdd = function(a, b) {
    return a + b;
}

console.log(operation(myAdd, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200
```

In the first step, we declare the function operation (it is a named function, and we use the function statement here, so we will refer to the function by its name). In the next step, we define an anonymous function, which we store in the `myAdd` variable (we use a function expression). We call the operation function, passing the `myAdd` function and values 10 and 20 as arguments.

The result is easy to predict. It only gets interesting when we call the operation `function` again. This time, the first argument is the anonymous function (again the function expression), which is defined directly in an operation call. The result is a multiplication, although the name of the new function (or the variable in which it could be placed) will not appear anywhere. The function has been defined only to pass it once into the operation function. At first glance, it may look like a completely useless mechanism, but in the real world, it is used very often.


### Callbacks

Functions that are passed as arguments to other functions may seem quite exotic and not very helpful, but in fact, they are a very important part of programming. So important that they even get their own name. They are **callback functions**. As we have seen in previous examples, a function that receives a callback as an argument can call it at any time. Importantly, in our examples, the callback is run synchronously, that is, it is executed in a strictly defined order resulting from where it is placed among the other instructions.

#### Synchronous callbacks

**Synchronous** execution is the most natural way to see how the program works. Subsequent instructions are executed in the order in which they are placed in the code. If you call a function, the instructions in it will be executed at the time of the call. If we pass another function to this function as an argument, and we call it inside an outer function as well, then all instructions will keep their natural order.

```
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');
```

Execution of the above code will cause the console to print out the following text in this exact order:

```
test 1
outer 1
inner 1
outer 2
test 2
```

Therefore, the order of actions resulting from the order of calling the commands and functions is maintained. However, this order may be disturbed under certain special circumstances.

#### Asynchronous callbacks

**Asynchronous** operation of programs is a rather complex topic, strongly dependent on a particular programming language, and often also on the environment.

In the case of client-side JavaScript running in a browser, it is limited to event-based programming, i.e. the asynchronous response to certain events. An event can be a signal sent by a timer, a user action (e.g. pressing a key or clicking on a selected interface element), or information about receiving data from the server.

Using appropriate functions, we combine a specific type of event with a selected callback function, which will be called when the event occurs.

One of the simplest cases when there is an asynchronous execution of instructions is the use of the `setTimeout` function. This function takes another function (a callback) and the time expressed in milliseconds as arguments. The callback function is executed after the specified time, and meanwhile, the next program instruction (placed in the code after `setTimeout`) will be executed.

Thus, the moment the callback function is called is not determined by its order, but by an arbitrarily imposed delay. The delay only applies to the callback function given to `setTimeout`, while the rest of the code is still executed synchronously.

Let's modify the previous example a bit. In the outer function, we do not call `callback()` immediately, but pass it to `setTimeout`, which executes it with a delay of 1000 milliseconds (one second).

```
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');
```

The result is actually a bit different than we observed in the previous example, as this time the following sequence of messages will appear on the console (the last with a delay of one second):

```
test 1
outer 1
outer 2
test 2
...
inner 1
```

### `setTimeout` and `setInterval` functions

The `setTimeout` function is used when you want to cause a delayed action. A similar function is `setInterval`. This time, the action is also performed with a delay, but periodically, so it is repeated at fixed intervals. In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a setInterval call is called.

Interestingly, the `setInterval` function returns an identifier during the call, which can be used to remove the timer used in it (and consequently to stop the cyclical callback function call). We will do this in the next example. First, we run `setInterval`, which will call the callback function (i.e. the `inner` function) in one-second intervals. Then we call `setTimeout`, which will turn off the timer associated with the previously called `setInterval` after 5.5 seconds. As a result, the `inner` function should be called five times. In the meantime, the rest of the program will be executed ...

```
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');

    setTimeout(function(){
        clearInterval(timerId);
    }, 5500);
}

console.log('test 1');
outer(inner);
console.log('test 2');
```

The result of the program execution should be the following messages, which will appear in the console:

```
test 1
outer 1
outer 2
test 2
...
inner 1
inner 1
inner 1
inner 1
inner 1
```

Usually, however, asynchronous function calls are related to slightly different situations. They are determined by events not related to timers, but rather generated outside of the program. As we have said before, they can be, for example, actions performed by the user, such as a mouse click on an interface element on a page. Scenarios of this type will be discussed in detail in the next part of the course, devoted to the integration of client-side JavaScript with websites and the DOM (the Document Object Model).

However, we will try to analyze an example that will illustrate the situation in a somewhat simplified form.

If we run the JavaScript code on the client side, in the browser, it is always associated with the website. The window in which this page is located is represented in the client-side JavaScript by a global window variable. The window object has a method (or its own function) named addEventListener. This function allows you to register a certain action to be performed in response to a window-related event. Such an event can be a "click", which is a single mouse click on any place on the page (there is a limited set of named events associated with a particular object, to which it can react). The action to be taken is passed to the addEventListener method as a callback function.

```
window.addEventListener("click", function() {
    console.log("clicked!");
});
```

Try to execute the sample code. Nothing special should happen immediately after it is started. Only when you click anywhere on the page should a message appear on the console: "clicked!". Our function is not called until the "click" event occurs, which is absolutely asynchronous. In the meantime, between subsequent clicks, the rest of the program could be executed, if we had a whim to write it.

In fact, it is not a very good idea to connect a click response to a window object. Most often, such actions are associated with specific elements of the interface (buttons, checkboxes, etc.) which allow for their differentiation. However, as we have already said, we will come back to this topic in the next part of the course – this is only to demonstrate a function call with a user-generated event.


### Arrow functions

An **arrow function** is a shorter form of a function expression. An arrow function expression is composed of: parentheses containing zero to multiple parameters (if exactly one parameter is present, the parentheses can be omitted); an arrow that looks like this `"=>";` and the body of the function, which can be surrounded by curly brackets if the body is longer. If an arrow function has only one statement and returns its value, we can omit the `return` keyword, as it will be implicitly added. For example, the function add, which we already know:

```
let add = function(a, b) {
    return a + b;
}
console.log(add(10, 20)); // -> 30
```

can be written as follows:

```
let add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // -> 30
```

or simplified even more (the function has only one statement, whose value returns):

```
let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30
```

If the arrow function takes exactly one parameter, the parentheses may be omitted. Let's go back to the examples with the recursive `factorial` function, which takes exactly one parameter, `n`. In the previous example, we declared it using the function statement:

```
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120
```

Using the arrow function expression, we can write it in an even more compact form. Note that this time, the parameter is not given in parentheses (again,– if the arrow function takes exactly one parameter, the parentheses can be omitted). Since the function returns the result of exactly one statement, the `return` keyword can also be omitted.

```
let factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5)); // -> 120
```

The arrow expression is mainly used for short functions, often anonymous, which can be presented as even more compact in this form. They differ from ordinary functions by one more thing apart from the form of notation, in other words, how the keyword `this` is interpreted inside them. However, this is a topic related to more advanced object-oriented programming, which is far beyond the scope of this course. We can therefore assume that both ways of defining functions, i.e. function expression and arrow function expression, allow you to define identically working functions.

One typical example of using arrow functions is the `forEach` method, available in `Array` type data. We have learned several ways of passing through array elements, using different types of loops. The `forEach` method is another, and frankly speaking, currently the most used one. This method takes as an argument ... a function.

This function will be called each time for each element of the array. We can create any function for this purpose. There is one condition, which is that it must have at least one parameter, which will be treated as a visited element of the array (the syntax of this function may be a bit more complex, but we will explain it in the next part of the course). Let's look at a simple example:

```
let names = ['Alice', 'Eve', 'John'];
function showName(element) {
    console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John
```

The `showName` function has been passed as a call argument to the `forEach` method of the names array. Therefore, `showName` will be called three times, for each element of the names array, and in each call its parameter will be equal to the successive name, i.e. in turn: `Alice`, `Eve` and `John`. The only thing `showName` has to do is to display the received `element` (name).

The same effect can be achieved by passing an anonymous arrow function to the forEach method. We do not even store it in a variable, because we assume that we will use it only here and will not refer to it again.

### Summary

Functions are one of the most fundamental elements of programming in most languages and it is hard to imagine writing any program without them. In our course, we have actually been using them from the very beginning – after all, the log method of the console object (that is simply console.log) is also a function. So we use functions created and provided by other programmers. In the case of console.log, it is actually an integral part of the language provided as a function, but there are many functions that provide some new functionality and are written by third parties (companies, organizations, or private developers). Such functions are usually made available in the form of libraries (i.e. sets of functions), which are dedicated to solving a specific class of problems, for example, Leaflet (maps), D3.js (data visualization), or jQuery (DOM manipulation).

It's one thing to use the ready-made functions, but it's quite another to write them for your own needs. Functions allow, among other things, for easier logical division of the program, reusing the same code and testing selected parts of it. In this chapter, you have become acquainted with different methods of defining functions (classical declaration using the function statement, function expressions, or arrow function expressions), passing parameters to them and returning values from them. You have seen the difference between named and anonymous functions, become acquainted with the concept of callback functions, and seen how we understand recursion in a function. So if necessary, you will be able not only to write your own function, but also to customize the way you define and use it. Of course, this chapter does not exhaust the topic of functions in JavaScript, but it is a good basis for further exercises that will allow you to start using functions while programming.