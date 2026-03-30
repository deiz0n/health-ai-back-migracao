import { ResourceAlreadyExistsError } from "../ResourceAlreadyExistsError";

export class UserAlreadyExistsError extends ResourceAlreadyExistsError {
    constructor(msg: string) {
        super(msg);
        this.name = 'UserAlreadyExistsError';
    }
}