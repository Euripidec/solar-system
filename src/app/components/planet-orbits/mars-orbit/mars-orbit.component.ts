import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mars-orbit',
  standalone: true,
  templateUrl: './mars-orbit.component.html',
  styleUrls: ['./mars-orbit.component.css']
})
export class MarsOrbitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateMars();
  }

  animateMars(): void {
    const mars = document.querySelector('.mars') as HTMLElement;
    const orbitRadius = 150; // Half of the width/height of the orbit
    const orbitDuration = 687 * 24 * 60 * 60 * 1000; // 687 days in milliseconds (Mars's orbital period)

    const updateMarsPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      mars.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateMarsPosition);
    };

    updateMarsPosition();
  }
}
