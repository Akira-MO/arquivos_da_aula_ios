let newArray = [1, 2, 3, 4]
console.log(newArray);

let newArray2 = newArray.join(' * ');
console.log(newArray2);

let mercado = ["Maçã", 'Mamão', "Uva", 'Morango'];

let fruta = mercado.pop() // pop(), remove o último elemento do array.
console.log(fruta);
console.log(mercado);

// push(), insere um novo elemento no último elemento do array.
mercado.push("Limão");
console.log(mercado);

/* delete mercado[1];  serve para deletar um elemento da array.
console.log(mercado); */

// shift e unshift, insere e remove itens no começo.