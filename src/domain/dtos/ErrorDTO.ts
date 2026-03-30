export class ErrorDTO {
  constructor(
    public code: number,
    public title: string,
    public status: string,
    public description: string,
    public readonly timestamp: string = new Date().toISOString(),
  ) {}
}
