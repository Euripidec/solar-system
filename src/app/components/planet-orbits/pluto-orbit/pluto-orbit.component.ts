import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pluto-orbit',
  standalone: true,
  templateUrl: './pluto-orbit.component.html',
  styleUrls: ['./pluto-orbit.component.css']
})
export class PlutoOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animatePluto();
  }

  animatePluto(): void {
    const pluto = document.querySelector('.pluto') as HTMLElement;
    const orbitRadius = 250; // Half of the width/height of the orbit
    const orbitDuration = 90560 * 24 * 60 * 60 * 1000; // 90560 days in milliseconds (Pluto's orbital period)

    const updatePlutoPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      pluto.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updatePlutoPosition);
    };

    updatePlutoPosition();
  }
}
