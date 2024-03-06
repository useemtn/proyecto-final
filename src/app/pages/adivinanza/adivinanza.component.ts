import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css'
})
export class JuegoAdivinanzaComponent {
  numeroAzar = Math.floor(Math.random() * 100 + 1);
  numeroEntrada: number = 0;
  mensaje = '';
  intentos = 5;

  comprobar() {
    if (isNaN(this.numeroEntrada) || (this.numeroEntrada < 1) || (this.numeroEntrada > 100)) {
      this.mensaje = "Por favor, ingresa un número entre el 1 y el 100";
      return;
    }
    if (this.numeroAzar === this.numeroEntrada) {
      this.mensaje = "¡¡HAS ACERTADO!!";
    } else if (this.numeroAzar > this.numeroEntrada) {
      this.mensaje = "El número a adivinar es mayor";
    } else {
      this.mensaje = "El número a adivinar es menor";
    }
    this.intentos--;
    if (this.intentos == 0) {
      this.mensaje = "¡Te has quedado sin intentos! El número era " + this.numeroAzar;
    }
  }
}