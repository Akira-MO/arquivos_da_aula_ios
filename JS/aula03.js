// Estrutura de repetição

let aluno = prompt('Insira o nome do aluno: ');
let nota01 = Number(prompt(`Qual foi a primeira nota de ${aluno}?`));
let nota02 = Number(prompt(`Qual foi a segunda nota de ${aluno}?`));

let media = (nota01 + nota02) / 2;
const mediaAp = 7;

// Estrutura de condição simples (simples porque foi apenas utilizado o if)
    // if(media >= mediaAp) {
    //     console.log("Aluno foi aprovado!")
    // }

if(media >= mediaAp) {
    alert(`A média de ${aluno} foi ${media}, aprovado!`);
}
else {
    alert(`A média de ${aluno} foi ${media}, reprovado!`);
}

alert("Fim do programa.");
