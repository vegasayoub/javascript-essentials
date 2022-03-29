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


#### the `typeof` operator

While learning about JavaScript data types, the `typeof` **operator** may be useful. Actually, it is also useful for normal work with this language, so it would be good if you remembered it for later. We will devote one of the later chapters to **operators**, but at this point it is enough to know that an operator is a symbol or name that represents some action to be performed on the indicated arguments. For example, the `+` symbol is a two-argument operator representing summation.

The `typeof` operator just mentioned is unary (it takes only one argument) and informs us of the type of data indicated as a given argument. The argument can be either a literal or a variable – in the latter case we will be told about the type of data stored in it. The typeof operator returns a string with one of the fixed values assigned to each of the types.

All possible return values of the typeof operator are:

```
"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"
```

This list roughly shows us what types of data we will be dealing with in JavaScript.

Let's test the typeof operator using a simple example:

```
let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number

let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string

let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string
```

Again we declare and initiate the variable year. As you can see, typeof for both the literal 1991 and the variable containing a number (we initialize it with the literal 1990) will return the word "number". We perform a similar test on the "Alice" and "Bob" strings, using the variable name. Additionally, we do a small experiment. The result of typeof year is stored to the variable named typeOfYear. As you can see, it stores the value as a “number”. If we check the type of this variable, we get “string”. Check the example yourself in the editor.

#### Primitive data types

In JavaScript, there are six primitive (or simple) data types: **Boolean**, **Number**, **BigInt**, **String**, **Symbol**, and **undefined**. Additionally, the primitive **null** value is also treated as a separate type. The primitive, as we have already said, is a type of data whose values are atomic. This means that the value is one, indivisible element.

Let's try to take a closer look at primitives.

##### Boolean

The Boolean is a logical data type. It can only take one of two values: `true` or `false`. It’s mainly used as a conditional expression needed for deciding what part of the code should be executed, or how long something should be repeated (this is called a control flow statement, and we’ll take a closer look at it in Module 4).

Booleans are also used as what is commonly referred to as a **flag**, a variable that signals something that can be either present or absent, enabled or disabled, etc. Like any other variable, booleans should have clear and informative names. It’s not mandatory, but we can often see that boolean flag names are prefixed with "is", to show the intent of checking this for true/ false values.

```
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean
```

We can perform, without conversion (i.e. change to another type) logical operations on boolean values, some perhaps that you know from mathematics, such as NOT, AND, and OR (the symbols !, && and || correspondingly). We will find out more about them in the chapter on operators.

##### Number

This is the main numeric type in JavaScript that represents both real numbers (e.g. fractions) and integers. The format in which the data of this type is stored in the memory means that the values of this type are sometimes approximate (especially, but not only, very large values or some fractions). It is assumed, among other things, that in order to ensure the correctness of calculations, the integer values should be limited in JavaScript to the range from `-(253 – 1)` to `(253 – 1)`.

**Numbers** allow for all typical arithmetic operations, like addition, subtraction, multiplication, and division.

```
const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year); // -> 1991;
console.log(typeof year); // -> number;
```

Numbers in JavaScript are usually presented in decimal form, which we are used to in everyday life. However, if a literal describing a number is preceded by an appropriate prefix, we can present it in hexadecimal `(0x…)`, octal `(0o...)` or binary `(0b...)` form. We can also write numbers in exponential form, so for example, instead of `9000`, we can write `9e3`, and instead of `0.00123`, we can write `123e-5`. You are probably already familiar with the terms we used just now, such as decimal, hexadecimal, or exponential representation.

```
let a = 10; // decimal - default 
let b = 0x10; // hexadecimal 
let c = 0o10; // octal 
let d = 0b10; // binary 
 
console.log(a); // -> 10 
console.log(b); // -> 16 
console.log(c); // -> 8 
console.log(d); // -> 2 

let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123
```

