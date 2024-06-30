import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetService } from '../../planets.service';
import { Planet } from '../../planets.model';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetsService: PlanetService) {}

  ngOnInit(): void {
    this.loadPlanets();
  }

  private loadPlanets(): void {
    this.planets = this.planetsService.getAllPlanets();
  }
}
