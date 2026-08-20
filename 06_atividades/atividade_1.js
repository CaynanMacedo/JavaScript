/* 1. Negativo ou positivo
Crie um programa que peça um número para o usuário e, em seguida, responda se o número digitado é positivo ou negativo
*/
let prompt = require("prompt-sync")()

let numero = parseInt ( prompt("Digite um numero: ") )
if (numero >= 0){
    console.log("O seu numero é positivo");
} else {
    console.log("O seu numero é negativo");
}