In addition to regular numbers in JavaScript, we use three additional special values, which are: `Infinity`, `-Infinity` and `NaN` (not a number). The first two do not require any additional explanations – they are exactly what we know from mathematics. The last one, `NaN`, is not so much a numerical value as a notification that some arithmetic action (or mathematical function) could not be performed because the argument is either not a number, or cannot be converted to a number.

```
let a = 1 / 0;
let b = -Infinity;

console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number

let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number
```

Test these examples, and try to change the values that appear in them yourself.

##### BigInt

The **BigInt** type is not used too often. It allows us to write integers of virtually any length. For almost any normal numerical operations, the **Number** type is enough, but from time to time we need a type that can handle much bigger integers.

We can use mathematical operations on BigInts in the same way as on Numbers, but there is a difference when dividing. As the BigInt is an integer type, the division result will always be **rounded down** to the nearest whole number.

BigInt literals are numbers with the **…n** suffix.

```
let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n
```

You cannot use other types in arithmetic operations on BigInts, that is, you cannot add a BigInt and a Number to each other (this will generate an error).

```
let big3 = 1000n + 20; 
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

The BigInt does not have its own equivalent of `Infinity` or `NaN` values. In the case of the Number type, such values appear when dividing by 0 (Infinity result) or trying to perform an arithmetic action on a value that is not a number (NaN result). In the case of the BigInt type, such actions will generate an error.

```
let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero
```

##### String

The String type represents a sequence of characters forming a piece of text. Common operations on texts include concatenation, extraction of the substring, and checking the length of the string. Strings are extensively used in programming and even more so in web development, as both HTML and a big part of Internet content is text.

The most common use of text in web development includes:

 * links and paths to resources;
 * tokens;
 * checking user-filled forms and input;
 * dynamic content generation

**Strings**, like other primitives, are immutable, so when we want to change even one letter in a string, in reality, we create a new string.

In previous examples, we already used character strings. We used quotation marks to indicate that a given text is to be treated as a string (i.e. String type). String literals can be created using single or double quotes, as long as both beginning and end quote characters match up.

```
let country = "Malawi";
let continent = 'Africa';

console.log(country); // -> Malawi
console.log(typeof country); // -> string
console.log(continent); // -> Africa
console.log(typeof continent); // -> string
```

If you use double quotes to mark a string, you can place single quotes inside the string, and they will be treated as ordinary characters. This will also work in the opposite situation (i.e. placing double quotes between the single quotes).

```
let message1 = "The vessel 'Mars' called at the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';

console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.
```

If you want to put a single or double quote inside the string, you can also use the escape character – backslash. A quote mark preceded by the \ (backslash) character will be interpreted as ordinary characters that are part of our string, not parts of a literal construction. The backslash itself, if it is to be treated as an ordinary character (not a control character), must also be preceded by ... an escape character (i.e. a backslash).

```
let message1 = 'The vessel \'Mars\' called at the port.';
let message2 = "Cyclone \"Cilida\" to pass close to Mauritius.";

console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

let path = "C:\\Windows";
console.log(path); // -> C:\Windows
```

Trying to perform arithmetic operations on String type values, such as subtraction, multiplication, or division, will usually end in an error. More precisely, the NaN value will be returned as a result of the action.

Why is this happening? Seeing the arithmetic operators `-`, `*`, or `\`, the JavaScript interpreter tries to interpret the given values as numbers, or convert them into numbers. So if the character strings consists of digits, the automatic conversion will be successful and we will get the result of the arithmetic action as a Number type value. If the character string cannot be interpreted as a number (and converted) we will get the NaN result. We will talk more about conversion in a moment.

```
let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number
```

The exception is the addition operation, which will not be treated as an arithmetic one, but as an attempt to create a new string by combining two input strings.

```
let path = "C:\\" + "Windows";
console.log(path); // -> C:\Windows

