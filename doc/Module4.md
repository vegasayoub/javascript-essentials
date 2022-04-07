# Module 4 - Control Flow – Conditional Execution and Loops

After completing Module 4, the student will:

 * be able to force conditional execution of a group of statements (make decisions and branch the flow) using if-else and switch commands;
 * be able to force a group of statements to repeat in a loop using the for, while, and do-while commands, using both dependent and independent conditions on the number of iterations;
 * understand and be able to use loop-specific break and continue instructions;
 * be able to use the for-in statement to iterate over the properties of an object;
 * be able to use the for-of statement to walk through the elements of an array.


## Section 1 - Conditional execution

Topics in this section:

 * What is conditional execution?
 * The if statement
 * The if–else statement
 * The if–else–if statement
 * The conditional operator
 * The switch–case statement


### Conditional execution

Conditional execution, or control flow statements, have been mentioned a few times already, and now it’s time to examine them in detail. This is a very important topic, as control flow statements are essential not only to JavaScript, but to programming in general. Without the ability to react and change its behavior, any code would always do the same thing. Of course, this is sometimes exactly what we need, but most of the time we need responsiveness and the ability to handle different situations in the code.

We can imagine our program as a tree that starts from the trunk and gradually splits it into subsequent branches. The trunk is the beginning of the program, and each conditional instruction is a reflection of a new branch. Conditional instructions are executed on the basis of the user's decision, results of previous calculations, or other information that the program will take into account. JavaScript provides a few ways to branch code execution, based on arbitrary conditions. From this chapter on, there will be more tasks and code that you will need to write, as now you should have almost all the necessary tools to hand.

#### The if statement

The if statement is the first and simplest control flow instruction available in JavaScript. It has a few forms, but in its basic form, it checks a given condition, and depending on its Boolean value, either executes a block of code, or skips it. The syntax looks like this:

```
if (condition) {
    block of code
}
```

The `if` keyword needs to be followed by the expression in parentheses, which will be evaluated to the Boolean, and if the result is true, the block of code that follows the conditional expression is executed. If the expression evaluates to false, the block of code will NOT be executed. The code block should be separated using curly brackets.

Let's start with a simple example, in which, in addition to the conditional instruction, we will use the recently learned dialog boxes:

```
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
```

In the example, an alert with the message "User ready!" will show only when the user closes the confirm dialog box by clicking the OK button. But if the user closes the "Are you ready?" confirmation box without clicking OK, the "User ready!" message will never be shown.

In the example, there is one line inside the if block of code, which means that we could omit the curly brackets around that block. However, while it may look tempting to do so, it’s always better to use curly brackets. That way, the code is cleaner and easier to read, and it also saves you from a very common error that happens when trying to add another instruction inside an if block and forgetting to add brackets.

In the example below, we probably forgot to close the two commands inside the block directly behind the if command. Check how this piece of code will behave when you run it, depending on your answer to the question "Are you ready?":

```
let isUserReady = confirm("Are you ready?");

if (isUserReady)
    console.log("User ready!");
    alert("User ready!");
```

Fix this code by closing both commands (console.log and alert) in the block. Check how this will affect the program.

> We talked about code blocks, and more specifically, their scope, in the section devoted to variables. If you don't remember this topic, it would be good for you to return to it for a while. As a quick reminder – we use program blocks whenever, for some reason, we want to separate a piece of code to form a logical whole. Conditional instructions are a good example. Using the if instruction and closing the selected instructions in the block (using curly brackets), we can cause them to be executed only when certain circumstances occur (i.e. the condition we’ve invented is fulfilled). Remember that variables and constants declared using let and const inside a block are local, that is, their scope is limited to that particular block. Also make sure to use indentations in the blocks to make the code more readable. In other words, move the instructions in them to the right.

As we have already mentioned, by using data blocks, we can make the constants and variables declared inside them local (not visible to the outside). We discussed this in detail in the variable section, so here we will only present a practical example to remind you:

