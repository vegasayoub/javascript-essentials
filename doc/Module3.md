# Module 3 - Operators and User Interaction

After completing Module 3, the student will:

 * know what operators are and how to classify them (by type of operand, by number of operands, etc.);
 * be able to use assignment, arithmetic, logical, and comparison operators in practice;
 * understand the operation of the conditional operator and the typeof, instanceof, and delete operators;
 * understand what the precedence and associativity of basic operators are and be able to influence them by means of bracket grouping;
 * be able to perform basic two-way communication with the program user using the alert, confirm, and prompt dialog boxes.


## Section 1 - Assignment, arithmetic, and logical operators

Topics in this section:

 * What are operators?
 * Assignment operators
 * Arithmetic operators
 * Arithmetic operators – compound assignment operators
 * Logical operators
 * Logical operators – compound assignment operators


### Operators

Operators in programming languages are symbols (sometimes also names) that are used to perform certain actions on **arguments** called **operands**.

Operands can be both values and variables. We have encountered operators several times in previous examples, for example, the assignment symbol `=` or the keyword `typeof`.

Operators can be categorized in several ways. They are distinguished, for example, by the number of operands they work on. The addition operator `+` is a typical **binary** operator (it uses two operands), while the `typeof` operator is **unary** (it uses only one operand).

In JavaScript, there is also one `ternary operator` (operating on three operands), about which we will say a few words in a moment.

We can differentiate between **prefix operators** (occurring before the operand), **postfix operators** (after the operand) and **infix operators** (between operands). However, it’s common to categorize operators according to the context in which they are used: so we have **assignment**; **arithmetic**; **logical**; or **conditional operators**. We will further review the basic JavaScript operators according to this classification.

The same symbol can be interpreted as a different operator depending on the context, that is, most often, on the type of operands. In JavaScript, the `+` symbol is one example. If operands are numbers, the use of this operator will cause the interpreter to calculate their sum (it is an addition operator, classified as arithmetic). However, if the operands are strings, the same symbol will be treated as a concatenation operator, and the interpreter will try to join both strings of characters.

#### Assignment operators

Let's start with the assignment operators. In this group, there are operators that allow for the assigning of values to variables and constants. The basic assignment operator is the equals sign =, which we have already seen many times in the examples. This operator assigns the value of the right operand to the left operand.

```
const name = "Alice";
console.log(name); // -> Alice
```

If several assignment operators appear in a sequence, the order from right to left applies. So the sequence:

```
let year = 2050;
let newYear = year = 2051;
```

means the same as:

```
let year = 2050;
year = 2051;
let newYear = year;
```

In addition to the basic assignment operator, there are also assignment operators connected to arithmetic, logical, and string operators. We will come back to them when discussing the other operator categories.

#### Arithmetic operators

Arithmetic operators express mathematical operations, and they accept numerical values and variables. All arithmetic operators, except addition, will try to implicitly convert values to the Number type before performing the operation.

The addition operator will convert everything to a String if any of the operands is a String type, otherwise it will convert them to a Number like the rest of the arithmetic operators. The order of the operations is respected in JavaScript like in math, and we can use parentheses as in math to change the operation order if needed.

In general, it is a good habit to use parentheses to force the precedence and order of operations, not just arithmetic. The precedence of operations performed by the interpreter will not always be as intuitive as the precedence of arithmetic operations known from mathematics.

```
console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8
```

The basic binary arithmetic operators are the addition `+`, subtraction `-`, multiplication `*`, division `/`, division remainder `%` and power `**`. Their operation is analogous to what we know from mathematics, and the easiest way to trace them is to use an example:

```
const x = 5;
const y = 2;

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
```

#### Unary arithmetic operators

There are also several unary arithmetic operators (operating on a single operand). Among them there are the plus `+` and minus `-` operators.

Both operators convert operands to the Number type, while the minus operator additionally negates it.

