export class ResourceAlreadyExistsError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'ResourceAlreadyExistsError';
    }
}