import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Results } from '../../models/results.model';
import { ProteinSuggestionsComponent } from '../protein-suggestions/protein-suggestions';
import { AdSlotComponent } from '../ads/ad-slot/ad-slot';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrls: ['./results.scss']
})
export class ResultsComponent {
  @Input() data!: Results;
}
