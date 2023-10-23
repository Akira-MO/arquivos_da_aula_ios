// Objetos

// Exemplo: loja, registrar um cliente:
const cliente = {
    id: 123,
    nome: "Akira M",
    email: "akira.m2611@hotmail.com",
    endereco: {
        rua: "Rua Fictícia Daora",
        numero: 123,
        cep: 12345678,
        bairro: "Bairro Bacana"
    },
    perfilCliente: ["Tenis", "Camiseta"],
    bomPagador: true,
};

//para acessar dados específicos dentro dessa array, é só chamar o nome da variável e um ponto (console.log(variavel.dadoEspecifico)).
console.log(cliente);
console.log(cliente.nome);
console.log(pessoa.id, pessoa.email);
console.log(cliente.perfilCliente[1]);
console.log(cliente.endereco.cep);