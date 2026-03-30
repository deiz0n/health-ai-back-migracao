export class ResourceNotFoundError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'ResourceNotFoundError';
    }
}