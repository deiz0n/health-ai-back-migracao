export class MedicoExistenteError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'MedicoExistenteError';
  }
}
