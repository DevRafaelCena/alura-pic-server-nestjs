import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {
    private users : Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: "usuario1",
        email: "rafael.cena@hotmail.com",
        senha: "123456",
        nomeCompleto: "Rafael Cena",
        dataDeEntrada: new Date()
    }]



    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.users.find(user => user.nomeDeUsuario === nomeDeUsuario)
        return usuarioEncontrado
    }

    public newUser(user: Usuario) : Usuario {
        this.users.push(user)
        return user
    }
}