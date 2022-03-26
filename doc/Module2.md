# Module 2 - Variables, Data Types, Type Casting, and Comments

After completing Module 2, the student will:

 * have the knowledge and skills to work with variables (i.e. naming, declaring, initializing and modifying their values);
 * understand concepts such as scope, code blocks, shadowing, and hoisting;
 * know the basic properties of primitive data types such as boolean, number, bigint, undefined, null, and be able to use them;
 * be familiar with the basic properties of the primitive data type string, including string literals – single or double quotes, the escape character, string interpolation, basic properties and methods;
 * know the basic properties of complex data types such as Array and Object (treated as a record) and be able to use them in practice.

## Section 1 - Variables

Topics in this section:

 * Naming, declaring and initializing variables
 * Declarations and strict mode
 * Changing variable values
 * Constants
 * Scope (blocks, shadowing, hoisting)

### Variables

The ability to write various information on the screen, such as "Hello, World!" can be fun for a while, but it is not a universal way of writing programs. It's time to start learning more about the puzzle elements that will ultimately allow you to create programs that solve real problems.

There are quite a few of these elements, and we’ll introduce them gradually, although not necessarily in a simple chronology. We will often come back to what has already been discussed, extending the previous information with something new. Sometimes we will also go forward, using mechanisms that will only be explained in more detail over time. At first it may seem a bit overwhelming, but with time everything should start to merge into one coherent picture.

The first element of programming that we will talk about is the **variable**. You may know the name of a variable from mathematics, where it means a symbol used as a placeholder for different values that can change. They have a similar role in programming.

What do we actually need them for? As you can guess, most programs are quite complex, and we are rarely able to solve the problem with a single operation. Usually, the program will consist of many more operations, each of which can produce some intermediate results, which will be needed in the next steps. Variables allow us to store such results, to modify them, or to feed them into subsequent operations.

#### Naming the variables

Imagine variables as containers in which you can store certain information (such information will be called variable values). Each container must have its own name, by which we will be able to clearly indicate it.

Usually, we have quite a lot of freedom when it comes to inventing these names, but remember that they should refer to what we will store in the variable (e.g. height, color, stepCounter, and so on). Of course, JavaScript will not verify the correlation between the name and the contents of the variable – it is simply one of the many good practices that make it easier for us and others to understand the code later on.

In most programming languages, a variable must be declared before use, and JavaScript is no exception. Declaring a variable is simply "reserving" the name of the variable. This way, we inform the program that in the further part of the execution, we will use this name to refer to our container, in order to retrieve a value from it, or save a value to it.

In JavaScript, variable names may consist of any sequence of letters (lower-case and upper-case), digits, underscore characters, and dollar signs, but they must not start with a digit. There is a list of reserved words that cannot be used as variable names (look at the table below).

The important thing is also that the JavaScript interpreter distinguishes between lower-case and upper-case letters, also in variable names, so names such as `test`, `Test`, or `TEST` will be treated as different.

|  |
|----------|
The names of variables in JavaScript can be virtually any character string. However, there is a set of reserved words that cannot be used to name variables, functions, or anything else. They are integral parts of the language and are assigned meaning that cannot be changed. Below you will find a list of them.

|  |  |  |  |
|----------|----------|----------|----------|
| abstract | arguments | await | boolean |
| break | | byte | | case | | catch |
| char | class | const | continue |
| debugger | default | delete | do |
| double | else | enum | eval|
| export | extends | false | final|
| finally | float | for | function|
| goto | implements | if | import|
| in | instanceof | int | interface|
| let | long | native | new|
| null | package | private | protected|
| public | return | short | static|
| super | switch | synchronized | this|
| throw | throws | transient | true|
| try | typeof | var | void|
| volatile | while | with | yield|


#### Declaring variables

As we mentioned before, we **declare** the variable to reserve a name for it. This is a simplification, because in fact, memory space is also reserved for the variable, but when programming in JavaScript, we practically never have to think about what happens in the memory. Usually, the values stored in the variable will be able to be modified during the execution of the program (they are "variables", after all). Why usually? Because we can declare variables whose values cannot be changed. To be honest, we don't even call them variables anymore – we call them **constants**. For the declarations, we use the keywords `var` or `let` for **variables** and `const` for **constants**. For now, however, let's stay with the usual variables, and we will return to the constants in a moment.

