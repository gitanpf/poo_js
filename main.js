const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Mariana", nota: 7 },
    { nome: "João", nota: 4 },
    { nome: "Pedro", nota: 6 }
];

const aprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

const aprovados = aprovados(alunos);

console.log(aprovados);