import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orbit-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercury-orbit-completion.component.html',
  styleUrls: ['./mercury-orbit-completion.component.css']
})
export class OrbitCompletionComponent implements OnInit {
  daysLeft: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Calculate days left until orbit completion (example: Mercury)
    const orbitalPeriodInDays = 88; //Replace with orbital period of other planets
    const now = Date.now();
    const timeInOrbit = now % (orbitalPeriodInDays * 24 * 60 * 60 * 1000);
    const millisecondsLeft = (orbitalPeriodInDays * 24 * 60 * 60 * 1000) - timeInOrbit;
    this.daysLeft = millisecondsLeft / (24 * 60 * 60 * 1000);
  }
}
