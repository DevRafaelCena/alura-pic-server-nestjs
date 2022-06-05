import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {
    private users = []

    public newUser(user: Usuario) : Usuario {
        this.users.push(user)
        return user
    }
}