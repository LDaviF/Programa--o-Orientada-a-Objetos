import promptsync from "prompt-sync";
const prompt = promptsync({sigint: true})

let price = 10;
let newPrice = 0
if (price < 20){
    newPrice = 50;
}
console.log(newPrice)

// ternary

let x = (y > 0) ? 10 : 20;
let str = (idade > 18)? "Yes" : "No";