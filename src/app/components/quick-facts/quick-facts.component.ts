import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetService } from '../../planets.service';
import { Planet } from '../../planets.model';

@Component({
  selector: 'app-quick-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-facts.component.html',
  styleUrl: './quick-facts.component.css'
})
export class QuickFactsComponent {
  @Input() planet!: Planet;

  constructor() {}
}
