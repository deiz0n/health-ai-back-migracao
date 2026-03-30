import { ResourceNotFoundError } from "../ResourceNotFoundError";

export class UserNotFoundError extends ResourceNotFoundError {
    constructor(msg: string) {
        super(msg);
        this.name = 'UserNotFoundError';
    }
}