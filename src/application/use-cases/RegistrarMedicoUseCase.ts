import type { MedicoModel } from '../../domain/MedicoModel';
import { MedicoExistenteError } from '../errors/MedicoExistenteError';
import type { IMedicoRepository } from '../ports/IMedicoRepository';

export class RegistrarMedicoUseCase {
  constructor(private repository: IMedicoRepository) {}

  public async execute(model: MedicoModel): Promise<MedicoModel> {
    await this.validarMedico(model);
    return this.repository.salvar(model);
  }

  private async validarMedico(medico: MedicoModel) {
    const cpfExistente = await this.repository.buscarPorCpf(medico.cpf!);
    if (cpfExistente) throw new MedicoExistenteError('CPF já cadastrado');

    const crmExistente = await this.repository.buscarPorCrm(medico.crm);
    if (crmExistente) throw new MedicoExistenteError('CRM já cadastrado');

    const emailExistente = await this.repository.buscarPorEmail(medico.email);
    if (emailExistente) throw new MedicoExistenteError('Email já cadastrado');
  }
}