Let’s analyze the following code sample (you will also find it in the editor window – run it there and watch the results in the console):

```
var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
```

The first line is the variable **declaration** (we can see the `var` keyword). This declaration means that the word height will be treated as the name of the container for certain values.

The declaration, like other JavaScript instructions, should end with a semicolon. In the second line, we try to write out the value of this variable (that is, what is in the container) on the console. Because we haven't put anything there yet, the result is undefined (the interpreter knows this variable, but it has no value yet – the value is undefined). In the next line, we try to print out the contents of the weight variable ... which we forgot to declare. This time, we will see `ReferenceError`. The JavaScript interpreter, which executes our program, has informed us that it doesn’t know a variable by this name (so the variable itself is undefined).

In the example, we use the keyword `var`. The alternative to it is the keyword `let`. We use both keywords in the same way. Both are meant for declaring variables, and both can be found in different examples on the Internet or in books. However, they are not exactly the same, and we’ll discuss the differences in their operation later in this chapter (even in several places).

The keyword `var` comes from the original JavaScript syntax, and the keyword `let` was introduced much later. Therefore, you will find var more in older programs. Currently, it is highly recommended to use the word `let` for reasons that we’ll discuss in a moment.

So, let's take a look at our example rewritten this time using the keyword `let`.

```
let height;
console.log(height); // -> undefined
```

One of the basic differences in the use of var and let is that let prevents us from declaring another variable with the same name (an error is generated). Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution.

```
var height;
var height;
console.log(height); // -> undefined
```

The example above demonstrates the possibility of re-declaring a variable using the keyword var. In this situation, it will not cause an error, but in more complex programs a redeclaration, especially by accident, may no longer be without consequences. When declaring with let, the interpreter checks whether such a variable has already been declared, no matter if let or var is used in the previous declaration.

```
let height;
let height; // -> Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(height);
```

So use `let` to declare variables, if only because you don't want to accidentally declare a variable again.

#### Initializing variables

After a successful declaration, the variable should be **initialized**, in other words, it should be given its first value. **Initialization** is done by assigning a certain value to a variable (indicated by its name). To assign it, we use the operator =.

You can assign to a variable: a specific value; the contents of another variable; or, for example, the result returned by a function.

Initialization can be done either together with the declaration, or separately as an independent command. It is important to enter the first value into the variable before trying to read, modify, or display it.

```
let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;  
console.log(weight); // -> 70
```

In the above example (check it in the editor), the declarations of the variables height and anotherHeight are combined with their initialization, while the variable weight is declared and initialized separately. The height and weight variables are initialized by providing specific values (more precisely, a number), while the anotherHeight variable receives a value read from the height variable. The values of all the variables are displayed on the console.

By the way, pay attention to one thing. If you specify a variable name in console.log, the interpreter recognizes it and displays its value. If you put the same name in quotation marks, it will be treated as plain text, and displayed as such.

```
let height = 180;
console.log(height); // -> 180
console.log("height"); // -> height
```

#### Declarations and strict mode

JavaScript had some major changes introduced in 2009 and 2015. Most of these changes extended the language syntax with new elements, but some of them concerned only the operation of the JavaScript interpreters. Often it was about clarifying the interpreters' behavior in potentially erroneous situations, such as in cases of variable initialization without any prior declaration.

Let's look at an example:

```
height = 180;
console.log(height); // -> 180
```

At first glance, you can see that we’ve forgotten to declare the variable height. The original JavaScript syntax allowed for such negligence, and at the moment of initialization it made this declaration for us. It seems like quite a good solution, but unfortunately it can sometimes lead to ambiguous and potentially erroneous situations (we’ll say a few more words about it while discussing the scope).

Let's modify our example:

```
"use strict";

height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);
```

At the beginning of our code, we’ve added `"use strict";`. This statement has radically changed the behavior of the interpreter. Why? We use it when we want to force the interpreter to behave according to modern JavaScript standards. So, as long as you aren’t running some really old code, you should always use it. And this time, using a variable without its previous declaration is treated as an error.

The sentence `"use strict";` must be placed at the very beginning of the code. It will cause the interpreter to deal with the rest of the code using strict mode, which is the modern JavaScript standard. All further examples in our course will be prepared to work in this mode by default, even if `"use strict";` does not always appear at the beginning of the code.

