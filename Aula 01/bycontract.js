import { validate } from "bycontract";

function itsEven(value){
    validate(value, "number");
    if(value%2==0){
        return true;
        
    } else {
        return false;
    }
}

console.log(itsEven(7))