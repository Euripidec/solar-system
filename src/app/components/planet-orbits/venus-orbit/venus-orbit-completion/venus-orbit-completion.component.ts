import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venus-orbit-completion.component.html',
  styleUrls: ['./venus-orbit-completion.component.css']
})
export class VenusOrbitCompletionComponent implements OnInit {
  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Calculate days left until orbit completion (example: Venus)
    const orbitalPeriodInDays = 225; 
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}