```
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
```

The total variable is declared inside the block. We can put a value to it, we can read it – but all this only inside the block. Attempting to refer to it outside the block will end in an error. The interpreter will inform us that it does not know such a variable.

This is a good moment to remind you of logical and comparison operations, as they’re most commonly used as conditions, especially in more complex situations. Let's take a look at the example:

```
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost);
```

In this example, to set the `shippingCost` to zero, the userAge needs to be over 21. The second if is calculated and needs the `cartValue` to be over or equal to 300, or the points to be greater than or equal to 500.

Another way to write the same thing is to use the logical AND operator. We can now remove one if instruction and describe everything as one, more complex condition. Please note that we used additional parentheses to group the selected logical operations. This will allow us to force their execution precedence.

```
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}
```

Here the condition will be evaluated to true when:

 * userAge is greater than 21 AND;
 * cartValue is greater than or equal to 300 OR points is greater than or equal to 500.

So, we need to have the first condition met, and at least one from the second or third conditions.

#### The `if ... else` statement

The if statement is very handy indeed, but what if we also want to execute some code when a given condition is not met? We could of course just use another if statement and change the condition, as shown in the example:

```
let isUserReady = confirm("Are you ready?");

if (isUserReady) {
    console.log("User ready!");
}

if (isUserReady == false) {
    console.log("User not ready!");
}
```

This will work as expected, but it doesn't look very good. What if in the future we have to change this condition? Will we remember to change it in both places? This is a possible future logic error. So what can we do? We can use an `else` keyword.

The `else` keyword is an optional part of the if statement, and it allows us to add a second code block that will be executed only when the initial condition is NOT met. Both blocks of code are separated using the else keyword.

So the `if ... else` syntax looks like this:

```
if (condition) {
  condition - true code
} else {
  condition - false code
}
```

Using the new syntax, we can rewrite our previous example:

```
let isUserReady = confirm("Are you ready?");

if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}
```

Now we have only one condition, and we’re sure that one of the two code blocks will be executed. Such a structure is used very often and is especially useful when we have two alternative versions of the code.


#### The `if … else … if` statement

Both `if` and `if … else` statements give us great flexibility in how code can behave in relation to anything else. But branching the code execution flow only to two branches is sometimes not enough. There’s a simple solution to this in JavaScript – we can nest `if ... else` statements. How does this work? An else segment can have an `if` or `if … else` statement inside it, and it’s possible to nest any number of if … else statements in this way if needed.

The syntax for this looks like this:

```
if (conditions_1) {
  code
} else if (condition_2) {
  code
} else if (condition_3) {
  code
} else {
  code
}
```

Let's look at a simple example where we use such a "multi-level" `if`:

```
let number = prompt("Enter a number", 0);

if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}
```

In the code visible in the example, only one alert will be shown, and JavaScript will stop checking conditions after the first condition that has been met.

In the next, longer example, we can see the usage of cascading ifs with elses, and also complex logical conditions. Feel free to mess around with the values assigned to the variables to see how the results change.

To summarize what’s going on, we can dissect each case separately:

 * if `userAge` is less than 21 and `hasParentsApproval` is false, the order is invalid;
 * If `userAge` is less than 21 but `hasParentsApproval` is set to true, the shippingCost will be reduced by 5;
 * If `userAge` is 65 or higher, `shippingCost` is reduced to zero;
 * If `userAge` is lower than 65, but higher than or equal to 21 AND one of the following:
    - `hasParentsApproval` is equal to true;
    - `cartValue` is greater than 300;
    - `points` is greater than 500;
    
    the `shippingCost` is reduced to zero.

In any other case, the cost remains at the default value.

After all of this, we do another check:

 * if `addInsurance` is set to true;
 * AND in addition `orderIsValid`;
 * AND `hasPromoCode` is not true, then we add INSURANCE_COST to the shippingValue.

In the end, we display the shippingCost if the order is valid, and the message if it is not.

