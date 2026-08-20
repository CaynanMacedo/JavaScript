/* 4. João Papo-de-Pescador
João Papo-de-Pescador, homem de bem, contratou um sistema para controlar o rendimento diário de
seu trabalho.
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (**50 quilos**) deve pagar uma multa de `R$ 4,25` por quilo
excedente.
João precisa que você faça um programa que
- Leia a variável de peso dos peixes pescados e calcule o excesso
- Grave na variável excesso a quantidade de quilos além do limite
- Grave na variável multa o valor da multa que João deverá pagar
Mostre na tela os dados do programa com as mensagens adequadas.
*/
let prompt = require("prompt-sync")()

let peso = parseFloat ( prompt("Digite o peso do peixe: ") )
let excesso = peso - 50  

if(peso <= 50 ){
    console.log("O peixe esta no peso aceitavel");
} else {
    excesso = excesso * 4.25
    console.log("A multa por peso sera de R$" +excesso);
}