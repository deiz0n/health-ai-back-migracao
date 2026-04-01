import type { UserModel } from "../../domain/models/UserModel";
import { UserAlreadyExistsError } from "../errors/user/UserAlreadyExistsError";
import type { PasswordHasherPort } from "../ports/PasswordHasherPort";
import type { UserRepositoryPort } from "../ports/UserRepositoryPort";
import type { RegisterUserUseCase } from "../use-cases/RegisterUserUseCase";

export class RegisterUserService implements RegisterUserUseCase{
    constructor(
        private readonly repository: UserRepositoryPort,
        private readonly passwordHasher: PasswordHasherPort,
    ) {}

    async execute(user: UserModel): Promise<UserModel> {
        await this.isValid(user);
        
        const hashedPassword = await this.passwordHasher.hash(user.password);
        return this.repository.save({ ...user, password: hashedPassword });
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