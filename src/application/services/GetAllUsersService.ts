import type { UserModel } from "../../domain/models/UserModel";
import type { UserRepositoryPort } from "../ports/UserRepositoryPort";
import type { GetAllUsersUseCase } from "../use-cases/GetAllUsersUseCase";

export class GetAllUsersService implements GetAllUsersUseCase {
    
    constructor(private readonly repository: UserRepositoryPort) {}

    execute(): Promise<UserModel[]> {
        return this.repository.getAll();
    }
    
}