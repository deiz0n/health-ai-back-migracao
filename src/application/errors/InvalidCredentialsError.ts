export class InvalidCredentialsError extends Error {
    constructor(msg: string = 'E-mail ou senha incorretos') {
        super(msg);
        this.name = 'InvalidCredentialsError';
    }
}
