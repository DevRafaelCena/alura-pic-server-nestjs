import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('/users')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public newUser(@Body() user){

        const usuarioCriado = this.usuarioService.newUser(user)
        return usuarioCriado
        
    }
}