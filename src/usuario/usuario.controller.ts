import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
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
    public newUser(@Body() user:Usuario, @Res() res){   
        
        //throw new Error("Method not implemented teste");
         
        const usuarioCriado = this.usuarioService.newUser(user)
        res.status(HttpStatus.CREATED)
            .location(`/users/${usuarioCriado.nomeDeUsuario}`)
            .send(usuarioCriado)
       
        
        
    }
}