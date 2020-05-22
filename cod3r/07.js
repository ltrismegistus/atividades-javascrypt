/* 07) elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 
3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12.
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string 
com a frase: “Delta é negativo”. 
*/
let Bhaskara = function(ax2,bx,c) {
    delta = Math.pow(ax2,2) - (4*ax2*c)
    if (delta < 0){
        console.log(`delta é negativo,valor = ${delta}`)
    }else {
        console.log(`delta = ${delta}`)
        x1 = (-(bx) + delta)/2*ax2
        x2 = (-(bx) - delta)/2*ax2
        let raizes = [x1,x2]
        console.log(`raizes = ${raizes}`)
    }
}   

Bhaskara(1,-4,4)