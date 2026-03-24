import type { MedicoModel } from '../../domain/MedicoModel';

export interface IMedicoRepository {
  excluir(medicoId: string): Promise<void>;
  listarTodos(): Promise<MedicoModel[]>;
  buscarPorId(medicoId: string): Promise<MedicoModel>;
  buscarPorCpf(cpf: string): Promise<MedicoModel | null>;
  buscarPorEmail(email: string): Promise<MedicoModel | null>;
  buscarPorCrm(crm: string): Promise<MedicoModel | null>;
  salvar(medico: MedicoModel): Promise<MedicoModel>;
}
