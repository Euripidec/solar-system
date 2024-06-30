import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jupiter-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jupiter-orbit-completion.component.html',
  styleUrl: './jupiter-orbit-completion.component.css'
})
export class JupiterOrbitCompletionComponent implements OnInit {

  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    const orbitalPeriodInDays = 4333; //Replace with orbital period of other planets
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}
