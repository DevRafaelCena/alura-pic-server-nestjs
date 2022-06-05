import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('/users')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}


    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)

        return usuarioEncontrado
    }

    @Post()
    public newUser(@Body() user:Usuario): Usuario{        

        const usuarioCriado = this.usuarioService.newUser(user)
        return usuarioCriado
        
    }
}