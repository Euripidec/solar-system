import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-neptune-orbit',
  standalone: true,
  templateUrl: './neptune-orbit.component.html',
  styleUrls: ['./neptune-orbit.component.css']
})
export class NeptuneOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateNeptune();
  }

  animateNeptune(): void {
    const neptune = document.querySelector('.neptune') as HTMLElement;
    const orbitRadius = 225; // Half of the width/height of the orbit
    const orbitDuration = 60190 * 24 * 60 * 60 * 1000; // 60190 days in milliseconds (Neptune's orbital period)

    const updateNeptunePosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      neptune.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateNeptunePosition);
    };

    updateNeptunePosition();
  }
}
