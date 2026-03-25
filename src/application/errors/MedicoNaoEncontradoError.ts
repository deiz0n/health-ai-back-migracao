export class MedicoNaoEncontradoError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'MedicoNaoEncontradoError';
  }
}