#### Changing variable values

Variables, as their name suggests, can store data that will vary. Changes are made by assigning a new value to the variable, which overwrites the previous one.

```
let steps = 100;
console.log(steps); // -> 100
steps = 120; // -> 120
console.log(steps);
steps = steps + 200;
console.log(steps); // -> 320
```

In our example, we’ve declared a variable called steps. Initially, it contains the number 100, which is then changed to 120. Then we add 200 to the current contents of the variable, as a result of which the variable contains 320.

Variables in the JavaScript language are untyped (or, to be more precise, they are weakly and dynamically typed). This means that JavaScript will not control what type of value we store in the variable. What exactly is the data type? You can probably intuitively answer this question yourself. The type determines the belonging of a given data to a certain set that share the same properties and on which you can perform the same operations. Data types vary greatly depending on the programming language. In JavaScript, the main types are number and character string. We will talk much more about types in the next chapter. Let's declare a few variables and initialize them with values of different types:

```
let greeting = "Hello!";
let counter = 100;
```

As you can see, the greeting variable is initiated with a value of the string type, while the counter variable is initiated with a value of the number type. Continuing the example, we will make a small change in the contents of the greeting variable.

```
console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1
```

JavaScript allows us to easily replace the greeting variable with a value whose type is different from the one originally stored there. JavaScript goes one step further and not only allows us to change the types of values kept in a variable, but it also performs their implicit conversion if necessary (we will also return to this topic of conversion when discussing types). Let's restore the original value of the greeting variable and then add the value of the counter variable to it.

```
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100
```

The interpreter will check the type of value stored in the greeting variable and convert the value from the counter variable to the same type before performing an addition operation. As a result, the string `"100"` will be added to the `"Hello!"` character string and stored to the greeting variable. By the way, note that JavaScript interprets `100` as a number, but `"100"` as a string.

### Constants

The `const` keyword is used to declare containers similar to variables. Such containers are called **constants**. Constants are also used to store certain values, but once values have been entered into them during initialization, they can no longer be modified. This means that this type of container is simultaneously declared and initialized. For example, the following declaration of the greeting constant is correct:

```
const greeting = "Hello!";
```

But this next one definitely causes an error:

```
const greeting; // -> Uncaught SyntaxError: Missing initializer in const declaration
greeting = "Hello!";
```

As we said, a change in the constant is impossible. This time the declaration is correct, but we try to modify the value stored in the constant.

```
const greeting = "Hello!";
greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.
```

The main purpose of a constant is to eradicate the possibility of accidentally changing a value stored in it. This is important when we have some values that really should never change. Typical examples of constants are paths to resources, tokens, and other data that never change throughout the lifetime of the script.

But constants can also be used as sub results in calculations or in other places where whatever information was gathered or calculated will not change any further. Using a const, besides preventing a value from being changed by mistake, allows the JavaScript engine to optimize the code, which may affect its performance.

### Scope

Until now, we assumed that after declaring a variable, its name could be used in the whole code of the program (i.e. the scope of the variable is global). This is not entirely true – the scope of a variable depends on where it is declared. Unfortunately, for a good understanding of variable scope, we need to learn a few more programming elements, such as conditional instructions or functions, which will be discussed in more detail later in the course. So here we will limit ourselves to basic information, and will come back to this issue in different parts of the course. One of the basic elements that influence the scope of variables is a **program block**.

#### Program blocks

We can separate the code of a program into blocks. In the blocks that we create using curly brackets, there is a set of instructions, which for some reason should be treated independently. The blocks are usually associated with conditional instructions, loops, or functions, which we will talk about later. We can also separate a block of a program unrelated to anything special, simply by choosing a certain range of instructions (in practice, this is not particularly justified, and for now we will only do it for educational reasons).

Let's look at an example:

```
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2
```

First, we declare the variable counter. Then we open a block inside which we initialize this variable and display its contents. Outside the block, we increase the value stored in the variable by 1 and display it again. In this case, the interpreter will execute the program as if it hadn't noticed the block, going through the instructions before the block, in the block, and after the block. Creating a block here, without, for example, conditional instructions, has no real justification – it is just an example of using brackets.

Program blocks can be nested, that is, we can create one block inside of another one.

