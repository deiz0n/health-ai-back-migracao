export class UsuarioExistenteError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'MedicoExistenteError';
  }
}