```
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log('${str} : ${typeof str}'); // -> 123 : string
console.log('${n1} : ${typeof n1}'); // -> 123 : number
console.log('${n2} : ${typeof n2}'); // -> -123 : number
console.log('${n3} : ${typeof n3}'); // -> 123 : number
console.log('${n4} : ${typeof n4}'); // -> NaN : number
```

#### Unary increment and decrement operators

Among the arithmetic operators, we also have at our disposal the **unary increment** `++` and **decrement** `--` operators, in both prefix and postfix versions. They allow us to increase (increment) or decrease (decrement) the value of the operand by 1.

These operators in the postfix version (i.e. the operator is on the right side of the operand) performs the operation by changing the value of the variable, but returns the value before the change. The prefix version of the operator (i.e. the operator is placed before the operand) performs the operation and returns the new value.

Probably the easiest way to understand it is to use an example from the editor.

This happens because the code line:

```
console.log(n1++);
```

is interpreted as:

```
console.log(n1);
n1 = n1 + 1;
```

while the line:

```
console.log(++n1);
```

means the same as:

```
n1 = n1 + 1;
console.log(n1);
```

Keep in mind that the Number type is a floating-point type, which means that the results of some of the operations may be imprecise.

```
console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996
```

These are artefacts of floating-point arithmetic. The number will be precise for integers up to 252, but fractions may not be as precise, as many fractions are impossible to directly represent in binary format. We’ll discuss how to mitigate this in a moment when we introduce comparison operators.

#### Compound Assignment Operators

**Binary arithmetic operators** can be combined with the **assignment operator**, resulting in the addition assignment `+=`, the subtraction assignment `-=`, the multiplication assignment `*=`, the division assignment `/=`, the remainder assignment `%=`, and the power assignment `**=`.

Each of these operators takes a value from the variable to which the assignment is to be made (the left operand) and modifies it by performing an arithmetic operation using the right operand value. The new value is assigned to the left operand. For example, the code fragment below:

```
x += 100;
```

could be written down in the form:

```
x = x + 100;
```

It should therefore not be difficult to understand how the following example works:

```
let x = 10;

x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
```

### Logical operators

Logical operators work with Boolean type values (`true` or `false`). For now, we can assume that they work on operands of this type and return values of this type only. JavaScript provides us with three such operators:

 * a conjunction, i.e. logical AND (`&&` symbol)
 * an alternative, i.e. logical OR (symbol `||`)
 * a negation, i.e. logical NOT (symbol `!`)

Their meaning is the same as in mathematical logic, and if you're not sure how they work, it's easiest to explain them based on logical sentences.

Let's start with the conjunction. This is a binary operator that returns true if both operands are true. Using logical sentences, we can imagine a sentence consisting of two simple statements connected by an AND, e.g.:

> *London is a city* AND *London is in Great Britain.*

Both statements are true in this case, and after combining them with AND, a sentence is created which is also true. If any of these statements were false (or both were false) the whole sentence would also be false, e.g:

> *London is a city* AND *London is in Iceland.*

In JavaScript code it looks as simple as this:

```
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false
```

In the case of an alternative that is also a binary operator, it is enough for one of the operands to be true for the operator to return true. Coming back to our example with logical sentences, let's use a sentence made up of two statements connected by an OR operator, e.g.:

> *London is a city* OR *London is in Iceland.*

The sentence may not look overly eloquent or sensible, but from the point of view of logic, it is quite correct. It is enough that one of the statements is true, so that the whole sentence is also true. If both statements are false, then the sentence will also be false, e.g.:

> *London is a village* OR *London is in Iceland.*

Let's check what it looks like in JavaScript:

```
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false
```

The negation operator is an unary, and it changes the logical value of the operand to its opposite, that is, false to true, and true to false. Using logical sentences, we can present it with the negation NOT. Let's take as example a simple sentence that is true:

> *London is a city.*

By adding the negation to it, we change its value to false:

> *London is* NOT *a city.*

