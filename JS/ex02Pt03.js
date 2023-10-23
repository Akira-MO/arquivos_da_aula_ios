// Calcula IMC
let peso = 50;
let altura = 1.60;

function calculaImc() {
    return imc = peso / (altura * altura)
}

console.log(`Seu IMC é de: ${calculaImc()}`);

if(calculaImc(imc) <= 18.5) {
    console.log('Você está na classificação: Magreza');
} else if(calculaImc(imc) >= 18.6 && calculaImc(imc) <= 24.9) {
    console.log('Você está na classificação: Peso Normal');
} else if(calculaImc(imc) >= 25 && calculaImc(imc) <= 29.9) {
    console.log('Você está na classificação: Sobrepeso');
} else if(calculaImc(imc) >= 30 && calculaImc(imc) <= 34.9) {
    console.log('Você está na classificação: Obesidade de Grau I');
} else if(calculaImc(imc) >= 35 && calculaImc(imc) <= 39.9) {
    console.log('Você está na classificação: Obesidade de Grau II');
} else if(calculaImc(imc) >= 40) {
    console.log('Você está na classificação: Obesidade de Grau III');
}

// Conversão
function converteParaReal(valor, euro) {
    return valor * euro
}

console.log(`500 euros convertidos para reais, retorna o valor de ${converteParaReal(500, 5.33)}`);