Take your time with this example, and play with the values to understand what is happening and how.


#### Conditional operator

We talked about the conditional (ternary) operator in the part of the course dedicated to operators. It allows us to perform one of two actions based on the value of the first operand. Most often it is used as an alternative to the `if ... else` instruction when you want to assign one of two values to a variable, depending on a certain condition. In such cases, it is simply shorter and a bit more readable than the `if ... else` construction. Let's look at a simple example, so far without using a conditional operator:

```
let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log('price = ${price}, shipping = ${shippingCost}'); // -> price = 100, shipping = 0
```

The same code rewritten using the conditional operator looks a bit easier. As a reminder: the first operand (before the question mark) is the condition to verify, the second operand (between the question mark and the colon) will be returned if the condition is true, and the third operand (after the colon) if the condition is false.

```
let price = 100;
let shippingCost = price > 50 ? 0 : 5;

console.log('price = ${price}, shipping = ${shippingCost}'); // -> price = 100, shipping = 0
```

The conditional operator returns the values of the second or third operand, but if they are complex expressions, it will calculate them first. You can use this fact to place the commands to be executed conditionally as these operands.

```
let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");
```

However, it would make more sense to save the same piece of code in the following form:

```
let start = confirm("Start?");
let message = start ? "Here we go!" "Aborted";
alert(message);
```

It’s possible to have longer code as operands, but it’s better to use if statements, as it is much clearer what intention the developer had when writing the code.


#### The `switch … case` statement

The last type of statement that is used for conditional code execution is a switch statement. We’re only talking about it now because, among other things, compared to the if statement, it is not a construction used especially often. It’s somewhat similar to nested if … else statements, but instead of evaluating different expressions, switch evaluates one conditional expression and then tries to match its value to one of the given cases. Here is the syntax of the switch statement:

```
switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
}
```

It starts with the `switch` keyword followed by the expression to be evaluated in parentheses. Next is the code block that has one or more case clauses (technically it’s possible to have zero cases, but this wouldn’t be very useful) followed directly by a value corresponding to this case and a colon character. After the colon, there is a block of code that will be executed when the expression is evaluated to this case value. The block of code optionally ends with the `break` keyword. All cases follow the same template.

Additionally, a special case named `default` can be present (by convention placed on the end of the switch statement; however, it isn’t required). The `default` case is executed when none of the cases matches the expression. The evaluation itself is made with a strict comparison operator `(===)` so not only must the value match, but also the type of case value and the expression.

To understand it better, run the following code:

```
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

### Summary

Control flow statements are an essential part of almost any application, and we use them to check and handle user input, values fetched from the web, or the results of almost any operation. They allow us to build flexible and reactive applications. The most universal construction is the `if ... else` statement.

However, do not forget that in some situations it will be more convenient to use a conditional operator or switch statement.

## Section 2 - Loops

Topics in this section:

 * What are loops?
 * The while loop
 * The do–while loop
 * The for loop
 * The for–of loop
 * The for–in loop
 * The break and continue statements


### What are loops?

In programming, loops are the second form of flow control statement. Together with conditional execution statements like if and switch, they allow for almost infinite freedom in how the application can work from an algorithmic point of view. While conditional statements are able to change code behavior (allowing us to decide during program execution whether a certain piece of code is to be performed or not), loops are an easy way to repeat any fragment of the code as many times as we want, or until some condition is met. There are a few types of loops in JavaScript, but we can loosely split them into two categories:

 * loops that are repeated a given number of times;
 * loops that continue until some condition is met.

### The `while` loop

So we know that loops allow us to execute a selected piece of code multiple times. But what would be the purpose of this? Imagine that in the program, we have created an array containing information about system users. If we wanted to display the name of each of them on the console, we would have to write console.log as many times as there are users. For example, for 100 users we write 100 console.log calls one under another. It would look rather weird, wouldn't it? Instead, we can use a loop that calls the same console.log command 100 times, but for each subsequent array element. Each iteration of the loop will refer to the successive user. In a moment, we will learn how to use different loops.

Let's start with an example where we do not use a loop. Our goal is to write out the consecutive numbers 0, 10, 20, 30, 40, 50, 60, 70, 80 and 90 on the console.

```
console.log(0); // -> 0
console.log(10); // -> 10
console.log(20); // -> 20
console.log(30); // -> 30
console.log(40); // -> 40
console.log(50); // -> 50
console.log(60); // -> 60
console.log(70); // -> 70
console.log(80); // -> 80
console.log(90); // -> 90
```

All in all, we have achieved our effect, but it looks a bit strange. We repeat the same command ten times, one by one. At first sight, it may seem that the commands are not exactly the same. Yes, each time we call the console.log, but each time a different literal appears as an argument: 0, 10, 20, and so on.

Let's modify the code at least to show that it's exactly the same action.

```
let n = 0;

