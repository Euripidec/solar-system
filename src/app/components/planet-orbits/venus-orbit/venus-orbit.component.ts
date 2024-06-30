import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venus-orbit',
  standalone: true,
  templateUrl: './venus-orbit.component.html',
  styleUrls: ['./venus-orbit.component.css']
})
export class VenusOrbitComponent implements OnInit {

  ngOnInit(): void {
    this.animateVenus();
  }

  animateVenus(): void {
    const venus = document.querySelector('.venus') as HTMLElement;
    const orbitRadius = 150; // Half of the orbit width/height
    const orbitDuration = 225 * 24 * 60 * 60 * 1000; // 225 days in milliseconds (Venus's orbital period)

    const updateVenusPosition = () => {
      const now = new Date();
      const timeInOrbit = now.getTime() % orbitDuration;
      const angle = (timeInOrbit / orbitDuration) * 2 * Math.PI;

      const x = orbitRadius * Math.cos(angle);
      const y = orbitRadius * Math.sin(angle);

      venus.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(updateVenusPosition);
    };

    updateVenusPosition();
  }

}
