import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './tic-tac-toe.component.html', 
  styleUrls: ['./tic-tac-toe.component.css'] 
})
export class TicTacToeComponent {
  // Defino las variables que voy a usar en mi componente
  emptyCell:string = '?'; // Variable para representar una celda vacía
  currentPlayer:string = 'X'; // Variable para representar al jugador actual
  winner:boolean = false; // Variable para indicar si hay un ganador
  cat:boolean = false; // Variable para indicar si el juego terminó en empate (cat's game)
  // Creo un tablero de 3x3 con todas las celdas vacías
  board = [
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ],
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ],
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ]
  ];

  constructor() {
    // Al construir el componente, reseteo el juego
    this.reset();
  }

  // Método para limpiar el tablero
  clearBoard(): void {
    // Recorro todas las celdas del tablero y las pongo en vacío
    this.board.forEach(row => {
      row.forEach(cell => {
        cell.value = this.emptyCell;
      });
    });
  }

  // Método para resetear el juego
  reset(): void {
    // Establezco el jugador actual a 'X', no hay ganador, no es empate y limpio el tablero
    this.currentPlayer = 'X';
    this.winner = false;
    this.cat = false;
    this.clearBoard();
  }

  // Método para comprobar si una celda está ocupada
  isTaken(cell:any): boolean {
    return cell.value !== this.emptyCell;
  }

  // Método para comprobar si tres celdas tienen el mismo valor (y no están vacías)
  checkForMatch(cell1:any, cell2:any, cell3:any): boolean {
    return cell1.value === cell2.value &&
           cell1.value === cell3.value &&
           cell1.value !== this.emptyCell;
  }

  // Método para comprobar si el tablero está lleno
  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell.value !== this.emptyCell));
  }

  // Método para comprobar si el juego ha terminado
  checkForEndOfGame(): boolean {
    // Compruebo si hay tres en raya en alguna fila, columna o diagonal
    const rowMatch = this.checkForMatch(this.board[0][0], this.board[0][1], this.board[0][2]) ||
                     this.checkForMatch(this.board[1][0], this.board[1][1], this.board[1][2]) ||
                     this.checkForMatch(this.board[2][0], this.board[2][1], this.board[2][2]);
    const colMatch = this.checkForMatch(this.board[0][0], this.board[1][0], this.board[2][0]) ||
                     this.checkForMatch(this.board[0][1], this.board[1][1], this.board[2][1]) ||
                     this.checkForMatch(this.board[0][2], this.board[1][2], this.board[2][2]);
    const diagMatch = this.checkForMatch(this.board[0][0], this.board[1][1], this.board[2][2]) ||
                      this.checkForMatch(this.board[0][2], this.board[1][1], this.board[2][0]);

    // Si hay tres en raya, hay un ganador
    this.winner = rowMatch || colMatch || diagMatch;
    // Si no hay tres en raya y el tablero está lleno, es un empate
    this.cat = !this.winner && this.isBoardFull();
    // El juego ha terminado si hay un ganador o es un empate
    return this.winner || this.cat;
  }

  // Método para realizar un movimiento
  move(cell:any): void {
    // Establezco el valor de la celda al jugador actual
    cell.value = this.currentPlayer;
    // Si el juego no ha terminado, cambio de jugador
    if (!this.checkForEndOfGame()) {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
