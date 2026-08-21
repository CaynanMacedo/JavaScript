/* 2. O maior número
Crie um programa que peça dois números para o usuário e, em seguida, mostre na tela qual é o maior número
*/
let prompt = require("prompt-sync")()

let numero1 = parseFloat ( prompt("Digite um numero: ") )
let numero2 = parseFloat ( prompt("Digite outro numero: ") )

if(numero1 > numero2){
    console.log("O primeiro numero digitado é maior que o segundo ");
} else{
    console.log("O segundo numero digitado é menor que o primeiro ");
}