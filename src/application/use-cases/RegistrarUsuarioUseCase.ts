import { UsuarioResponseDTO } from '../../domain/dtos/UsuarioResponseDTO';
import type { UsuarioModel } from '../../domain/UsuarioModel';
import { UsuarioExistenteError } from '../errors/UsuarioExistenteError';
import type { IUsuarioRepositoryPort } from '../ports/IUsuarioRepositoryPort';

export class RegistrarUsuarioUseCase {
  constructor(private repository: IUsuarioRepositoryPort) {}

  public async execute(model: UsuarioModel): Promise<UsuarioResponseDTO> {
    await this.validarUsuario(model);

    const usuario = await this.repository.salvar(model);
    return new UsuarioResponseDTO(usuario);
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
