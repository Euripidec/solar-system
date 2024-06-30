import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-uranus-orbit',
  standalone: true,
  templateUrl: './uranus-orbit.component.html',
  styleUrls: ['./uranus-orbit.component.css']
})
export class UranusOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateUranus();
  }

  animateUranus(): void {
    const uranus = document.querySelector('.uranus') as HTMLElement;
    const orbitRadius = 200; // Half of the width/height of the orbit
    const orbitDuration = 30688 * 24 * 60 * 60 * 1000; // 30688 days in milliseconds (Uranus's orbital period)

    const updateUranusPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      uranus.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateUranusPosition);
    };

    updateUranusPosition();
  }
}