```
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    {
        console.log(counter); // -> 1
    }
}
counter = counter + 1;
console.log(counter); // -> 2
```


By the way, please note that the code inside the block has been moved to the right. This is called an **indentation**. For a JavaScript interpreter, it doesn't matter at all, but it definitely increases the readability of the code, allowing the readers (including you) to quickly find out which parts of the code are inside, and which are outside, the block. Code editors usually add indentations in the right places by themselves, but it is a good habit to remember this yourself and, if they do not appear automatically, format the code by hand.

It's time to move on to determine what is actually going on with these scopes. Unfortunately, the scopes of variables (and constants) declared with `let` and `const` look slightly different than those declared with var. So we will discuss them independently.

#### `let` and `const`

The first rule is simple. If we declare any variable or constant using `let` or `const`, respectively, outside the code blocks, they will be **global**. By this we mean that their names will be visible throughout the program, outside blocks, inside blocks, in functions, and so on. We will be able to refer to them anywhere by their names, and of course have access to their values.

What happens if we declare something using let or const inside a block? This will create a local variable or constant. It will be visible only inside the block in which it was declared and in blocks that can optionally be nested in it.

Let's look at a simple example:

```
let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined
```

The height variable, declared outside the block, is global. The weight variable is local – its scope is limited by the block in which it was declared. This is clearly visible when trying to display the values of both variables inside and outside the block. We can also test the case with nested blocks

```
let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
 }
```

As you can see, the info variable declared in the most internal block is visible only inside it. The weight variable is visible both inside the block in which it was declared and inside the block nested in it. And the global variable height is visible everywhere.

Simple, isn't it?

#### `var`
In the case of variable declarations using the keyword `var`, the situation is slightly different. The variable declared using it outside the blocks will, as in the case of let, be global, in other words, it will be visible everywhere. If you declare it inside a block, then... well, it will usually turn out to be global again.

Let's start with a simple example:

```
var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
console.log(height); // -> 180
console.log(weight); // -> 70
```

As expected, both variables, `height` and `weight`, turn out to be global. Will the variables declared using `var` always, regardless of the place of declaration, be global? Definitely not. The problem is that var ignores ordinary program blocks, treating them as if they do not exist. So in what situation can we declare a local variable using var? Only inside a function. We will devote a lot of space to discussing the function, and then we will come back to the problem of the variable scope as well. Now we will try to present and discuss only a simple example, which will show that var variables are sometimes local, too.

### A brief word about functions

Let's start by explaining what **functions** are. It often happens that a certain piece of code, performing some specific task, will be used many times. Yes, you can copy this piece of code, all of its instructions, to any place where you want to use it. However, this would be very inefficient. First of all, the size of our program would grow unnecessarily. Secondly, if we would like to make some changes to this piece of code, for example, to correct some bug, we would have to do it in every place where we used it.

A simple solution to this problem is a function. A **function** is just a separated piece of code that you name, in the same way that you name a variable. If you want to use it somewhere, you simply refer to it using that name (we say that we call the function).

The declaration of a simple function, let's say `testFunction`, may look like this:

```
function testFunction() {
    console.log("Hello");
    console.log("World");
}
```

The way to define the function shown in the example is one of several available in JavaScript. The definition starts with the `function` keyword, followed by the function name we invented. After the name, you see parentheses, which optionally could contain parameters passed to the function (we will come back to this when we discuss the function more precisely). Then we open the program block, which contains the instructions belonging to the function. When defining a function, the instructions contained in the function are not executed. To execute the function, you must call it independently, using its name.

Take a look at the following program.

```
console.log("let's begin:"); // -> let's begin:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and again:"); // -> and again:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and once more:"); // -> and once more:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
```

It will print out a sequence of text on the console:

```
let's begin:
Hello
World
and again:
Hello
World
and once more:
Hello
World
```

We can rewrite the same program using our `testFunction` function. Let's declare it again and call it in the right places:

```
function testFunction() {
    console.log("Hello");
    console.log("World");
}

console.log("let's begin:");
testFunction();
console.log("and again:");
testFunction();
console.log("and once more:");
testFunction();
```

The effect of the program will be the same as before (test both examples).

### The `var` keyword - continued

After this short introduction to functions (this is obviously not our last meeting with them) let's return to the keyword `var` and variable scopes.

