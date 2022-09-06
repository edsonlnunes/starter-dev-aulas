export interface ServicoEmail {
  enviarEmail(destino: string, titulo: string, mensagem: string): boolean;
}