console.log(n); // -> 0
n += 10;
console.log(n); // -> 10
n += 10;
console.log(n); // -> 20
n += 10;
console.log(n); // -> 30
n += 10;
console.log(n); // -> 40
n += 10;
console.log(n); // -> 50
n += 10;
console.log(n); // -> 60
n += 10;
console.log(n); // -> 70
n += 10;
console.log(n); // -> 80
n += 10;
console.log(n); // -> 90
n += 10;
```

We use the variable n, which we initialize with 0. Then we repeat this identical piece of code ten times: we display the current value of the n variable on the console, and then increase this value by 10.

```
console.log(n);
n += 10;
```

This is exactly the situation in which we can use a loop. Using the while loop, we rewrite our code again. We leave the declaration and initialization of the n variable unchanged. The repeating code fragment is enclosed in a separate code block, and using the word while, we specify that it is to be executed as long as the value of variable n is less than 91.

```
let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}
```

The `while` loop is so versatile that someone persistent enough could replace all other control flow instructions with while loops, even `if` statements. Of course, it would be cumbersome at best. The while loop is one of the loops that we normally use when we don't know exactly how many times something should be repeated, but we do know when to stop. The syntax of the while loop is as follows:

```
while(condition) {
    block of code
}
```

The expression in parentheses is evaluated at the beginning of each iteration of the loop. If the condition is evaluated to true, the code in the curly brackets will be executed. Then execution jumps back to the beginning of the loop, and the condition is evaluated again. The loop will iterate, and the code will be executed as long as the condition is evaluated to true. This means, of course, that with an ill-formed condition, a `while` loop can turn into an infinite loop, a loop without end. Depending on the context, that may be what we want to achieve. Almost all computer games, for example, are basically infinite loops that are repeating: reading input from the player, updating the game state, rendering on screen as many times per second as necessary. This is a big simplification, but true nonetheless.

Let's look at one more example. This time, the decision whether the loop is to end will be made by the user answering the question asked during each iteration of the loop (we will use the `confirm` dialog we recently introduced).

```
let isOver = false;
let counter = 1;