If we declare a variable using the keyword var inside a function, its scope will be limited only to the inside of that function (it's a local scope). This means that the variable name will be correctly recognized only inside this function.

Let's consider the following example:

```
var globalGreeting = "Good ";

function testFunction() {
    var localGreeting = "Morning ";  
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
```

First of all, run this program and observe the results on the console. What happened, and above all, why did it happen?

Let's take a closer look at the code. In the example, we declared the global variable `globalGreeting`. Then we defined the `testFunction` function, inside which we declared the local variable `localGreeting`. Then we called the `testFunction` function, which resulted in writing out the values of both variables (inside the function, we have access to both the global variable and the local ones). Attempting to access the local variable `localGreeting` outside the function will fail. So we’ve finally succeeded in demonstrating that variable declarations using the word `var` can also be local.

### Variable shadowing

JavaScript allows for variable shadowing. What does that mean? It means that we can declare a global variable and a local variable of the same name.

In the local scope, in which we declare a local variable using its name, we will have access to the local value (the global variable is hidden behind the local one, so we do not have access to it in this local scope). Using this name outside the local scope means that we will be referring to the global variable. **This is not best programming practice, however, and we should avoid such situations**. It is not difficult to guess that with a bit of inattention, using this mechanism can lead to unintended situations and probably to errors in the operation of the program.

If we are to avoid such situations, it would be good to see exactly what they are about. Let's begin with an example without shadowing:

```
let counter = 100;
console.log(counter); // -> 100
{
   counter = 200;
   console.log(counter); // -> 200
}
console.log(counter); // -> 200
```

The `counter` variable, declared at the beginning of the program, is a global variable. Throughout the program, also inside the block, we operate on this very variable. A small change in the code is enough for the program to behave completely differently.

```
let counter = 100;
console.log(counter); // -> 100
{
  let counter = 200;
  console.log(counter); // -> 200
}
console.log(counter); // -> 100
```

You see the difference? This time in the block, instead of `counter = 200`; (i.e. changes in the contents of the global counter variable), the `let counter = 200`; statement appears (i.e. declarations of the local variable combined with its initialization). The interpreter would consider such a situation to be wrong if the re-declaration appeared in the same scope.

However, the declaration is local (it’s a different scope than global) and all references to the variable with this name inside the block will refer to this local variable. Outside the block, the global variable will still be seen under the same name. Pay attention to the values displayed by the console.

covers a global variable. If nested scopes appear (e.g. nested blocks in the case of a let declaration), the local variable declared in a more nested block will overshadow the local variable of the same name declared in the external block.

Shadowing is also present in variable declarations using the word `var`, and this time the local scope is limited not by the program block, but by the function block.

```
var counter = 100;

function testFunction() {
    var counter = 200;  
    console.log(counter);
}

console.log(counter); // -> 100
testFunction(); // -> 200
console.log(counter); // -> 100
```

In most cases, this is not desirable, so try to avoid giving the same variable names to multiple variables, regardless of where you declare them.

### Hoisting

Remember how we said that all variables must be declared before use? This is not entirely true, and really the word "should" is a better fit than "must". Of course, good practice is always to declare variables before they are used. And stick to this. But the original JavaScript syntax allows for some deviations from this rule.

The JavaScript interpreter scans the program before running it, looking for errors in its syntax, among other things. It does one more thing on this occasion. It searches for all variable declarations and moves them to the beginning of the range in which they were declared (to the beginning of the program if they are global, to the beginning of the block if it is a local `let` declaration, or to the beginning of the function if it is a local `var` declaration). All this happens, of course, in the interpreter memory, and the changes are not visible in the code.

**Hoisting**, because we are talking about it, is a rather complex and frankly speaking quite incoherent mechanism. Understanding it well requires the ability to freely use many JavaScript elements, which we have not even mentioned yet.

What's more, it's rather a curiosity than something practical that you will use when writing programs, so we will look at just one small example that will allow us to roughly understand the very principle of hoisting. This may make it easier for you to understand some surprising situations when writing your own code, or testing examples you find in various sources.

```
var height = 180;
console.log(height);  // -> 180
console.log(weight);  // -> Uncaught ReferenceError: weight is not defined
```

In the above example, we forgot to declare the variable weight. The result is obvious: we’re referring to a variable (that is, we’re trying to read its contents) which does not exist. Something like this must end in an error.

Let's make a small change:

```
var height = 180;
console.log(height);  // -> 180
console.log(weight);  // -> undefined
var weight = 70;
console.log(weight);  // -> 70
```

This time we declared our variable, but in a rather strange place. Together with the declaration, we also performed initialization. The result of the program may be a bit surprising. This time there are no errors. Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range (in this case the program).

However, the attempt to display the contents of the weight variable give two different results. Why? Hoisting only concerns the declaration, not initialization. So the value 70, which we assign to the weight variable, remains on the line where the original declaration is. The above example is interpreted by the JavaScript engine more or less in the following way:

```
var weight;
var height = 180;
console.log(height);  // -> 180
console.log(weight);  // -> undefined
weight = 70;
console.log(weight);  // -> 70
```

Hoisting unfortunately works a little differently with the `let` and `const` declarations.

However, we will not go into it. It is enough that you are aware of the phenomenon. And most of all, you will remember ALWAYS to declare variables before using them.

### Summary

Using variables, in other words, declaring, initializing, changing, or reading their values is an elementary part of practically every programming language. JavaScript is no exception, as you need to use variables to program in it. Remember to declare variables before using them. Pay attention to where you declare them – whether they are local or global. Try to use the keywords let and const, not the word var. Knowing the latter will be useful not for understanding the examples found in various sources, but rather so that you can avoid using it yourself. Remember not to use the same names for different variables, even if you declare them in different ranges. And, of course, give the variables names that will be related to what you want to store in them – the code should be readable not only to the interpreter, but also to people.


## Section 2 - Data types and type casting – Part 1

Topics in this section:

 * Data types in JS
 * Primitive data types – Boolean
 * Primitive data types – Number
 * Primitive data types – BigInt
 * Primitive data types – String
 * Primitive data types – undefined
 * Primitive data types – Symbol
 * Primitive data types – null
 * Type casting – primitive construction functions
 * Type casting – primitive conversions
 * Conversion to String
 * Conversion to Number
 * Conversion to Boolean
 * Conversion to BigInt
 * Implicit Conversions
 * Scope (blocks, shadowing, hoisting)

### Data types and type conversions

Programs are intended to process data. No matter if it is a web shop application, a human resources management system, or a computer game, each of these programs reads, processes and stores huge amounts of data. In the previous chapter, we already learned how to declare, initiate, and modify the variables that allow these data to be stored in the context of a running program. While discussing variables, the concept of data types appeared, and it turned out that the JavaScript language is weakly typed, so among other things it allows you to change the type of data stored in one variable.

We can divide the data according to their properties. For example, you will certainly intuitively distinguish between numeric data and text data. Such classification is of course arbitrary. **Numbers** can be further divided into, for example,** integer numbers** and **real numbers**.

Distinguishing data by their types is one of the characteristic features of any programming language. Each type of data is connected with certain operations we can perform on it. Usually, there are also methods of converting data between selected types (e.g. a number can be converted so that it is saved as a string).

In JavaScript, data types are divided into **primitive** (or simple) and **complex** (or composite). Among the primitive types, we can find **numbers** and **strings of characters**, while the complex types include, for example, **arrays** and objects.

The difference between these data types is contained quite precisely in their names. The primitive types, well, are simply not complex. If you write a data of a primitive type into a variable, one particular value will be stored there. This value will be atomic, in other words, it will not be possible to extract components from it. Data of complex types, such as an array, will consist of many elements of primitive (not complex) types.

Thus, we will logically deal with primitive types first.

Before we move on to discussing data types, we need to introduce one more new concept: **literals**.

**Literals** are a way of noting specific values (data) in the program code. Literals are found in virtually all programming languages, including JavaScript. We used literals in the previous chapter when initializing variables.

Let's take a look at an example:

```
let year = 1990;
console.log(year); // -> 1990
console.log(1991); // -> 1991
console.log("Alice"); // -> Alice
```

In this example, we declare the variable year and immediately initiate it with the value 1990. The digits 1990, written in the code at the place of variable initialization, are a literal that represents a **number**. The value 1990 is displayed on the console using the year variable. Then we display on the console the value 1991 and "Alice", in both cases using literals (representing a **number** and a **string** respectively). In JavaScript, almost each data type has its own literal.
