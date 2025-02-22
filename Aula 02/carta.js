import { validate } from "bycontract";

class Carta{
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe, valor){
        validate(arguments, ["String","String"]);
        if(!this.verificaNaipe(naipe) || !this.verificaValor(valor)){
            this.#naipe = 'invalido';
            this.#valor = 'invalido';
            return;
        }
        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    valores(){
        return['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    }

    naipes(){
        return ['Ouros', 'Paus', 'Espadas', 'Copas '];
    }

    toInt(){
        switch(this.#valor){
            case 'A':
                return 14;
            case 'K':
                return 13;
            case 'Q':
                return 12;
            case 'J':
                return 11;
            default:
                return Number(this.#valor);
        }
    }

    verificaNaipe(naipe){
        validate(arguments, ["String"]);
        naipe = naipe.toLowerCase();
        return this.naipes().includes(naipe);
    }

    verificaNaipe(valor){
        validate(arguments, ["String"]);
        valor = valor.toLowerCase();
        return this.valores().includes(valor);
    }

    get naipe(){
        return this.#naipe; 
    }

    set naipe()





}