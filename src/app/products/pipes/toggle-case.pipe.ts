import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  //se usa operador rest ... para agrupar todos los argumentos
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
