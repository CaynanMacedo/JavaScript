/* 3. IMC
Crie um programa que peça a altura e o peso do usuário e, usando o cálculo do IMC, exiba se a pessoa está com seu peso ideal ou se está com sobrepeso.
*/
let prompt = require("prompt-sync")()

let peso = parseFloat ( prompt("Digite seu peso: ") )
let altura = parseFloat (prompt("Digite sua altura: ") ) 
let imc = peso / (altura * altura)

if(imc < 18.5 ){
    console.log("Voce esta com o peso ideal");
} else{
    console.log("Voce esta com sobrepeso");
}