let test = "100" + "10";
console.log(test); // -> 10010
console.log(typeof test); // -> string
```

A very convenient mechanism that was introduced to JavaScript in 2015 is **string interpolation**. It allows you to treat a character string as a template, in which you can place values in selected places, such as those taken from variables. Such a literal is created using backticks (or grave accents) instead of quotation marks. The places where values are inserted are marked with curly brackets preceded by a `$` sign.

```
let country = "Malawi";
let continent = "Africa";

let sentence = ' ${country} is located in ${continent}.';
console.log(sentence); // -> Malawi is located in Africa.
```

You can do a lot of useful work on String type data. Unfortunately, they require two new concepts: **methods** (and indirectly, objects) and **autoboxing**. The exact explanation of both concepts goes beyond the scope of this course, so we will try to make them a little simpler.

In one of the previous chapters, we introduced the concept of a function, also in a somewhat simplified form. Now let’s talk about methods.

A **method** is a special kind of function that belongs to an object. **Objects** are complex data types, which can consist of many values (stored in properties) and methods. If you want to call the method of an object, you write the name of the method after a dot. Does this remind you of something? This is exactly the notation you use when calling `console.log`. The console object has many other methods besides the `log` method, such as `time` and `timeEnd` (which can be used to measure time).

```
console.time();
console.log("test console"); // -> test console
console.timeEnd(); // -> default: 0.108154296875 ms
```

All data of primitive types such as Number, BigInt, Boolean, or String have corresponding objects to which they can be converted. Each of these objects will have methods designed for a specific data type. At this point, we come to another concept, that is, **autoboxing**. If a dot appears after a literal representing a primitive type, or after a variable containing this type of data, the JavaScript interpreter tries to treat this value as an object and not a primitive. For this purpose, it converts the primitive to the corresponding object on the fly, which has the appropriate methods (i.e. it performs autoboxing). A bit confusing, isn't it? Fortunately, in order to use methods, we don't have to understand it exactly – it's enough to follow the given convention.

Let's take a look at an example:

```
let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k
```

In the variable `river`, we store the primitive of a String type. In the next line, we refer to this variable, writing a dot after its name and the name of one of the methods – `charAt` (a method of the String class object). Although the primitive has no methods that can be called, the interpreter temporarily converts this value to a suitable object that already has such methods. One of these methods is `charAt`, which we now call. The method operates on a string originally placed in the river variable, and returns a single letter from the specified position (letters are counted starting from 0).

After the operation is completed, the interpreter removes the temporary object. So from our point of view, it looks like we just called a method on a given primitive type.

Commonly used string methods and properties (i.e. named values related to the object) are:

`length`: property, returns the number of characters in a string;

![](images/strings1.png)

`charAt(index)`: method, returns the character at the "index" position in the string (indexes start from 0);

![](images/strings2.png)

`slice(beginIndex, [optional] endIndex)`: method, returns a new string that is created from the characters between `beginIndex` (included) and `endIndex` (excluded); if `endIndex` is omitted, then the new string is from `beginIndex` to the end of the string;

![](images/strings3.png)

`split(separator, [optional] limit)`: method, splits the string into substrings whenever a separator is found in that string, and returns an array of those substrings (we will say a few words about arrays in a moment), while an optional `limit` limits the number of substrings added to the list.

![](images/strings4.png)

```
let str = "java script language";

console.log(str.length); // -> 20
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'

console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']
```

To understand it properly, it is necessary to run examples of String type data. Do not be afraid to experiment by changing the data in the examples, adding new variables, or displaying additional information on the console.


##### Undefined

The undefined type has only one value: `undefined`. It’s the default value that all variables have after a declaration if no value is assigned to them. You can also assign the value `undefined` to any variable, but in general, this should be avoided, because if we need to mark a variable as not holding any meaningful value, we should use `null`.

```
Let declaredVar;
console.log(typeof declaredVar); // -> undefined

declaredVar = 5;
console.log(typeof declaredVar); // -> number

declaredVar = undefined;
console.log(typeof declaredVar); // -> undefined