while (isOver != true) {
    let continueLoop = confirm('[${counter}] Continue the loop?');
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
```

The loop will be repeated until the `isOver` variable is set to true. In the loop, we display the question: "Continue the loop?", which is preceded by the number of the iteration (the counter variable). Note that the counter variable is not used in the while condition, as its role is only informative. Clicking on the OK button in the confirm dialog will cause the `continueLoop` variable to be set to true (otherwise it will be set to false). Based on the value from the continueLoop variable, we set a new value for the `isOver` variable. Remember that the variable that is tested in the while condition should be initialized beforehand. This is one of the most common mistakes of beginner programmers – they remember to change its value inside the loop, but forget to set its value for the first test.

The example is correct, but there is a lot of redundant code here, which is not really needed (we only did it in the first place so that we could analyze the operation of subsequent instructions in a relatively simple way). Exactly the same effect will be achieved by simplifying our code as shown below. Try to analyze exactly what the changes are about. We’ve used for this purpose, among others, the operators we recently learned.

```
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm('[${counter++}] Continue the loop?');
}
```


### The `do … while` loop

The `do ... while` loop is very similar to the plain `while` loop, the main difference being that in a while loop, the condition is checked before each iteration, and in the `do ... while` loop, the condition is checked after each iteration. This doesn’t seem like a big difference, but the consequence of this is that a `do ... while` loop code is always executed at least once before the first condition check is done, and a plain `while` may never be executed at all if the initial condition is evaluated to false at the beginning of the loop. The syntax of the `do ... while` loop looks as follows:

```
do {
    code block
} while(condition);
```

Let's rewrite our last example using `do ... while` instead of `while`. Note that this time the `isOver` variable does not need to be initialized before the loop (the condition is checked at the end of the loop, and the confirm dialog box will be called before the first test).

```
let isOver;
let counter = 1;

do {
    isOver = !confirm('[${counter++}] Continue the loop?');
} while (!isOver);
```

The behavior of the program will be identical to the previous one, in which we used while. Compare both examples, and you should easily see the differences caused by using the different loop statements.

In the next example, we demonstrate what we said earlier – a do ... while loop always iterates at least once:

```
let condition = false;

while (condition) {
    console.log("A while loop iteration."); // never executed
}

do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);
```


### The `for` loop

The for loop is part of the second type of loops, the one which is better in situations where we know how many times the loop should be executed (although this is not necessary). The syntax of the for loop is a bit more complicated and looks as follows:

```
for (initialization; condition; increment) {
    block of code
}
```

In the parentheses after the word for, we will not find a single condition this time, as was the case in the while loop. The inside of the parentheses is divided into three fields by semicolons, and each field is assigned a different meaning. In each of these fields, a statement may appear, which will be interpreted as follows in the order:

 * loop initialization statement;
 * loop condition statement;
 * loop increment statement.

All three statements are optional, but in fact we very rarely miss any of them. Let's take a closer look at them.

#### The `for` loop initialization statement

The initialization statement is executed only once, before the first loop iteration. Usually, it’s used to initialize (or declare and initialize) a variable that will be used as a loop counter. We can use any existing variable as a counter, but in general it’s good practice to declare a new one, as this makes the code cleaner and easier to read and understand. The initialization statement is optional and can be left empty, except for ending with a semicolon.

#### The `for` loop condition statement

A condition statement is an expression that is evaluated to a Boolean before each loop iteration. If this expression is evaluated to true, the loop will execute its code. In the case of the condition being evaluated to false, the loop is terminated, and no more iterations will be executed, and the code execution jumps to the first statement after this for loop. The condition statement is also optional, but if left empty, it will be assumed as always true, leading to an infinite loop if no other means of exiting the loop is used.

#### The `for` loop increment statement

The increment statement is always executed at the end of the current loop iteration, and most of the time it’s used to increment (or decrement, depending on the need) a loop counter that is used in a condition statement. It can be any expression, not only incrementation/decrementation. This can also be left empty.

It may look a bit complicated, but after the first simple example, everything should become clearer. Using the for loop, we will try to write out successive integers from 0 to 9 on the console, so we will make ten iterations:

```
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

As shown in the syntax of the for loop, there are three expressions inside the parentheses. The let i = 0 is an initialization, i < 10 is a condition, and i++ is an increment. Now let's try to rewrite the same example using the while loop:

```
let i = 0;
while (i < 10) {
    console.log(i);
i++;
}
```

In both cases (for loop and while loop), we declare and initiate variable i before the loop starts (initially set to 0). Both loops will be executed as long as condition i < 10 is fulfilled. In both loops, at the end of each iteration, the value of variable i will be increased by 1. And of course, in both loops in each iteration, the current value of variable i will be printed on the console. So you can see that the for loop actually offers just a slightly different, more consistent way of writing the same thing that you can achieve with the while loop. Such a notation is particularly useful in cases such as the one presented in the example, where we use an iteration counter (in our example, the i variable), which must be initialized and incremented (or decremented). In such a situation, everything related to the counter (initialization, loop end condition, change of counter value) is located practically in one place, which may increase the readability of the code.

