/* 
JS has primitives data types an non-primitive data types
Primitive:
- Number
- String 
- Boolean
- Undefined
- Null

Non-primitive:
- Object
- Array
- Function

JS is dynamic typed means that the variables types can be changed in the midle of the process.
*/ 

import promptsync from "prompt-sync";
const prompt = promptsync({sigint: true})

let a = "Text"
let b = 10
let c = false
console.log("a = Text: ", a, typeof(a), "\n")
console.log("b = 10: ", b, typeof(b), "\n")
console.log("c = false: ", c, typeof(c), "\n")

a = true
b = "test"
c = 10.

console.log("The type can be dynamically changed: a = true", typeof(a), "\n")
console.log("b = test ", typeof(b), "\n")
console.log("c = 10. ", typeof(c), "\n")

console.log("\n", "\n", "\n")

let name = prompt("What is your name?  \n")
let age = Number(prompt("How about your age?  \n"))

console.log("\n", "\n", "\n")

console.log(name, "\n")
console.log(age, "\n")