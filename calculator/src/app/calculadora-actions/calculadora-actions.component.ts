import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-calculadora-actions',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-actions.component.html',
  styleUrl: './calculadora-actions.component.css'
})
export class CalculadoraActionsComponent {
  @Input() valorUno: number = 0;
  @Input() valorDos: number = 0;
  @Output() resultadoEvent = new EventEmitter<number>();
  @Output() limpiarEvent = new EventEmitter<void>();


     sumar() {
      this.resultadoEvent.emit(this.valorUno + this.valorDos);
     }
      restar() {
        this.resultadoEvent.emit(this.valorUno - this.valorDos);
      }
      multiplicar() {
        this.resultadoEvent.emit(this.valorUno * this.valorDos);
      }
      dividir() {
        this.resultadoEvent.emit(this.valorUno / this.valorDos);
      }
      potenciar() {
        this.resultadoEvent.emit(Math.pow(this.valorUno, this.valorDos));
      }
      raiz() {
        this.resultadoEvent.emit(Math.pow(this.valorUno, 1 / this.valorDos));
      }
      limpiar() {
        this.limpiarEvent.emit();
      }
    
  }