In the same way, it will work the other way round, changing a false sentence into a true one. In the code, it will look even simpler:

```
console.log(!true); // -> false
console.log(!false); // -> true
```

We can, of course, connect as many of these operators as we need, creating more complex “sentences”. As in the case of arithmetic operators, the sequence of actions is determined here. The highest priority is negation `!`, then conjunction `&&`, and finally the alternative `||`. The precedence can of course be changed by means of parentheses.

```
const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false
```

#### Logical operators and non-Boolean values

As long as operands are of the type Boolean, we can easily see what will be returned. But those operators can also be used with different data types. The easiest case is logical NOT. First, the operand is temporarily converted to a Boolean value (according to the rules explained in the previous chapter) and only then it is treated with the appropriate operator action (i.e. a true value is converted to false, and vice versa). Therefore, the NOT operator will always return either false or true. Often, double negation is used to convert any type to Boolean.

```
let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true
```

This is slightly different for binary logical operators (i.e. AND and OR). They don't return a Boolean value. In reality, they return its first or second operand. The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. The OR operator will return its first operand if it evaluates to true, and the second operand otherwise. Evaluation is simply an attempt to convert an operand to a Boolean-type value (again, according to the rules learned in the previous chapter).

```
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
```

Both operators also use **short-circuit evaluation**.

So, if the first operand of **AND** is `false`, it will be returned, and no other check will be performed.

Conversely, if the first operand of **OR** is `true`, it will be returned, and no other check will be made. This quickens code execution, but has one side effect visible in this example:

```
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0
```

The instruction `y++` will never be executed, which may be confusing.

Logical operators are usually used together with **conditional operators**, and they are especially useful in **conditional instructions** (decision making) and in **loops** (loop-ending conditions). You can learn about their practical application in the sections on conditional instructions and loops mentioned just now.


### Compound Assignment Operators

Just like arithmetic operators, **binary logical operators** can be used in combination with the assignment operator, creating a logical AND assignment `&&=` and a logical OR assignment `||=`.

It should be easy to imagine how they work. In the case of the AND operator, we can check it with the following example:

```
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false
```

The instruction `a &&= false` means exactly the same as `a = a && false`.

We can prepare a similar example for OR operations:

```
let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true
```

This time, the operation `b ||= true` is interpreted as `b = b || true`.

## Section 2 - String, comparison, and other JS operators

Topics in this section:

 * String operators: concatenation and compound assignment
 * Comparison operators
 * Other JS operators (typeof, instanceof, delete, and ternary)
 * Operator precedence


### String operators

The only operator in this group is the **concatenation** `+`. This operator will convert everything to a **String** if any of the operands is a String type. Finally, it will create a new character string, attaching the right operand at the end of the left operand.

```
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string
```

#### Compound Assignment Operators

You can probably guess that this operator can also be used in conjunction with the replacement operator. Its operation is so intuitive that we will stop with a simple example:

```
let sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191
```

### Comparison operators

Comparison operators are used to check the equality or inequality of values. **All comparison operators are binary, and all of them return a logical value representing the result of the comparison**, `true` **or** `false`.

As with other operators, JavaScript will try to convert the values that are being compared if they are of different types. It makes sense to check equality, or which is greater, using numeric representation, and JavaScript will in most cases convert types to a Number before comparison. There are two exceptions to this, strings and the **identity (strict equality) operator**. Strings are compared `char` by `char` (precisely Unicode character by Unicode character using their values).

To check if the operands are equal, we can use either the **identity** (strict equality) operator `===` or the **equality** operator `==`.

The first is more restrictive, and in order to return true, the operands must be identical (i.e. they must be equal and of the same type).

```
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false
```

The equality operator requires that they are only equal, and their types are not compared. So if the operands are of different types, the interpreter will try to convert them to numbers, for example, `false` will convert to `0`, `true` to `1`, `undefined` to `NaN`, `null` to `0`, `10n` to `10` and `"123"` to `123`, etc.

