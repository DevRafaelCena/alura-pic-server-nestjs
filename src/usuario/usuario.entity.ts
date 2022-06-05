import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import {IsNomeDeUsuario} from "./is-nome-de-usuario-unico.validator


export class Usuario{

    public id: number

    @IsNotEmpty({ message: "O nome de usuário é obrigatório" })
    @IsString({ message: "O nome de usuário deve ser uma string" })
    @IsNomeDeUsuario({ message: "O nome de usuário deve ser único" })
    public nomeDeUsuario: string

    @IsEmail({}, { message: "Email inválido" })
    public email: string

    @IsNotEmpty({ message: "A senha é obrigatória" })
    public senha: string

    @IsNotEmpty({ message: "O nome completo é obrigatório" })
    public nomeCompleto: string

    public dataDeEntrada: Date
}