import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mars-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mars-orbit-completion.component.html',
  styleUrl: './mars-orbit-completion.component.css'
})
export class MarsOrbitCompletionComponent implements OnInit{

  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Calculate days left until orbit completion (example: Mercury)
    const orbitalPeriodInDays = 687; //Replace with orbital period of other planets
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}
