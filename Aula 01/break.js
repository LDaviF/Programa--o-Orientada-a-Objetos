import promptsync from "prompt-sync";
const prompt = promptsync({sigint: true})

let price = 500

console.log("\nChoose your type of ticket: ")
console.log("1 - General")
console.log("2 - Guest")
console.log("3 - Elderly")
console.log("4 - Employee")
console.log("5 - Elderly and Employee")
console.log("6 - Kid\n")


let ticketType = Number(prompt("Select your type using the corresponding number: \n"))

switch(ticketType){
    case 1:
        console.log(`the price is ${price}$ \n`)
        break
    case 2:
        price = price*0.75
        console.log(`The discount is 25% and the price is ${price}$ \n`)
        break
    case 3:
        price = price*0.5
        console.log(`The discount is 50% and the price is ${price}$ \n`)
        break
    case 4:
        price = price*0.5
        console.log(`The discount is 50% and the price is ${price}$ \n`)
        break
    
    case 5:
       price = price*0.25
       console.log(`The discount is 50% on top of the already discounted price, and the price is ${price}$ \n`)
       break
    
    case 6:
       price = 0
       console.log(`The discount is 100% and the price is ${price}$ \n`)
       break
    
    }