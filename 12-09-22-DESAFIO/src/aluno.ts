export class Aluno {
  private nome: string;
  get recuperarNome(): string {
    return this.nome;
  }

  private idade: number;
  get recuperarIdade(): number {
    return this.idade;
  }

  private nota: number;
  get recuperarNota(): number {
    return this.nota;
  }

  private status: string;
  get recuperarStatus(): string {
    return this.status;
  }

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.nota = 0;
    this.status = "Não definido";
  }

  atualizarNota(novaNota: number): void {
    if (!novaNota || novaNota < 0 || novaNota > 10)
      throw new Error("Nota inválida");

    this.nota = novaNota;
  }

  atualizarStatus() {
    this.status = this.nota < 6 ? "Reprovado" : "Aprovado";
  }
}
