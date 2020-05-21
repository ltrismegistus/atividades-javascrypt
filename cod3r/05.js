/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando
faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004.
Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa.
Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta.
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e 
retorne R$0,30 (observe a vírgula e o ponto). 
*/

/*let valor = function (valor) {
    valor = valor
}*/


const round = (num, places = 2) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}
let res = 0.1 + 0.2
// Formato BRL + 2 casas decimais
console.log((round(res)).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }))
