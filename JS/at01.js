var nome = 'Akira';
var nomeCurso = 'Desenvolvimento Web';
var N01 = 10;
var N02 = 9.5;
var MediaNota = (N01 + N02) / 2;

if(MediaNota > 7) {
    console.log(`O aluno ${nome} está aprovado no curso de ${nomeCurso} com a média ${MediaNota}.`);
}
else {
    console.log(`O aluno ${nome} está reprovado no curso de ${nomeCurso} com a média ${MediaNota}.`);
}