Note that if any of the operands has a `NaN` value (or has been converted to `NaN`, e.g. with undefined), the equality operator will return `false`.

```
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false
```

**Remember! Use the identity operator unless you intentionally allow for a positive comparison between the different types.**

There are also complementary operators to those just demonstrated – the **nonidentity** operator `!==` and the **inequality** operator `!=`. The first returns `true` if the operands are not identical, in other words, they are equal but of different types, or they are simply different. The second returns `true` if the operands are different.

```
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true
```

We also have operators that allow us to check if one of the operands is bigger than `>`, smaller than `<`, bigger than or equal to `>=`, and smaller than or equal to `<=`. These operators work on any type of operand, but it makes sense to use them only on numbers or values that will convert correctly to numbers.

```
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true

console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true

console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true
```

You can also use them to compare strings that do not represent numbers, but the algorithm of this comparison is quite complex, and the comparison itself is not very useful. By way of simplification, single characters of both strings are tested on the same positions. It is assumed that the values of the single characters correspond to their positions in the alphabet (the letter b has a higher value than the letter a). Upper-case letters have lower values than lower-case letters, and digits have even lower values.

```
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true
```

Note: the symbol => exists in JavaScript, but is not an operator – we use it in the construction of arrow functions.


### Other operators

The list of operators in JavaScript is much longer, but many of them would not be particularly useful at this stage of learning, such as bitwise operators, which operate on single bits of operands. However, it is worth mentioning a few more operators, some of which have already appeared in earlier examples.

#### `typeof`

We already introduced the `typeof` operator when discussing data types. It is a unary operator, which checks the type of operand (it can be a variable or a literal). The operator returns a string with the type name, such as "boolean" or "number".

If you want to refresh your knowledge of this operator, go back to the section about data types.

```
let year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean
```

#### `instanceof`

The instanceof operator appeared while discussing arrays. It is a binary operator that checks whether an object (left operand) is of some type (right operand). Depending on the test result, it returns true or false.

During this course, the usefulness of this operator is limited to testing whether a variable contains an array.

```
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false
```

#### `delete`

The unary `delete` operator was introduced while discussing objects. It allows you to delete a selected field of the object whose name is indicated with an operand.

```
let user = {
  name: "Alice",
  age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined
```

#### `ternary`

The last of the operators discussed is quite unusual, because it is the only operator using three operands. It is a conditional operator. Based on the value of the first operand (true or false), the value of the second or third operand, respectively, is returned. This operator is most often used to place one of the two values in the variable depending on a certain condition. We will come back to the operator when discussing the conditional if, but here we’ll provide only a simple example of its use. The three operands are separated from each other by ? (the first from the second) and : (the second from the third).

```
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
```

Each of these operands can be an expression that must be calculated. In the following example, the first operand is a comparison of two numbers using a comparison operator. The result of the comparison will be false, which will be used by the conditional (ternary) operator. Here we come to an important problem about operator precedence and order of execution. In a moment, we will say a few more words about it.

```
let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob
```


### Precedence

Practically in all the examples where we presented the operation of successive operators, we followed instructions in which one operator was used. In reality, usually multiple operators are used simultaneously. At this point, a quite important question arises: in what order will the interpreter perform them? This will of course affect the final result of the operators, so it is worth taking this into account when writing the instructions.

```
let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
```

In the second line of the example (variable b declaration), the operators are executed in the order we know from mathematics. First, multiplication is performed, then addition, and at the end the resulting value is assigned to the variable. In the third line (declaration of variable c) the matter gets a little more complicated. First, the sum of variable a and number 2 is calculated, then the sum of numbers 20 and 15, and both results are compared with the logical operator (less than) and the result is placed in variable c.

The JavaScript interpreter uses two operator properties to determine the sequence of operations: precedence and associativity. Precedence can be treated as a priority, with some operators having the same precedence (e.g. addition and subtraction). Associativity allows you to specify the order of execution if there are several operators with the same priorities next to each other.

