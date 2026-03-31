import type { UserRole } from '../../../../domain/models/UserModel';

export class UserResponseDTO {
  constructor(
    public id: string,
    public fullName: string,
    public email: string,
    public role: UserRole,
    public createdAt?: string,
    public updatedAt?: string,
  ) {}
}
