import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProteinService } from '../../services/protein';
import { AdSlotComponent } from "../ads/ad-slot/ad-slot";

@Component({
  selector: 'app-protein-suggestions',
  standalone: true,
  imports: [CommonModule, AdSlotComponent],          // <- necesario para *ngFor
  templateUrl: './protein-suggestions.html',
  styleUrls: ['./protein-suggestions.scss']
})
export class ProteinSuggestionsComponent implements OnInit, OnChanges {
  @Input() proteinRange: [number, number] = [0, 0];

  // NO usar this.protein aquí. Inicializa simple y rellena en ngOnInit/ngOnChanges.
  foods: { name: string; protein: number; notes: string }[] = [];
  split: { meal: string; suggestion: string; tip: string }[] = [];

  constructor(private protein: ProteinService) {}

  ngOnInit(): void {
    this.foods = this.protein.foodList;   // ✅ el servicio ya está inyectado
  }

  ngOnChanges(): void {
    const mid = Math.round((this.proteinRange[0] + this.proteinRange[1]) / 2);
    this.split = mid > 0 ? this.protein.sampleSplits(mid) : [];
  }
}
