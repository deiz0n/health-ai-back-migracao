import type { UsuarioModel } from '../../domain/UsuarioModel';
import { UsuarioExistenteError } from '../errors/UsuarioExistenteError';
import type { IUsuarioRepositoryPort } from '../ports/IUsuarioRepositoryPort';

export class RegistrarUsuarioUseCase {
  constructor(private repository: IUsuarioRepositoryPort) {}

  public async execute(model: UsuarioModel): Promise<UsuarioModel> {
    await this.validarUsuario(model);
    return this.repository.salvar(model);
  }

  private async validarUsuario(usuario: UsuarioModel) {
    const cpfExistente = await this.repository.buscarPorCpf(usuario.cpf!);
    if (cpfExistente) throw new UsuarioExistenteError('CPF já cadastrado');

    const crmExistente = await this.repository.buscarPorCrm(usuario.crm);
    if (crmExistente) throw new UsuarioExistenteError('CRM já cadastrado');

    const emailExistente = await this.repository.buscarPorEmail(usuario.email);
    if (emailExistente) throw new UsuarioExistenteError('Email já cadastrado');
  }
}