The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.

Console.log(typeof notDeclaredVar); // -> undefined
console.log(notDeclaredVar); // -> Uncaught ReferenceError: notDeclared is not defined
```

##### Symbol

The **Symbol** type is, well… complicated to say the least. And fortunately, not particularly useful to us.

It’s a new primitive type that was added to JavaScript in 2015. It doesn't have any literal value, and can only be created using a special constructor function. Symbols are a form of identifier that are guaranteed to be unique.

Symbols are an advanced topic, and to understand their power and usefulness, we’ll need to cover a lot of other topics first, so for now, just remember that the Symbol type exists.

##### null

The `null` value is quite specific. The value itself is primitive, while the type to which it belongs is not a primitive type, such as Number or undefined. This is a separate category, associated with complex types, such as objects. The `null` value is used to indicate that the variable does not contain anything, and most often it is a variable that is intended to contain values of complex types.

In a nutshell, we can assume that the `undefined` value is assigned to uninitialized variables automatically, but if we want to explicitly indicate that the variable does not contain anything, we assign it a `null` value. One important caveat for `null` is that when checked with the `typeof` operator, it will return `"object"`, a surprising result. This is a part of a much more complicated object system, but for now, you just need to know that `typeof null` is equal to `"object"`.

```
let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined

someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object
```

In this course, however, apart from minor mentions, we will not be learning a concept known as object-oriented programming, and therefore, using the `null` value will not be so important to us for the time being.


#### Type conversions

##### Primitive construction functions

Using literals is not the only way to create variables of the given primitive types. The second option is to make them using **constructor** functions. These types of functions are mainly used in JavaScript for object-oriented programming, which is outside the scope of our course. However, these few listed constructor functions can also be used to create primitives, not just objects (this is not a general feature, but only for the listed functions). The following functions will return primitives of a given type: `Boolean`, `Number`, `BigInt`, and `String`.

Most of these functions can be called without any arguments. In such a situation:

 * the function `String` will by default create and return an empty string – primitive "";
 * the function `Number` will by default create and return the value 0;
 * the function `Boolean` will by default create and return the value of false.

The function `BigInt`, unlike other constructor functions, requires you to pass some initial value to it. This can be an integer number that will be converted to a BigInt (see examples).

```
const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt();   // -> Uncaught TypeError: Cannot convert undefined to a BigInt
```

But creating default values is not impressive at all. We can accomplish these using literals. So what do we use these functions for? Well, we use them in type conversions.


#### Conversions

It’s a pretty common situation to have a value of one type but to need a value of another type. The simplest example is when we have a number, but we need to add it to some text. Conversions in JavaScript happen automatically in specific situations, but can also be used explicitly through functions like `String()` or `Number()`. Earlier we saw how those functions could be used to create default values of those types, but that’s not all they can do. Those functions also accept arguments in parentheses and (if possible) will convert them to a given type.

```
Const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);
```

Most of these conversions are straightforward, but some may be a little confusing, so let’s discuss each case of primitive conversion. Test all of the examples shown for type conversion. Try to experiment with your own values.

##### Conversion to String

Conversions are the easiest to understand, as they try to directly change the value to a string, and this can be done for all primitive types. So there are no surprises there. Note that in the example, we used the recently discussed technique of character **string interpolation**.

```
let str = "text";
let strStr = String(str);
console.log('${typeof str} : ${str}'); // -> string : text
console.log('${typeof strStr} : ${strStr}'); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log('${typeof nr} : ${nr}'); // -> number : 42
console.log('${typeof strNr} : ${strNr}'); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log('${typeof bl} : ${bl}'); // -> boolean : true
console.log('${typeof strBl} : ${strBl}'); // -> string : true

let bnr = 123n;
let strBnr = String(bnr);
console.log('${typeof bnr} : ${bnr}'); // -> bigint : 123
console.log('${typeof strBnr} : ${strBnr}'); // -> string : 123

