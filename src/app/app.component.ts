import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // tslint:disable-next-line: no-inferrable-types
  nombre       = 'SpiderMan';
  nombre2      = 'juAn DiLloN';
  arreglo      = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
PI             = Math.PI;
  // tslint:disable-next-line: no-inferrable-types
  porcentaje   = 0.234;
  salario      = 1234.5;

  heroe        = {
    nombre: 'Javier',
    clave: 'Dalessandro',
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  fecha: Date   = new Date();
  // tslint:disable-next-line: no-shadowed-variable
  valorPromesa  = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('LLegó la data');
    }, 4500);
  });

  activar = true;

  idioma: string;
  videourl     = 'https://www.youtube.com/embed/Ff5SGVmiDOo';
  // tslint:disable-next-line: variable-name
}
