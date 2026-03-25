export class UsuarioNaoEncontradoError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'MedicoNaoEncontradoError';
  }
}