let un = undefined;
let strUn = String(un);
console.log('${typeof un} : ${un}'); // -> undefined : undefined
console.log('${typeof strUn} : ${strUn}'); // -> string : undefined

let n = null;
let strN = String(n);
console.log('${typeof n} : ${n}'); // -> object : null
console.log('${typeof strN} : ${strN}'); // -> string : null
```

##### Conversion to Number

Conversion to a number is not as obvious as conversion to a string. It works as expected for strings that represent actual numbers, like `"14"`, `"-72.134"`, or strings that represent numbers in scientific notation, like `"2e3"`, or special number values like `"NaN"` or `"Infinity"`.

However, the string can also contain numbers in hexadecimal, octal, and binary format. They must be preceded by 0x, 0o, or 0b respectively. For any string that cannot be converted to a special value, `NaN` (not a number) is returned. A `BigInt` can also be converted to a `Number`, but we need to remember that a BigInt can store much bigger values than a Number, so for large values, part of them can be truncated or end up being imprecise. The Boolean `true` is converted to `1`, and `false` to `0` – this is common for many programming languages. An attempt to convert an undefined value will result in NaN, while null will be converted to `0`.

```
console.log(Number(42)); // -> 42

console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); //  -> 12000
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN

console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - >  123456789123
456800000

console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); //  -> NaN

console.log(Number(null));// -> 0
```

##### Conversion to Boolean

Conversions to Boolean follow simple rules, as we can only have one of two values: `true` or `false`. The value `false` is always returned for:

 * `0`,
 * `NaN`,
 * empty string,
 * `undefined`,
 * `null`

Any other value will result in `true` being returned.

```
console.log(Boolean(true)); // -> true

console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false

console.log(Boolean("text")); // -> true
console.log(Boolean("")); // -> false

console.log(Boolean(undefined)); // -> false

console.log(Boolean(null)); // -> false
```

##### Conversion to BigInt

In order for conversions to a BigInt to succeed, we require a Number or String representing a number as a value to be converted. Values for conversion can be given in the default decimal form, as well as in hexadecimal, octal, or binary form. This applies both to the situation where we give the Number and String literals as arguments (or variables containing data of those types). We can also use exponential notation, but only for Number arguments. Unlike other conversions, conversion to a BigInt will throw an error, and will stop the program when unable to convert a given value.

**Note**: When testing the following example, please pay attention to the fact that the first error prevents further code execution. So run the example several times in succession, removing the wrong calls one by one.

```
console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

console.log(BigInt(true)); // -> 1n

console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt

console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer
```


##### Implicit Conversions

Conversions can also happen automatically, and they happen all the time. This simple example will demonstrate it (we tested a similar example when discussing the String type):

```
const str1 = 42 + "1";
console.log(str1);        // -> 421
console.log(typeof str1); // -> string

