import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProteinService {
  // Sugerencias rápidas por 100 g / unidad aprox.
  foodList = [
    { name: 'Pechuga de pollo', protein: 31, notes: 'Barato, versátil' },
    { name: 'Claras de huevo', protein: 11, notes: 'Bajas en kcal' },
    { name: 'Atún en lata (al natural)', protein: 24, notes: 'Conveniente' },
    { name: 'Yogur griego 0%', protein: 10, notes: 'Postre / snack' },
    { name: 'Requesón / Quark', protein: 12, notes: 'Saciante' },
    { name: 'Lomo embuchado', protein: 50, notes: 'Cuidado con sal' },
    { name: 'Ternera magra', protein: 26, notes: 'Hierro, B12' },
    { name: 'Tofu firme', protein: 14, notes: 'Veggie' },
    { name: 'Lentejas cocidas', protein: 9,  notes: 'Fibra' },
    { name: 'Proteína en polvo (scoop ~30g)', protein: 22, notes: 'Rápido y barato' },
  ];

  sampleSplits(totalProtein: number) {
    // Reparto simple por comidas
    const perMeal = Math.round(totalProtein / 4);
    return [
      { meal: 'Desayuno', suggestion: `${perMeal} g`, tip: 'Yogur griego + scoop whey + fruta' },
      { meal: 'Comida', suggestion: `${perMeal} g`, tip: 'Pollo/arroz/verduras' },
      { meal: 'Merienda', suggestion: `${perMeal} g`, tip: 'Requesón + frutos rojos' },
      { meal: 'Cena', suggestion: `${perMeal} g`, tip: 'Huevos con claras + ensalada' },
    ];
  }
}
