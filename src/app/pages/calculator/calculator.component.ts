// Importo los módulos necesarios de Angular
import { Component } from '@angular/core';

@Component({
  selector: 'calculator-root', 
  templateUrl: './calculator.component.html', 
  styleUrls: ['./calculator.component.css'] 
})
export class CalculatorComponent {

  // Defino las variables que voy a usar en mi componente
  subText:string = ''; 
  mainText:string = ''; 
  operand1: number = 0; 
  operand2: number = 0; 
  operator:string = ''; 
  calculationString:string = ''; 
  answered:boolean = false; 
  operatorSet:boolean = false; 

  // Este método se ejecuta cuando se presiona una tecla
  pressKey(key: string) {
    // Si la tecla es un operador
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      // Obtengo la última tecla presionada
      const lastKey = this.mainText[this.mainText.length - 1];
      // Si la última tecla es un operador, establezco operatorSet a verdadero
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.operatorSet = true;
      }
      // Si operatorSet es verdadero o mainText está vacío, retorno
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }
      // Establezco operand1 al valor de mainText y operator a la tecla presionada
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    // Si mainText tiene una longitud de 10, retorno
    if (this.mainText.length === 10) {
      return;
    }
    // Añado la tecla presionada a mainText
    this.mainText += key;
  }

  // Este método se ejecuta cuando se presiona la tecla AC (para limpiar)
  allClear() {
    // Limpio mainText, subText y establezco operatorSet a falso
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }

  // Este método se ejecuta cuando se presiona la tecla =
  getAnswer() {
    // Establezco calculationString a mainText y operand2 al segundo operando de la operación
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    // Dependiendo del operador, realizo la operación correspondiente
    if (this.operator === '/') {
      // Si el operador es /, divido operand1 entre operand2
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      // Si el operador es x, multiplico operand1 por operand2
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      // Si el operador es -, resto operand2 a operand1
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      // Si el operador es +, sumo operand1 y operand2
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else {
      // Si el operador no es ninguno de los anteriores, muestro un error
      this.subText = 'ERROR: Invalid Operation';
    }
    // Establezco answered a verdadero
    this.answered = true;
  }
}
