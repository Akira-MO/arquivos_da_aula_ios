// let, escopo não redeclarado. Não pode receber outro valor que a sobrepõe
// var, escopo global. Pode ser redefinida se receber outro valor, o outro valor a sobrepõe
//const, não pode ser redeclarado e seu valor alterado

let nome = 'Akira';
var sobrenome = 'Moritaka';
var nota01 = 5;
var nota02 = 10;
const mediaAp = 7;
var idade = 17;

let Ingrid = "Acessai!"

console.log(sobrenome); //retorna no console o sobrenome
console.log("Akira"); //string
console.log('Moritaka'); //string
console.log(`Makiyama`); //string e 

console.log("O aluno " + nome + " tem o sobrenome " + sobrenome + " e possui " + idade + " anos.");
console.log(`O aluno ${nome} tem o sobrenome ${sobrenome} e possui ${idade} anos.`)