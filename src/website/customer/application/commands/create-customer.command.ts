export class CreateCustomerCommand {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
  ) {}
}