const str2 = 42 - "1";
console.log(str2);        // -> 41
console.log(typeof str2); // -> number
```

So what’s going on? The details will be shown in the chapter on operators, but the short answer is that when we try to perform an addition when one of the arguments is a string, JavaScript will convert the rest of the arguments to a string as well. This is what is happening with `str1` in the example. Subtraction with a string, however, doesn't make much sense, so in that case JavaScript converts everything to Numbers.


## Section 3 - Data types and type casting – Part 2

Topics in this section:

 * Complex data types – Object
 * Complex data types – Array
 * Array – the length property
 * Array – the indexOf method
 * Array – the push method
 * Array – the unshift method
 * Array – the pop method
 * Array – the shift method
 * Array – the reverse method
 * Array – the slice method
 * Array – the concat method

### Complex data types

We will limit the discussion of complex types to only two of them: objects and arrays. Unfortunately, even these types will have to be presented in a simplified way. This should be enough to use them in their basic scope, but more advanced techniques related to them as well as other complex types will be introduced only in the next parts of the course.

#### Object

Objects have many applications in JavaScript. One of the most basic, and at the same time the only one that we will deal with now, is to use it as a structure known in computer science as a record. A **record** is a collection of named fields. Each field has its own name (or key) and value assigned to it. In the case of JavaScript objects, these fields are usually called properties. Records, or in our case objects, allow you to store multiple values of different types in one place. In JavaScript, there are a few ways to create objects, but the easiest and fastest is to use the curly bracket literal.

```
let testObj = {};
console.log(typeof testObj); // -> object
```

The object we create and store in the variable testObj is not particularly useful, because it’s … empty. We have not defined any fields in it, i.e. any key–value pairs. Let's try it again, this time by defining an object containing two fields with keys nr and str.

```
let testObj = {
    nr: 600,
    str: "text"
};
```

Note that we have created objects using the same literal, but at the same time we have created properties that are key–value pairs. Properties are separated by commas. A specific property (field) of an object can later be referred to with dot notation. This notation requires the name of the object (a literal or the name of a variable containing the object) to be followed by a dot, followed by the field name (key) again.

```
console.log(testObj.nr); // -> 600
console.log(testObj.str); // -> text
```

What do we need objects for? The simplest reason for using them may be the desire to store several values in one place, which are linked to each other for some reason.

Let's assume that we collect information about the users of our system. Information about a single user will consist of their first name, last name, age, and email address. Let's try to write an appropriate piece of code for two users, without using objects for now.

```
let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";
```

It seems that everything works correctly, but if we think about it carefully, we will notice two disadvantages. First of all, for each user, you will have to make up separate names of variables for the last name, email, etc. What if we described each user a bit more precisely? Or if there weren’t only two users, but say, a thousand? Then it would be at the least inconvenient. To some extent, we can arrange it with objects. The second problem is that already at the writing stage, we need to know the exact number of users that will be described in the system. This would be extremely limiting in real applications, and it would be better to be able to add them dynamically. We will also be able to improve this, not with objects, but with arrays (more about which in a moment).

So let's improve our piece of code with objects:

```
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};
```

We still need to give different names for variables that store information (in the form of objects) about individual users, but this time the properties may have the same names. This makes the code not only clearer and more consistent, but it also makes it easier to perform actions on the properties of different users.

The properties of an object, as we have previously indicated, are made available with a dot and a key name. We can both read and modify the value associated with a particular key. What is more, we can also modify the whole object by adding a new, previously non-existent property. We also do this using dot notation – if during an attempt to modify the property the interpreter does not find the key we specify, it will create it.

```
console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557
```

If you can add new fields to an existing object, can you also delete them? Of course you can: the delete operator is used for this.

```
console.log(user2.phone); // -> 904-399-7557
delete user2.phone;
console.log(user2.phone); // -> undefined
```

The usability of objects goes far beyond using them as data storage structures. However, it is a separate topic, largely related to object-oriented programming, which is part of more advanced programming techniques. In our case, objects will be simple structures, consisting of key–value pairs.


#### Array

An **array**, like an object, is a complex data type that can be used to store a data collection. Similar to an object, the stored data (the values) can be of any type. The difference between these structures is that in an array we only store values, without the associated names (i.e. the keys).

So how do we know which element of the array we are referring to if we cannot point to it by name? We know it because the elements of the array are ordered (but not necessarily sorted) and take up consecutive, numbered positions inside it. The number of the field where a particular value in the array is located is called an index or a position. The index starts from 0.

The easiest way to create arrays in JavaScript is to use square brackets (it’s an array literal). This way, we can create both an empty array, into which the elements will be inserted later, and an array containing some initial elements (which will be separated by commas). Referring to a particular array element, we use bracket notation – after the name of the array variable, we write a square parenthesis, in which we put the index of the element we are interested in.

Let's take a look at a simple example:

```
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
```

To begin with, we have declared and initiated the `days` array, which contains seven shortened days of the week names. The elements of this array are data of the String type. Bearing in mind that the indexes (the item positions) in the array start from 0, we display three selected days of the week on the console. Then we change the element at index 0, and the "Sun" value is replaced by "Sunday". The last piece of code is a declaration of an empty array and an attempt to read a non-existent element from it.

How can we add a new element to an existing array, for example, an empty one?

The easiest way would be to assign a new value to a specific position using bracket notation. For the interpreter, it doesn't matter if there is already something in this index or not. It just places a new value in there. What's interesting is that we don't have to fill the array with elements one by one – you can leave empty spaces in it.

```
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat
```

In the example, we declare an empty animals array. We then place two elements, "dog" and "cat", in positions 0 and 2, leaving position 1 empty. This, however, is not the only way to add new elements to the array, and we will present others in a moment, as well as ways to remove them.

Usually, we store the same type of data in one array, but as we mentioned earlier, this is not required by JavaScript. So we can easily create an array containing elements of different types.

```
let values = ["Test", 7, 12.3, false];
```

As we have already said, an array element can be of any type. What is interesting is the fact that we can also store arrays as elements of the array, and we can access the elements of this nested array using multiple square brackets.

```
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia
```

The example shows an array declaration containing two other arrays as its components. Note that the internal arrays do not have to be the same length (in many other programming languages, this is required).

##### What can arrays be useful for in practice?

They are primarily a convenient way to store a collection of elements under one name. Additionally, it is very important that we can add new elements to an array while the program is running.

Remember the example with the users of the system we tested while discussing objects? One of the downsides of the solution presented there was the need to declare variables for all users, so at the stage of writing the program we had to know the number of users. Using an array, we can add new users while the program is running. We mentioned several times that the array elements can be any data, including objects. As a reminder, let's repeat the example in which we declare two object variables, user1 and user2, containing information about two system users:

```
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};
```

Let's put information about these two users into the users array and try to display some information as part of the test:

```
let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21
```

Let's try to add a new user to the array. We will do it using the only way we know so far, which is by assigning a new element to a free index (this is a continuation of the previous example).

```
users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}

