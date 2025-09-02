export type Sex = 'male' | 'female';

export class UserInput {
  sex: Sex = 'male';
  age: number = 23;
  heightCm: number = 180;
  weightKg: number = 72;
  steps: number = 6000;
  stepIntensity: 'normal' | 'rapido' | 'senderismo' = 'normal';
  activityFactor: number = 1.2; // sedentario (excluye paseos)
  goal: 'deficit' | 'mantenimiento' | 'superavit' = 'mantenimiento';
  goalKcal: number = 0; // +/- kcal sobre TDEE
}
