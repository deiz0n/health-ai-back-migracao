import type { UserModel } from "../../domain/models/UserModel";
import { UserAlreadyExistsError } from "../errors/user/UserAlreadyExistsError";
import type { UserRepositoryPort } from "../ports/UserRepositoryPort";
import type { RegisterUserUseCase } from "../use-cases/RegisterUserUseCase";

export class RegisterUserService implements RegisterUserUseCase{
    constructor(private readonly repository: UserRepositoryPort) {}

    async execute(user: UserModel): Promise<UserModel> {
        await this.isValid(user);
        return this.repository.save(user);
    }

    private async isValid(user: UserModel): Promise<void> {
        const findByEmail = await this.repository.findByEmail(user.email);
        if (findByEmail) throw new UserAlreadyExistsError('Email já cadastrado');

        if (user.cpf) {
            const findByCpf = await this.repository.findByCpf(user.cpf);
            if (findByCpf) throw new UserAlreadyExistsError('CPF já cadastrado');
        }

        if (user.crm) {
            const findByCrm = await this.repository.findByCrm(user.crm);
            if (findByCrm) throw new UserAlreadyExistsError('CRM já castrado');
        }
    }
}