import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jupiter-orbit',
  standalone: true,
  templateUrl: './jupiter-orbit.component.html',
  styleUrls: ['./jupiter-orbit.component.css']
})
export class JupiterOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateJupiter();
  }

  animateJupiter(): void {
    const jupiter = document.querySelector('.jupiter') as HTMLElement;
    const orbitRadius = 175; // Half of the width/height of the orbit
    const orbitDuration = 4333 * 24 * 60 * 60 * 1000; // 4333 days in milliseconds (Jupiter's orbital period)

    const updateJupiterPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      jupiter.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateJupiterPosition);
    };

    updateJupiterPosition();
  }
}
