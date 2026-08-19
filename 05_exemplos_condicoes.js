let prompt = require("prompt-sync")()

/*
let usuario = prompt("Digite o seu usuario: ")

if ( usuario == "gemaplys") {
    console.log("Seja bem-vindo Gemaplys ");
} else {
    console.log("sai daqui fake");
}
*/

let idade = parseInt( prompt("Digite sua idade :") )
if(idade > 99 ){
    console.log("idade invalida, tente novamente ");
} 

if(idade <= 0 ){
    console.log("idade invalida, tente novamente");
}
console.log(" a idade digitada foi :" +idade)