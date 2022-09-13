import { Aluno } from "./aluno";

const alunos = [
  new Aluno("Gabriel", 20),
  new Aluno("Edson", 24),
  new Aluno("Marcelo", 30),
  new Aluno("Thobias", 25),
  new Aluno("Niches", 29),
  new Aluno("Bryan", 18),
  new Aluno("Leo", 20),
];

const gabarito = ["A", "B", "A", "C", "B", "A", "B", "A", "B", "B"];

const possiveisRespostas = ["A", "B", "C"];

for (const aluno of alunos) {
  for (const respostaGabarito of gabarito) {
    const indiceAleatorio = Number((Math.random() * 2).toFixed());

    const respostaAluno = possiveisRespostas[indiceAleatorio];

    if (respostaAluno === respostaGabarito) {
      const nota = aluno.recuperarNota + 1;
      aluno.atualizarNota(nota);
    }
  }

  aluno.atualizarStatus();
}

const alunosAprovados = alunos.filter(
  (aluno) => aluno.recuperarStatus === "Aprovado"
);

const alunosReprovados = alunos.filter(
  (aluno) => aluno.recuperarStatus === "Reprovado"
);

const melhorAluno = alunos.reduce((melhor, aluno) => {
  if (aluno.recuperarNota > melhor.recuperarNota) {
    return aluno;
  }

  return melhor;
});

const piorAluno = alunos.reduce((pior, aluno) => {
  if (aluno.recuperarNota < pior.recuperarNota) {
    return aluno;
  }

  return pior;
});

const media =
  alunos
    .map((aluno) => aluno.recuperarNota)
    .reduce((total, nota) => total + nota) / alunos.length;

console.log(`
== Alunos aprovados ==
${alunosAprovados
  .map(
    (aluno) => `Nome: ${aluno.recuperarNome} - Nota: ${aluno.recuperarNota}\n`
  )
  .join("")}

== Alunos reprovados ==
${alunosReprovados
  .map(
    (aluno) => `Nome: ${aluno.recuperarNome} - Nota: ${aluno.recuperarNota}\n`
  )
  .join("")}

== Média da turma ==
Média: ${media.toFixed(2)}

== Melhor aluno ==
Nome: ${melhorAluno.recuperarNome} - Nota: ${melhorAluno.recuperarNota}

== Pior aluno ==
Nome: ${piorAluno.recuperarNome} - Nota: ${piorAluno.recuperarNota}

`);
