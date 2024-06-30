import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mercury-orbit',
  templateUrl: './mercury-orbit.component.html',
  styleUrls: ['./mercury-orbit.component.css']
})
export class MercuryOrbitComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.animateMercury();
  }

  animateMercury(): void {
    const mercury = document.querySelector('.mercury') as HTMLElement;
    const orbitRadius = 100; // Half of the width/height of the orbit
    const orbitDuration = 88 * 24 * 60 * 60 * 1000; // 88 days in milliseconds (Mercury's orbital period)

    const updateMercuryPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      mercury.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateMercuryPosition);
    };

    updateMercuryPosition();
  }
}
