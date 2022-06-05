import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioService {
    private users = []

    public newUser(user) {
        this.users.push(user)
        return user
    }
}