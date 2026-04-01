export interface TokenManagerPort {
  generate(payload: any, expiresIn?: string): string;
  verify(token: string): any;
}
