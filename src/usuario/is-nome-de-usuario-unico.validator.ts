import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "./usuario.service";

@ValidatorConstraint({ async: true })
class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService) { }

    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const usuarioEncontrado = !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)

        return usuarioEncontrado
    }   
    
}

export function IsNomeDeUsuario(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsNomeDeUsuarioUnicoConstraint,
      });
    };
  }