A typical example of using a for loop, where we know the number of iterations in advance, is when going through the elements of an array. Let's move on to another simple example. Let's assume that we have a four-element array of integers at our disposal and our dream is to sum up all these numbers. There is nothing easier than to go through the array, taking the element one by one and adding them to the result. We just have to remember that before starting the loop, the result is 0.

```
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

Simple, right? But there is a slight awkwardness in the code. We have set the number of iterations to four. It’s true that there are exactly four elements in the array, and in our example this number does not change, but it is not a universal rule. In normal programs, arrays very often change dynamically during program execution (elements are added or removed). In this case, it is definitely better to use the array property called length (we mentioned it when discussing arrays). This property contains the current number of array elements. So our example rewritten correctly will look like this:

```
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

### Loops and arrays

Let's try to play with arrays again. This time the program will be a bit more complicated. We want the user to enter names during the program's execution (we will use the `prompt` dialog box), which will be placed in the array one by one. Entering the names will end when the Cancel button is pressed. Then we will write the entire contents of the array (i.e. all entered names) to the console.

```
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
```

The `names` array is initially empty. In each iteration of the `while` loop we call the `prompt` dialog box. If the user enters a new name and presses the OK button, this name will be entered in the local `name` variable. If the user clicks Cancel, the variable will contain `null`. So we check in the conditional instruction if the name is different from `null`. If so, the value of the name variable is attached to the end of the `names` array using the `push` method (if you do not remember it, go back to the chapter where we discussed arrays). If the name is `null`, the `isOver` variable value is changed to end the `while` loop.

After leaving the `while` loop, we go through the whole names array (using the `for` loop and the `length` property of the names array) and we display all the names placed there. In this way, we have done something absolutely new unnoticed. Using arrays, loops, and interaction with the user (`prompt` dialog box) we have created and filled in a dynamic data structure. Please note that while writing this program, it is not clear how many array elements there will be, or even what elements there will be.

Going through the elements of the array, we use an `index` variable that we initialize with the value 0 (the index of the first element in the array) and increment it by one during each iteration. This is obviously not the only approach. For example, if we wanted to go through the elements of the array in reverse order, we would initialize the index variable with the value of the largest index and decrease it by one during each iteration. There is also nothing to stop us from jumping a few elements at a time, incrementing or decrementing the index variable by a value greater than one. Take a look at the example below:

```
let values = [10, 30, 50, 100];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
}

for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}

for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}
```

### `for … of`

In addition to the regular for loop, there are two specific versions, one of which, for ... of, is dedicated for use with arrays (and other iterative structures, which are however beyond the scope of this course). In a loop of this type, we do not explicitly specify any conditions or number of iterations, as it is performed exactly as many times as there are elements in the indicated array.

Let's come back to our example from summing up numbers from the four-element array. In this example, we use a simple for loop:

```
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
```

The version of this program using the loop for ... of will look slightly different:

```
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190
```

In brackets after the word for, you will not find three fields separated by semicolons. There is a variable declaration, followed by the word of and then an array, the elements of which we will loop through (variable or literal). In our example, `for (let number of values)` means that the number variable will contain the subsequent elements of the values array in each iteration. The syntax of this loop is as follows:

```
for (variable of array) {
    block of code
}
```

In practice, much more often than different versions of the for loop, the forEach method is used to iterate through array elements. This is one of the array type methods. Its use requires the ability to write your own functions, so we will return to it in the functions section of the course.

Let's look at one more example. This time, we declare a cities array, which contains objects describing some of the biggest cities in the world. Each object contains name and population fields. Using the for ... of loop, we go through this array and display information about all cities that have more than 20 million inhabitants.

