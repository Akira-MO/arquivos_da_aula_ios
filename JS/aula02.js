let nome = prompt('Insira o nome do aluno: ');

let nota01 = Number(prompt('Insira a primeira nota: '));
let nota02 = parseFloat(prompt('Insira a segunda nota: '));

let mediaAp = 7;
let mediaNota = (nota01 + nota02) / 2;

alert(`A média do(a) aluno(a) ${nome} foi de ${mediaNota}`);
console.log(`O aluno foi aprovado? ${(mediaNota >= mediaAp)}`);


// console.log(typeof nota01);
// typeof mostra o tipo de dado que tal item é.
// console.log(typeof nota02);
// console.log(typeof mediaNota);

// parseFloat, converte para números quebrados.
// parseInt, converte para número inteiro.
// Number, sem querer se importar sobre ser inteiro ou não, pode ser utilizado para armazenar exatamente um número.

/** let media = 7;
 * let mediaAp = 7;
 * 
 * console.log(media >= mediaAp); */

// ===, o valor e o tipo é igual.
