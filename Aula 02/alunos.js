import { validate } from 'bycontract';

class Turma{
    #numero;
    #professor;
    #alunos;
    #qtdadeAlunos;

    constructo(nroTurma, nomeProfessor, vagas){
        validate(arguments, ["Number", "String", "Number"]);
        if(nroTurma<=0 || nomeProfessor.length == 0 || vagas <= 0){
            this.#numero = -1;
        }
        this.#numero = nroTurma;
        this.#professor = nomeProfessor;
        this.#alunos = new Array(vagas);
        this.#qtdadeAlunos = 0;
    }
}

let turma1 = new Turma(10, 'Bernardinho', 20);