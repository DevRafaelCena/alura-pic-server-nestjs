import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('/users')
export class UsuarioController {
    
    constructor(private usuarioService: UsuarioService) {}


    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)

        if(!usuarioEncontrado) {
            //throw new NotFoundException(`Usuário ${nomeDeUsuario} não encontrado`)
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: `Usuário ${nomeDeUsuario} não encontrado`
            })
        }

        return usuarioEncontrado
    }

    @Post()
    public newUser(@Body() user:Usuario): NestResponse{   
        
               
        const usuarioCriado = this.usuarioService.newUser(user)    

        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({'Location': `/users/${usuarioCriado.nomeDeUsuario}`})
            .comBody(usuarioCriado)
            .build()
       
        
        
    }
}