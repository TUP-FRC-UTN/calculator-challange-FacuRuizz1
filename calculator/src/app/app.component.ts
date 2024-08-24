import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraViewComponent } from './calculadora-view/calculadora-view.component';
import { CalculadoraActionsComponent } from './calculadora-actions/calculadora-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraActionsComponent,CalculadoraViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  actualizarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
