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
  emptyCell = '?';
  board = [
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ],
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ],
    [ { value: this.emptyCell }, { value: this.emptyCell }, { value: this.emptyCell } ]
  ];
  currentPlayer = 'X';
  winner = false;
  cat = false;

  constructor() {
    this.reset();
  }

  clearBoard(): void {
    this.board.forEach(row => {
      row.forEach(cell => {
        cell.value = this.emptyCell;
      });
    });
  }

  reset(): void {
    this.currentPlayer = 'X';
    this.winner = false;
    this.cat = false;
    this.clearBoard();
  }

  isTaken(cell:any): boolean {
    return cell.value !== this.emptyCell;
  }

  checkForMatch(cell1:any, cell2:any, cell3:any): boolean {
    return cell1.value === cell2.value &&
           cell1.value === cell3.value &&
           cell1.value !== this.emptyCell;
  }

  isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell.value !== this.emptyCell));
  }

  checkForEndOfGame(): boolean {
    const rowMatch = this.checkForMatch(this.board[0][0], this.board[0][1], this.board[0][2]) ||
                     this.checkForMatch(this.board[1][0], this.board[1][1], this.board[1][2]) ||
                     this.checkForMatch(this.board[2][0], this.board[2][1], this.board[2][2]);
    const colMatch = this.checkForMatch(this.board[0][0], this.board[1][0], this.board[2][0]) ||
                     this.checkForMatch(this.board[0][1], this.board[1][1], this.board[2][1]) ||
                     this.checkForMatch(this.board[0][2], this.board[1][2], this.board[2][2]);
    const diagMatch = this.checkForMatch(this.board[0][0], this.board[1][1], this.board[2][2]) ||
                      this.checkForMatch(this.board[0][2], this.board[1][1], this.board[2][0]);

    this.winner = rowMatch || colMatch || diagMatch;
    this.cat = !this.winner && this.isBoardFull();
    return this.winner || this.cat;
  }

  move(cell:any): void {
    cell.value = this.currentPlayer;
    if (!this.checkForEndOfGame()) {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
