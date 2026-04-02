export class InvalidTokenError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = 'InvalidTokenError';
  }
}
