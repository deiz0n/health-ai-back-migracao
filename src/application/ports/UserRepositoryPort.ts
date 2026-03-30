import type { UserModel } from "../../domain/models/UserModel";

export interface UserRepositoryPort {
    save(user: UserModel): Promise<UserModel>;
    getAll(): Promise<UserModel[]>;
    findById(id: string): Promise<UserModel | null>;
    findByEmail(email: string): Promise<UserModel | null>;
    findByCpf(cpf: string): Promise<UserModel | null>;
    findByCrm(crm: string): Promise<UserModel | null>;
    delete(id: string): Promise<void>
}