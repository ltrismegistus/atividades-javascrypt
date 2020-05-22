/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e 
retorne true ou false. 
*/

let verifica = function (num){
    resto = num % 3
    if (resto){
        console.log('false')
    }else {console.log('true')}
}

verifica(5)
verifica(3)
