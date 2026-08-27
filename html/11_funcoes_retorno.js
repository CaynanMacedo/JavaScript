// AULA 11 FUNÇÕES DE RETORNO
//FUNÇÕES VAZIAS (VOIDS)


somar(9, 5)

//Funções com retorno e parametro
function somar(n1, n2){
    let soma = n1 + n2
    console.log(`a soma de ${n1} e ${n2} é ${soma}`)
}


function somarNumeros(){

    let n1 = 5
    let n2 = 4
    let soma = n1 + n2 

    ;
}

function numeroPositivo(){
    let n1 = 4
    let resposta = "Negativo"

    if(n1 >= 0 ){
        resposta = "Positivo"
    }

    console.log(`O numero ${n1} é ${resposta} `);

}