import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-earth-orbit',
  standalone: true,
  templateUrl: './earth-orbit.component.html',
  styleUrls: ['./earth-orbit.component.css']
})
export class EarthOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateEarth();
  }

  animateEarth(): void {
    // Animation logic for Earth's orbit
    const earthElement = document.querySelector('.earth') as HTMLElement;
    const orbitRadius = 200; // Half of the width/height of the orbit
    const orbitDuration = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds (Earth's orbital period)

    const updateEarthPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      earthElement.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateEarthPosition);
    };

    updateEarthPosition();
  }
}
