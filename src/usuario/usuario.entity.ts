import { Exclude, Expose } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import {IsNomeDeUsuario} from "./is-nome-de-usuario-unico.validator"


export class Usuario{

    public id: number

    @Expose({ name: "userName" })
    @IsNotEmpty({ message: "O nome de usuário é obrigatório" })
    @IsString({ message: "O nome de usuário deve ser uma string" })
    @IsNomeDeUsuario({ message: "O nome de usuário deve ser único" })
    public nomeDeUsuario: string

    @IsEmail({}, { message: "Email inválido" })
    public email: string

    @Expose({ name: "password" })
    @Exclude({ toPlainOnly: true })
    @IsNotEmpty({ message: "A senha é obrigatória" })
    public senha: string


    @Expose({ name: "fullName" })
    @IsNotEmpty({ message: "O nome completo é obrigatório" })
    public nomeCompleto: string


    @Expose({ name: "joinDate" }) // alias para dataDeEntrada'
    public dataDeEntrada: Date
}