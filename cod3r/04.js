/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
imprimir o resultado e o resto da divisão destes dois valores. 
*/

let divisão = function(dividendo,divisor) {
    resultado = dividendo/divisor
    resto = dividendo%divisor
    console.log('o resultado da divisao e ' + resultado)
    console.log('e o resto e ' + resto)
}

divisão(2,1.1)