```
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log('${city.name} (${city.population})');
    }
}
```

Run the code and then experiment with the conditions (e.g. display all cities with more than 20 million inhabitants but less than 25 million, etc.).


### `for … in`

There is also a version of the `for` loop that enables us to walk through object fields. This is a _for ... in_ construction. It iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable. In the example, we use an object containing data about a user:

```
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};
```

In each loop iteration, the names of successive fields of the user object are assigned to the key variable, i.e.: name, surname, age, email. Then we write them on the console. But what if we want to retrieve the values stored in the fields with these names? In order to get access to the specified field, we use dot notation (the part of the course dedicated to data types) that is, after the name of the object, we write a dot and the field name (key). The key given in this notation is always treated as a literal. In the for ... in loop, this approach will not work, because the field name (key) is placed in a variable. Fortunately, we have an alternative solution, bracket notation. It allows you to refer to the selected object field using brackets (like in arrays). In the square bracket behind the object name, we place the field name, which can be either a literal or a variable containing that name.

```
console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin
```

Using bracket notation, we improve our example by displaying not only the keys, but also their assigned values.

```
for (let key in user) {
    console.log('${key} -> ${user[key]}');
};
```

### The break and continue statements

The `break` statement is used to terminate the execution of a loop or a switch statement. In each of these contexts, whenever the JavaScript engine encounters a `break` statement, it exits the whole loop or switch statement, and jumps to the first statement after that loop or switch.

In the example, we can see an infinite `while` loop that will be exited using `break` after the variable `i` becomes greater than or equal to 5. Such a use of `break` is only of illustrative importance, because it would make more sense to include this condition directly in the `while` construction.

```
let i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}

alert('Exited the loop with a break (${i}).');
```

Just like break, continue can be used in loops (but not in the switch statement). When used, it applies to the closest surrounding loop. The continue statement, in contrast to break, does not end the whole loop, but rather starts the next iteration of this loop. We can think of it as jumping right to the end of the current iteration.

```
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
```

The program writes numbers from 0 to 9 to the console, but skips the number 3. This happens because when `i` equals 3, the continue statement is executed, ending this iteration (and skipping the `console.log` statement) and starting another one.

Both break and continue are not used particularly often. We should definitely not use them when we can terminate the loop with a properly constructed condition. They are useful in emergency situations, when something unusual happens in loops with more complex iterations.


### The break keyword

We also need to say a few words about the `break` keyword. In the example, the `break` keyword is present in all cases except in the `default` case. In contrast to `if` statements, switch statements do not execute just one branch, but rather they execute the entire code from the first case that matches until the end of the switch statement. This behavior is called pass-through and has some uses, but most of the time we want to execute only one branch, and for that reason the break keyword is present. When a JavaScript interpreter comes to a `break`, it will jump out of the current `switch` statement.

To understand this better, look at this slightly modified example of a switch statement:

```
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

The only difference is that now there are no break keywords at all. Run this code and check what happens when the answer "a" is given to the prompt dialog. Now all alerts are displayed, even the default one.

The fall-through can be useful when more than one case should end with exactly the same behavior.

```
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

The code visible in the example will behave the same when "a", "A", 1 or "1" is given as the answer to the prompt.

The last important part is that if a more complex code is needed inside any given case, we should place that code in separate code blocks by additionally surrounding the code with curly brackets. This will add to code readability and allow for the declaration of variables only in the given case scope.

```
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

In the example, a redeclaration error would be observed in each of the cases and would not be encapsulated in its own scope.

### Summary

Without the use of a loop, it is difficult to imagine writing programs. Their skillful use not only makes work easier, but often makes it possible to create solutions that would not be available without them. JavaScript provides many mechanisms that allow you to repeat certain actions in loops, walk through array elements, iterate through object fields, etc. We have discussed only the most basic of them, but while, or different versions of for, should easily suffice to create quite advanced programs.