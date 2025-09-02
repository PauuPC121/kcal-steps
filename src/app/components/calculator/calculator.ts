import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResultsComponent } from '../results/results';
import { CalculatorService } from '../../services/calculator';
import { UserInput } from '../../models/user-input.model';
import { Results } from '../../models/results.model';
import { AdSlotComponent } from '../ads/ad-slot/ad-slot';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, ResultsComponent, AdSlotComponent],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.scss']
})
export class CalculatorComponent {
  private fb = inject(FormBuilder);
  private calc = inject(CalculatorService);

  results: Results | null = null;

  form = this.fb.group({
    sex: ['male', Validators.required],
    age: [23, [Validators.required, Validators.min(10), Validators.max(100)]],
    heightCm: [180, [Validators.required, Validators.min(120), Validators.max(230)]],
    weightKg: [72, [Validators.required, Validators.min(30), Validators.max(250)]],
    steps: [6000, [Validators.required, Validators.min(0), Validators.max(50000)]],
    stepIntensity: ['normal', Validators.required],
    activityFactor: [1.2, [Validators.required, Validators.min(1), Validators.max(2.4)]],
    goal: ['mantenimiento', Validators.required],
    goalKcal: [0, [Validators.min(0), Validators.max(1500)]],
  });

  submit(): void {
    if (this.form.invalid) return;
    const input = this.form.getRawValue() as UserInput;
    this.results = this.calc.compute(input);
  }

  get showDelta() { return this.form.value.goal !== 'mantenimiento'; }
}