console.log(users[0].name); // -> Calvin
console.log(users[1].name); // -> Mateus
console.log(users[2].name); // -> Irene
```

During the program's operation, it is possible to interact with the user, for example, to retrieve data the user has entered. Such data could be used to create more objects and extend the array with elements we did not know about while writing the program.

Now let's do a little experiment, and apply the typeof operator to the variable containing the array. The result may be somewhat surprising:

```
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days); // -> object
```

To speak quite generally, in JavaScript, everything except primitives is an object. **Arrays** are also treated as a special kind of object. The `typeof` operator does not distinguish between object types (or more precisely, classes), so it informs us that the days variable contains an object. If we would like to make sure that the variable contains an array, we can do it using the `instanceof` operator, among others. It is closely related to object-oriented programming, which we won't talk about in this course, but at the moment we only need to know how to use it in this one specific situation.

```
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false
```

The `instanceof` operator is a two-argument operator, which requires the tested variable (or literal) and object class to be specified. In our case, the class `isArray`. The operator returns `true` or `false`, depending on the test 
result.

Quite recently we introduced the concepts of **method** and **property**. They appeared when we were talking about the String type. These were functions and values related to a specific object. Now it turns out that an array is implemented as an object in JavaScript, so it probably also has its methods and properties. And indeed it does. There are many very useful methods that help us to work with arrays, such as combining arrays, cutting out elements, sorting, or filtering.

We will only look at some of them now, because many others require us to be able to create our own functions. We will come back to some of them in the section dedicated to functions.

##### length

The length property is used to get information about the length (the number of elements) of the array (including empty positions between existing elements).

```
let names  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names[5] = "Amelia";
console.log(names.length); // -> 6

