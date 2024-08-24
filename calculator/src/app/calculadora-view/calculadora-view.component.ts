import { Component } from '@angular/core';
import { CalculadoraActionsComponent } from "../calculadora-actions/calculadora-actions.component";

@Component({
  selector: 'app-calculadora-view',
  standalone: true,
  imports: [CalculadoraActionsComponent],
  templateUrl: './calculadora-view.component.html',
  styleUrl: './calculadora-view.component.css'
})
export class CalculadoraViewComponent {
  valorUno: number = 0;
  valorDos: number = 0;
  resultado: number = 0;

  setNumero1(event : any) : void{
    this.valorUno = + event.target.value;
  }
  setNumero2(event : any) : void{
    this.valorDos = + event.target.value;
  }
  setResultado(resultado : number) : void{
  this.resultado = resultado;
}
limpiar() : void{
  this.valorUno = 0;
  this.valorDos = 0;
  this.resultado = 0;
}
}
