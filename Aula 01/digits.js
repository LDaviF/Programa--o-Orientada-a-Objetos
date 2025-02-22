import promptsync from "prompt-sync";
const prompt = promptsync({sigint: true})

let id = prompt("Type your ID: \n")

let sum = 0

function digitFinder(x){
    let temp = 0
    for(let i = 0; i < x.length; i++){
        temp += Number(x.charAt(i))
    }

    let strSum = temp.toString()

    if(strSum.length == 1){
        console.log(Number(strSum)) 
        sum = temp
    } else {
        digitFinder(strSum)
    }
}
    
    digitFinder(id)