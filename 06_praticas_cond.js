// AULA 6 PRATICAS DE CONDIÇÕES 
let prompt = require("prompt-sync")()

let preco_sp = parseInt( prompt("Digite o valor da passagem para São Paulo: ") )
let preco_arara = parseInt ( prompt("Digite o valor da passagem para Araraquara: ") )
let preco_seg = 45

let total = 0 

console.log("Escolha seu destino: ");
console.log("1 - São Paulo por R$" +preco_sp);
console.log("2 - Araraquara por R$" +preco_arara);
let resposta = prompt("Digite uma opção: ") 

if(resposta == "1"){
    total = preco_sp
} else{
    total = preco_arara
}

let seguro = prompt("Deseja adicionar um seguro por mais R$" +preco_seg+ " ?")

if(seguro == "sim"){
    total = total + preco_seg
}

let cupom = prompt("Diite seu cupom de desconto: ")

if(cupom == "caynas10"){
    console.log("Cupom de 10% aplicado ");
    let desconto = total * 0.1
    total = total - desconto
} else {
    console.log("Cupom não reconhecido ");
}


let promo = prompt("Gostaria de receber promoções no seu E-mail ? ")
if(promo == "sim"){
    console.log("Obrigado por se registrar, voce recebera novos E-mail em breve \n");
} else {
    console.log("Ok, voce não recebrea E-mail de promoções \n");
}

console.log("Formas de pagamento: ");
console.log("1 - Cartão de credito (Acrecimo de 5%)");
console.log("2 - Pix (desconto de 5%) ");
resposta = prompt("Escolha uma opção ")

if(resposta == 1){
    let acrescimo = total * 0.05 
    total = total + acrescimo
} else {
    let desc = total * 0.05
    total = total - desc
}

console.log("O valor total da viagem é de " +total);

console.log("Obrigado, e volte sempre ");
