---
title: "JavaScript: Building Blocks and Hello, World!"
date: "2019-07-03"
template: "post"
slug: "JavaScript Building Blocks and Hello, World!"
tags: ["javascript"]
---

#### Goals ####
We will be getting familiar with the building blocks of code and specifically how they relate to JavaScript.

## Bits ##
***
At the smallest scale in the computer, information is stored as bits. The bit works similarly to decimal numbers but instead of 10 different digits, is has only 2, and the weight of each increases by a factor of 2 from right to left.

<br />
<div style="text-align: center;">
    <img src="https://media.giphy.com/media/VD5OUTaiFWsF1cp9Wl/giphy.gif#bit-counter" />
</div>

* Computers manipulate data in bytes
* There are eight bits in one byte e.g. 0 1 0 1 1 0 1 0.
* n bits yields 2^n patterns, so it follows 8 bits can make 256 patterns and one byte can hold a number between 0 and 255
* One byte can store one character, e.g. 'A' or '7' or '$'


## Values and Types ##
***
In the JavaScript environment, a value is any meaningful chunk of bytes. There are 7 basic vlaue types in JavaScript.
* `number` for numbers of any kind: integer or floating-point.
* `string` for representing text. Single quotes, double quotes or backticks are used to mark strings, as long as the uotes at the start and the end of the string match.
* `boolean` for `true`/`false`.
* `null` for unkown values.
* `undefined` for unassigned values.
* `symbol` for unique identifiers.
* `object` are any number of key value pairs, used for complex data structures.

Any data type that is not an object is known as a primitive.

## Variables ##
***
Variables, also called bindings, are containers used to store data. A variable is basically like a box and you can store just about anything in it - not just strings and numbers, but also complex data and even entire functions.. There are three kinds of variable declarations in JavaScript.
* `let` is a block-scoped, local variable declaration.
* `const` is like `let`, but the value of the variable cannot be changed.
* `var` is considered an old-school variable declaration, normally we don't use it at all.

        var firstName = 'Ian' // Variable is declared and assigned a value.

* Theres a difference between assigning a variable and declaring one.

        var daphne; // here we are just declaring a variable, it is uninitialized.
        var ian = "not a sucka"; // here we are assigning and declaring a variable.

        daphne = "sucka";

        console.log(daphne)
        // > sucka
* Variable names are case sensitive, that means capitilization matters. We usually use camelCase for multi-word names

        var properCamelCase;