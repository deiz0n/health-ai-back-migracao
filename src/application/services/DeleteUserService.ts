import { UserNotFoundError } from "../errors/user/UserNotFoundError";
import type { UserRepositoryPort } from "../ports/UserRepositoryPort";
import type { DeleteUserUseCase } from "../use-cases/DeleteUserUseCase";

export class DeleteUserService implements DeleteUserUseCase {
    constructor(private readonly repository: UserRepositoryPort) {}
    
    async execute(id: string): Promise<void> {
        await this.isExists(id);
        return this.repository.delete(id);
    }

    private async isExists(id: string): Promise<void> {
        const user = await this.repository.findById(id);
        if (!user) 
            throw new UserNotFoundError(`Usuaário com id ${id} não encontrado`)
    }
    
}