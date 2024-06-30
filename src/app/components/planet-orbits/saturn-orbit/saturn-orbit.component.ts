import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-saturn-orbit',
  standalone: true,
  templateUrl: './saturn-orbit.component.html',
  styleUrls: ['./saturn-orbit.component.css']
})
export class SaturnOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateSaturn();
  }

  animateSaturn(): void {
    const saturn = document.querySelector('.saturn') as HTMLElement;
    const orbitRadius = 175; // Half of the width/height of the orbit
    const orbitDuration = 10759 * 24 * 60 * 60 * 1000; // 10759 days in milliseconds (Saturn's orbital period)

    const updateSaturnPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      saturn.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateSaturnPosition);
    };

    updateSaturnPosition();
  }
}
