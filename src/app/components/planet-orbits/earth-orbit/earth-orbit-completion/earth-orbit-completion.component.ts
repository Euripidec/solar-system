import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-earth-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './earth-orbit-completion.component.html',
  styleUrl: './earth-orbit-completion.component.css'
})
export class EarthOrbitCompletionComponent implements OnInit {

  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Calculate days left until orbit completion (example: Mercury)
    const orbitalPeriodInDays = 365; //Replace with orbital period of other planets
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}
