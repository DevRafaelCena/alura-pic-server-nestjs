
export class UsuarioService {
    private users = []

    public newUser(user) {
        this.users.push(user)
        return user
    }
}