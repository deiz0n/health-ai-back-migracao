export interface UsuarioProps {
  id: string;
  nome: string;
  sobrenome: string;
  crm: string;
  email: string;
  senha?: string | undefined;
  cpf?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export class UsuarioModel {
  id: string;
  nome: string;
  sobrenome: string;
  crm: string;
  email: string;
  senha?: string | undefined;
  cpf?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;

  constructor(props: UsuarioProps) {
    this.id = props.id;
    this.nome = props.nome;
    this.sobrenome = props.sobrenome;
    this.crm = props.crm;
    this.email = props.email;
    this.senha = props.senha;
    this.cpf = props.cpf;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
