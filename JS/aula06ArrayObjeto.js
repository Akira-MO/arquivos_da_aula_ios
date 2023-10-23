// Lista de Tarefas

// Tarefa 01 - Objetos
// Tarefa 02 - Intervalo
// Tarefa 03 - Funções

let listaDeTarefas = [
    {
        id: 1,
        parte1: "Teoria de Objetos",
        parte2: "Atividade",
        concluido: true
    },
    {
        id: 2,
        parte1: "Distribuir Lanche",
        parte2: "Sair para o intervalo",
        concluido: false
    },
    {
        id: 3,
        parte1: "Funções",
        parte2: "Quizzez",
        concluido: false
    }
];

console.log(`A tarefa está concluída? ${listaDeTarefas[1].concluido}`);