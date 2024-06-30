import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pluto-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pluto-orbit-completion.component.html',
  styleUrl: './pluto-orbit-completion.component.css'
})
export class PlutoOrbitCompletionComponent {

  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Calculate days left until orbit completion (example: Mercury)
    const orbitalPeriodInDays = 90582; //Replace with orbital period of other planets
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}