console.log(names); // -> ["Olivia", "Emma", "Mateo", 
"Samuel", undefined, "Amelia"]
console.log(names[3]); // -> Samuel
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Amelia
```

##### indexOf

The `indexOf` method is used to search the array to locate a given value. If the value is found (the element is in the array), its index (position) will be returned. The method returns -1 if the element is not found. If there is more than one element with the same value in the array, the index of the first element is returned.

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
```

![](images/indexof.png)

##### push

The `push` method places the element given as its argument at the end of the array. The length of the array is increased by 1, and the new element is inserted on the right (it has the largest index of all elements).

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // - > ["Olivia", "Emma", "Mateo", 
"Samuel", "Amelia"]
```

![](images/push.png)


##### unshift

The `unshift` method works similarly to push, the difference being that a new element is added to the beginning of the array. The array length is increased by 1, all the old elements are moved to the right and the new element is placed in the empty space that has been created at the beginning of the array. The index of the new element is 0.

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
```

![](images/unshift.png)


##### pop

The `pop` method allows you to remove the last element from the array. As a result of its execution, the element with the largest index is returned, while at the same time it is removed from the original array. The length of the array is obviously reduced by 1.

```
let names= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.pop();
console.log(names.length); // -> 3
console.log(name); // -> Samuel
console.log(names); // -> ["Olivia", "Emma", "Mateo"]
```

![](images/pop.png)


##### shift

The `shift` method works similarly to pop, only this time we remove the element from the beginning of the array (with the index 0). The removed element is returned by the method, and all other elements are shifted to the left, filling the empty space. The length of the original array is reduced by 1.

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.shift();
console.log(names.length); // -> 3
console.log(name); // -> Olivia
console.log(names); // -> ["Emma", "Mateo", "Samuel"]
```

![](images/shift.png)


##### reverse

The `reverse` method inverts the order of the array.

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

names.reverse();
console.log(names); // -> ["Samuel", "Mateo", "Emma",
 "Olivia"]
```

![](images/reverse.png)


##### slice

The `slice` method allows you to create a new array from selected elements of the original array. Calling the method does not affect the original array. The method takes either one or two integer values as arguments.

The basic combinations are:

 * one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;
 * two arguments larger than zero – the element from the index specified as the first argument to the element specified as the second argument are copied;
 * two arguments, first positive, second negative – all elements from the specified index to the end of the array are copied, except for the specified number of the last elements (e.g. argument -3 means that we do not copy the last three elements)
 * one negative argument – the specified number of the last elements are copied to the end of the array (e.g. -2 means that you copy the last two elements).

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

let n2 = names.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names.slice(0, -1);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]

console.log(names); // -> ["Olivia", "Emma", "Mateo",
 "Samuel"]
```

##### concat

The `concat` method creates a new array by attaching elements from the array given as an argument to the original array elements. The method changes neither the original array nor the array specified as an argument.

```
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames);

console.log(names); // -> ["Olivia", "Emma", "Mateo",
 "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo", "Samuel", "William", "Jane"]
```

So far, arrays are the most complicated programming element we've learned. So it wouldn't be any wonder if you needed to go through this part of the course once more. Arrays are very important, so it is worth taking some more time to understand them well. We will return to arrays more than once, among other things when discussing loops and functions.

### Summary

This chapter contains quite a lot of information. We started the chapter with a discussion of simple types, which apart from the String type, shouldn't really cause any problems. The Number, BigInt, or Boolean types are not by chance called primitive.

While discussing the String type, we learned what autoboxing is (automatic conversion of a primitive to an object related to that primitive) and how we can use methods related to the String object.

Some space was devoted to discussing data conversion. At the end we looked at some basic information about complex types, limiting ourselves to objects and arrays. Remember that we introduced objects in a very simplified form, which will allow us to use them as records (i.e. data types consisting of key–value fields). What we discussed is related to object-oriented programming, which you may have heard about, but is not part of the current course.

Arrays have been discussed in a little more detail. We will come back to them more than once, because they are one of the basic elements used in practice. We will expand on them in the loops and functions part of the course.
