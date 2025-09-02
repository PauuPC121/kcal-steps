import { Injectable } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { Results } from '../models/results.model';

@Injectable({ providedIn: 'root' })
export class CalculatorService {

  // Mifflin-St Jeor
  private bmr(sex: 'male' | 'female', kg: number, cm: number, age: number): number {
    const base = 10 * kg + 6.25 * cm - 5 * age;
    return Math.round(sex === 'male' ? base + 5 : base - 161);
  }

  // Longitud de paso estimada por altura (m)
  private stepLengthM(sex: 'male' | 'female', heightCm: number): number {
    const h = heightCm / 100;
    const coeff = sex === 'male' ? 0.415 : 0.413;
    const est = h * coeff;
    return Math.min(Math.max(est, 0.35), 0.85); // clamp por seguridad
  }

  // kCal por km caminando ≈ 0.5 kcal/kg/km (promedio)
  private kcalPerKmWalking(weightKg: number): number {
    return 0.5 * weightKg;
  }

  // Ajuste por intensidad de los pasos (normal ~ ciudad, rápido, senderismo)
  private intensityMultiplier(intensity: 'normal' | 'rapido' | 'senderismo'): number {
    if (intensity === 'rapido') return 1.2;
    if (intensity === 'senderismo') return 1.4;
    return 1.0;
  }

  compute(input: UserInput): Results {
    const out = new Results();

    out.bmr = this.bmr(input.sex, input.weightKg, input.heightCm, input.age);

    // TDEE base (sin contar pasos “intencionados”)
    out.tdeeSinPasos = Math.round(out.bmr * input.activityFactor);

    // Distancia estimada por pasos
    const stepLen = this.stepLengthM(input.sex, input.heightCm); // m/step
    const distanceKm = (input.steps * stepLen) / 1000;

    // kCal por pasos (con ajuste por intensidad)
    const kcalKm = this.kcalPerKmWalking(input.weightKg);
    out.kcalPasos = Math.round(distanceKm * kcalKm * this.intensityMultiplier(input.stepIntensity));

    // TDEE final
    out.tdeeFinal = out.tdeeSinPasos + out.kcalPasos;

    // Calorías objetivo
    const delta = input.goal === 'deficit' ? -Math.abs(input.goalKcal)
                : input.goal === 'superavit' ? Math.abs(input.goalKcal)
                : 0;
    out.targetCalories = out.tdeeFinal + delta;

    // Proteínas objetivo (1.6–2.2 g/kg)
    const low = Math.round(input.weightKg * 1.6);
    const high = Math.round(input.weightKg * 2.2);
    out.proteinTargetG = [low, high];

    return out;
  }
}
