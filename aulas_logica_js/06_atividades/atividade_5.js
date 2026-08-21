/* 5. Time Vencedor
Faça um programa para ler o nome de 2 times de futebol e o número de gols marcados na partida
(para cada time).
- Escreva na tela o nome do vencedor.
    - Caso não haja vencedor deverá ser impressa a palavra EMPATE
*/

let prompt = require("prompt-sync")()

let time1 = prompt("Digite o nome do time 1 : ")
let time2 = prompt("Digite o nome do time 2 : ")
let gols_1 = prompt("Digite quantos gols o " +time1+ " fez: ")
let gols_2 = prompt("Digite quantos gols o " +time2+ " fez: ")

if (gols_1 > gols_2 ){
    console.log("O " +time1+ " foi o vitorioso!");
} else {
    console.log("O " +time2+ " foi o vitorioso!");
} if(gols_1 == gols_2){
    console.log("O jogo terminou em empate");
}