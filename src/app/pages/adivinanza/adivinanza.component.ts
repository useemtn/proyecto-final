// Importamos los módulos necesarios de Angular
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Defino el componente
@Component({
  selector: 'app-adivinanza', 
  // Indico que este componente puede existir de forma independiente
  standalone: true, 
  // Modulos importados
  imports: [FormsModule], 
  templateUrl: './adivinanza.component.html', 
  styleUrls: ['./adivinanza.component.css'] 
})
export class AdivinanzaComponent {
  // Genero un número aleatorio entre 1 y 100
  numeroAzar:number = Math.floor(Math.random() * 100 + 1); 
  // Este es el número que el usuario introduce para adivinar, lo inicializo en 0
  numeroEntrada: number = 0; 
  // Mensaje para mostrar al usuario
  mensaje:string = ''; 
  // Número de intentos que tiene el usuario para adivinar el número
  intentos:number= 5; 

  // Este método se ejecuta cuando el usuario hace un intento para adivinar el número
  comprobar() { 
    // Comprobamos si el número introducido por el usuario es válido
    if (isNaN(this.numeroEntrada) || (this.numeroEntrada < 1) || (this.numeroEntrada > 100)) {
      // Mensaje de error
      this.mensaje = "Por favor, ingresa un número entre el 1 y el 100"; 
      return;
    }
    // Mensaje en consola para saber número (esto se eliminará)
    console.log(this.numeroAzar); 
    // Compruebo si el número es igual
    if (this.numeroAzar === this.numeroEntrada) {
      this.mensaje = "¡¡HAS ACERTADO!!"; 
    // Si el número introducido es menor
    } else if (this.numeroAzar > this.numeroEntrada) {
      this.mensaje = "El número a adivinar es mayor";
    } else {
      // Si el número introducido es mayor
      this.mensaje = "El número a adivinar es menor";
    }
    // Reducción de intentos
    this.intentos--;
    // Mensaje si el usuario se queda sin intentos
    if (this.intentos == 0) {
      this.mensaje = "¡Te has quedado sin intentos! El número era " + this.numeroAzar;
    }
  }
}
