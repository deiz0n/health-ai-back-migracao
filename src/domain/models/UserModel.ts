export enum UserRole {
  ADMIN = 'ADMIN',
  CLINICIAN = 'CLINICIAN',
  PATIENT = 'PATIENT',
}

export class UserModel {
  constructor(
    public fullName: string,
    public email: string,
    public password: string,
    public role: UserRole,
    public address?: string,
    public crm?: string,
    public cpf?: string,
    public createdAt?: string,
    public updatedAt?: string,
    public readonly id?: string,
  ) {}
}
