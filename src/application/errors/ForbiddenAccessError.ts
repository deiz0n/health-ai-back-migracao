export class ForbiddenAccessError extends Error {
  constructor(msg: string = 'Acesso restrito. Você não possui permissão para esta ação.') {
    super(msg);
    this.name = 'ForbiddenAccessError';
  }
}
