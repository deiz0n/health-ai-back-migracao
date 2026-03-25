export class MedicoModel {
  constructor(
    public id: string,
    public nome: string,
    public sobrenome: string,
    public crm: string,
    public email: string,
    public senha?: string,
    public cpf?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