Precedence can be presented as a numerical value – the higher the value, the higher the priority of the operation. If, for example, an **OP1** operator has a smaller precedence than **OP2**, then the instruction:

> *a **OP1** b **OP2** c*

will be executed as follows: first, **OP2** will be executed on operands b and c, then **OP1** will be executed on the left operand a and the right operand, resulting from **OP2**. So the instruction could be presented in the form:

> *a **OP1** ( b **OP2** c)*

If we perform the same operations (or different operations but with the same precedence), the interpreter uses associativity to determine the order of operations. Operators may have a specified left-associativity (left to right order) or right-associativity (right to left order). Let's assume that in our example, the operator OP1 has left-associativity:

> *a **OP1** b **OP2** c*

In such a situation, the OP1 operation on operands a and b will be performed first, followed by a second OP1 operation on the received result and operand c. Bearing in mind that we are dealing with left-associativity, we could write the instruction in the following form:

> *(a **OP1** b) **OP2** c*

It follows that it would be appropriate to know not only the precedence of all operators, but also their associativity. This may seem a bit overwhelming, taking into account the number of operators. Fortunately, it is usually enough to know the properties of the most basic operators and use brackets in doubtful situations. The brackets allow you to impose the order of operations, just like in mathematics. Keep this in mind when viewing the table below. It contains a list of operators we already know with their precedence and associativity, so it is quite large. You absolutely do not have to remember everything if you can use brackets to group operations.


|  |  |  |  |
|----------|----------|----------|----------|
| abstract | arguments | await | boolean |

|  |  |  |  |
|----------|----------|----------|----------|
| Precedence | Operator | Associativity | Symbol |
| 14 | Grouping	| n/a | ( … ) |
| 13 |  Field access |  ⇒| … . … |
| 12 | Function call | ⇒ |  … ( … )| 
| 11 | Postfix increment |  n/a | … ++ |
|  | Postfix decrement |  n/a | … -- | 
| 10 | Logical NOT | ⇐ | ! … |
| | Unary plus | ⇐ | + … |
| | Unary negation | ⇐ | - … |
| | Prefix increment | ⇐ | ++ … |
| | Prefix decrement | ⇐ | -- … | 
| | typeof | ⇐ | typeof … |
| | delete | ⇐ | delete … |
| 9 | Exponentiation | ⇐ | … ** … |
| 8 | Multiplication | ⇒ | … * … |
| | Division | ⇒ | … / … |
| | Remainder | ⇒ | … % … |
| 7 | Addition | ⇒ | … + … |
| | Subtraction | ⇒ | … - … |
| 6 | Less than | ⇒ | … < … |
| | Less than or equal | ⇒ | … <= … |
| | Greater than | ⇒ | … > … |
| | Greater than or equal | ⇒ | … >= … |
| | instanceof | ⇒ | … instanceof … |
| 5 | Equality | ⇒ | … == … |
| | Inequality | ⇒ | … != … |
| | Strict Equality | ⇒ | … === … |
| | Strict Inequality | ⇒ | … !== … |
| 4 | Logical AND | ⇒ | … && … |
| 3 | Logical OR | ⇒ | … \|\| … | 
| 2 | Conditional (ternary) | ⇐ | … ? … : … |
| 1 | Assignment | ⇐ | … = … ; … += … ; … *= … |


A few words of explanation about the table.

An arrow in the associativity column facing the right side means left-to-right associativity, while facing the opposite side means right-to-left associativity.

The abbreviation n/a means not applicable, because in some operators the term associativity does not make sense.

