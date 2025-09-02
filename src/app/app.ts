import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator';

@Component({
  selector: 'app-root',                        // <-- debe coincidir con index.html
  standalone: true,
  imports: [CommonModule, CalculatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  year = new Date().getFullYear();
}
