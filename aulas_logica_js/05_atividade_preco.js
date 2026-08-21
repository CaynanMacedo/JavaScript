// sistema de precificação Conradito Doguezito

let prompt = require("prompt-sync")()

console.log("\n\nSeja bem-vindo ao sistema de cadastro de preços do Conradito Doguezito \n");

let pao = parseFloat ( prompt("Digite o valor do pão = R$") )
let salsicha = parseFloat ( prompt("Digite o valor da salsicha = R$") )
let pure = parseFloat ( prompt("Digite o valor do purê = R$") )
let queijo = parseFloat ( prompt("Digite o valor do queijo = R$") )
let bacon = parseFloat ( prompt("Digite o valor do bacon = R$") )

let lucro = parseFloat ( prompt("Qual o lucro desejado com a venda ?  = ") )
lucro = lucro / 100

let custo_dogpure = pao + salsicha + pure + bacon
let custo_dogcremoso = pao + 2 * salsicha + queijo
let custo_dogespecial = pao + salsicha + pure + queijo + bacon
let custo_combo = custo_dogpure + custo_dogcremoso + custo_dogespecial 

let venda_dogpure = custo_dogpure * lucro +  custo_dogpure
let venda_dogcremoso = custo_dogcremoso * lucro + custo_dogcremoso 
let venda_dogespecial = custo_dogespecial * lucro + custo_dogespecial
let venda_combo = custo_combo * lucro + venda_combo

console.log("Cachorro quente com pure: ")
console.log("Preco de custo: " +custo_dogpure);
console.log("Preço de venda: " +venda_dogpure);