At the very beginning of the table, there are three operators that may need further explanation:

 * **grouping** is simply using brackets. They take precedence over the other operators, so we can use them to force the execution of operations to take priority;

 * **field access (member access)** is the operator used in dot notation, which is when accessing a selected object field. It takes precedence over other operators (except for brackets), so for example the instruction:

    `let x = myObject.test + 10;` means that the value of the test field of the myObject object will be fetched first, then we will add a value of 10 to it, and the result will go to the x variable;

 * **function call** precedence tells us that if we call a function, this action will take priority over other operations, except for grouping in brackets and the field access operator (dots). So in the example:

    `let y = 10 + myFunction() ** 2;` myFunction will be called first, the result returned by it will be raised to power 2, and only then we will add 10 to the total and save the result to variable y.


Remember, however, if you have any doubts, just use brackets to order the precedence of the operators used. They allow you to organize even the most confusing instructions that come to mind.

```
let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
console.log(a); // -> 60
console.log(b); // -> true
```

The use of parentheses not only forces the order of actions, but also increases the readability of the code (the person reading it does not have to wonder what and in what order it will be done).

The full list of operators and properties can be found on the [MDN pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

### Section Summary

In this chapter, we have introduced a few new operators (e.g. logical operators), and we have also solidified our knowledge about a few that we already know (e.g. assignment operators). Together with the operators, new terms describing their properties – **precedence** and **associativity** – have appeared.

It is likely that the amount of new information that has emerged, especially concerning operator precedence, may seem a bit daunting. Don't worry, it is quite normal. In fact, there are probably not very many JavaScript programmers who would be able to correctly set all operators according to their priorities.

Fortunately, we have parentheses to help, which makes it easier for us to force the priority of operations.

The operators will appear in all the examples until the end of the course, so you will gradually consolidate the knowledge you've gained, which will surely become a logical and coherent whole over time.


## Section 3 - Interacting with the user

Topics in this section:

 * How to interact with the user in JavaScript?
 * Dialog boxes – alert
 * Dialog boxes – confirm
 * Dialog boxes – prompt

### Interaction with the user

Most of the programs we deal with on a daily basis are dependent on user interaction. The user enters data, makes choices, and confirms the options given by the program. Thanks to this interaction, the program can start to use the data that is provided to it by the user during its execution (this data was not known when the program was started, nor was it known when it was written). Secondly, the program can perform certain actions conditionally, in other words, the user influences not only the data, but also its execution.

A simple example is the calculator program. The user not only enters data (e.g. the numbers 10 and 20), but also decides what to do with it (e.g. sum up).

In the case of JavaScript, interaction with the user is quite a complex topic. This is for several reasons. Do you remember that we can write programs in this language both for use in the browser (client-side) and to perform certain actions on the server-side? This division influences the potential interaction. JavaScript programs written with **node.js** for servers usually do not require such an interaction. We run them from the console level, often without a graphic environment.

Most often, the user gives certain options (e.g. path data) to the program being run in this way in the form of a configuration file and/or as call arguments. The data to run the program are then taken from disk files, databases, network services, etc. It is very rare for such console programs to need to enter some data while the program is running. If it is necessary, it is indicated by the appearance of appropriate information on the console, on which you need to enter some data.

This is definitely different for client-side applications. In most cases, they require continuous interaction between the user and the program. Using them, we can click on buttons, enter values into forms, select data from drop-down lists, and so on. The problem is that practically all elements used for this purpose are HTML components. Using them may not be very difficult, but it does require at least a thorough understanding of the basics of the DOM (Document Object Model) used in web pages, and the basics of HTML itself

An example of an HTML page that uses two elements for interaction, for which JavaScript code is used, is shown below:

```
<!DOCTYPE html>
<html>
    <head></head>
    <body>      
        <input id="myId" type="text"></input>
        <button onclick="console.log(document.getElementById('myId').value)">Get Text</button>
    </body>
</html>
```

Run this code in the editor, making sure it is in the window dedicated to HTML (index.html tab). The `<input>` element is an input field where you can enter any text. In our case, we’ve given this element the `myId` identifier. The `<button>` element, as you can guess, corresponds to ... a button. Using the `onClick` attribute, we have indicated that if the button is clicked, a piece of JavaScript code is to be run. In this code, we refer to the document object (a fragment of the DOM model), which represents our website. We search for the element with the `myId` identifier, retrieve its value (i.e. the text entered) and print the result on the console.

As you can see, the idea is relatively simple, but both the DOM model and HTML language are definitely beyond the scope of the current course. So how can we communicate with the user if we do not use these standard mechanisms?

There is another solution. Please note that it is not used in modern web applications, but it allows you to easily give the user the opportunity to enter data or make certain decisions. We will use it in this course as a dummy for normal communication, rather than as an element that you will find useful in real programming. The solution is to use **dialog boxes**.

### Dialog boxes

Dialog boxes are integral parts of web browsers, and available in almost all of them, even really old ones. All of them are popup windows (or modal windows) which means that when the dialog box is displayed, it isn’t possible to interact with the webpage itself until this dialog box is closed.

This inconvenience when the popup is visible is one of the reasons why we shouldn’t overuse them. They’re perfectly fine for the learning process, and in some rare cases where important information needs to be displayed, or some input from the user is mandatory, but they should be avoided in other circumstances. We have three dialog boxes available to use.

#### Alert dialog box

The alert dialog box is the simplest one of the three, and to show an alert box, we need to call a method named `alert()`. The alert method accepts one optional parameter – the text that will be displayed. The `alert` method is a method of the object window, but for convenience, it can be used without the need to type `window.alert`, so both forms are correct and can be seen in real applications. The window object is a generalization of the browser window or tab, and gives the developer access to data related to the state of this window (for example, how far the page is scrolled down, because the console object is part of the window object) and also some methods to control this state.

```
alert("Hello, World!")
window.alert("Hello, World! for the second time");

alert(4 * 7);
alert(true);

alert("text 1", "text 2"); // only "text 1" will be displayed
```

Just like console.log, we can insert any value to the `alert` method and it will be converted to a string. The difference is that we can put an arbitrary number of parameters to `console.log`, whereas with the alert we must put only one (or zero, as it’s an optional parameter).

The `alert` window will be visible until the user clicks the OK button visible on the popup. Code execution will be halted until the dialog box is closed.

#### Confirm dialog box

The second dialog box is called the `confirm` dialog box. Like `alert`, it’s a method that accepts one optional parameter – a message that will be displayed. The difference between `alert` and `confirm` is that the `confirm` dialog box displays two buttons, the OK button and the Cancel button. Depending on the button pressed by the user, the confirm method returns a Boolean value. True is returned when the user closes the dialog box using the OK button, and false is returned when the user presses the Cancel button.

```
let decision = window.confirm("Is it OK?");
console.log(decision);
```

The values true or false, returned by the confirm method as a result of the user's decision, allow for conditional execution of some program actions. In the example below, we have additionally used a recently learned conditional operator:

```
let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"

console.log(message);
```

#### Prompt dialog box

The last of the dialog boxes is the `prompt` dialog box. It’s a further development of the `confirm` popup. Like the `confirm` dialog box, it contains the OK and Cancel buttons, but it also contains a single-line text field that allows the user to input text.

As with other dialog boxes, the `prompt` accepts an optional parameter as a message that will be displayed. The `prompt` also accepts a second optional parameter, which is the default value of the text field visible in the dialog window. The same as `confirm`, the `prompt` method will return a result that is dependent on user input.

If the user closes the window with the OK button, anything in the text field will be returned from the `prompt` method as a string. If the dialog box is closed with the Cancel button, the method will return a null value. Due to the fact that on pressing the OK button, the value returned will be of the String type, we sometimes need to convert it to another type, for example, to a Number type. As with all user input, we need to be prepared for the fact that the data provided by the user can be invalid, either by mistake or on purpose, so always treat values like this with extra caution.

```
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";

let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
```

### Section Summary

Dialog windows may not be the most effective and elegant way to communicate with the program, but they will be completely sufficient for our needs. They will allow you to retrieve data and take into account the user's decisions, which will be able to influence the program."