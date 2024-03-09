import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-juego-celdas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class JuegoCeldasComponent {
  celdas = Array(9).fill(0);
  jugador = 1;
  nEquis = 0;
  nCirculos = 0;

  celdaClick(i: number) {
    if (this.celdas[i] === 0) {
      if (this.jugador === 1 && this.nEquis < 3) {
        this.celdas[i] = 1;
        this.nEquis++;
        this.jugador = 2;
      } else if (this.jugador === 2 && this.nCirculos < 3) {
        this.celdas[i] = 2;
        this.nCirculos++;
        this.jugador = 1;
      }
    } else {
      alert("Esa celda está ocupada, elige otra");
    }

    // Aquí puedes agregar la lógica para determinar el ganador
  }
}
