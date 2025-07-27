// Modelo de datos para Usuario

export class Usuario {
  constructor(
    public _id: string = '',
    public username: string = '',
    public password: string = ''
  ) {}
}
