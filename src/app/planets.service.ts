// planet.service.ts
import { Injectable } from '@angular/core';
import { Planet } from './planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private planets: Planet[] = [
    { id: 1, name: 'Mercury', description: 'Description of Mercury.', day: 176, year: 88, radius: 2439.7, diameter: 4879.4, gravity: 3.7, avgTemp: '333°F (167°C)', planetType: 'Terrestrial', moon: 0 },

    { id: 2, name: 'Venus', description: 'Description of Venus.', day: 243, year: 225, radius: 6051.8, diameter: 12103.6, gravity: 8.87, avgTemp: '867°F (464°C)', planetType: 'Terrestrial', moon: 0 },

    { id: 3, name: 'Earth', description: 'Description of Earth.', day: 1, year: 365.25, radius: 6371, diameter: 12742, gravity: 9.81, avgTemp: '59°F (15°C)', planetType: 'Terrestrial', moon: 1 },

    { id: 4, name: 'Mars', description: 'Description of Mars.', day: 1.03, year: 687, radius: 3389.5, diameter: 6779, gravity: 3.71, avgTemp: '-85°F (-65°C)', planetType: 'Terrestrial', moon: 2 },

    { id: 5, name: 'Jupiter', description: 'Description of Jupiter.', day: 0.41, year: 4333, radius: 69911, diameter: 139820, gravity: 24.79, avgTemp: '-234°F (-145°C)', planetType: 'Gas Giant', moon: 79 },

    { id: 6, name: 'Saturn', description: 'Description of Saturn.', day: 0.45, year: 10759, radius: 58232, diameter: 116460, gravity: 10.44, avgTemp: '-288°F (-178°C)', planetType: 'Gas Giant', moon: 83 },

    { id: 7, name: 'Uranus', description: 'Description of Uranus.', day: 0.72, year: 30687, radius: 25362, diameter: 50724, gravity: 8.69, avgTemp: '-353°F (-214°C)', planetType: 'Ice Giant', moon: 27 },

    { id: 8, name: 'Neptune', description: 'Description of Neptune.', day: 0.67, year: 60190, radius: 24622, diameter: 49244, gravity: 11.15, avgTemp: '-373°F (-225°C)', planetType: 'Ice Giant', moon: 14 },

    { id: 9, name: 'Pluto', description: 'Description of Pluto.', day: 6.39, year: 90560, radius: 1188.3, diameter: 2376.6, gravity: 0.62, avgTemp: '-387°F (-233°C)', planetType: 'Dwarf Planet', moon: 5 }
  ];

  constructor() {}

  getAllPlanets(): Planet[] {
    return this.planets;
  }

  getPlanetById(id: number): Planet {
    const planet = this.planets.find(p => p.id === id);
    if (!planet) {
      throw new Error(`Planet with ID ${id} not found`);
    }
    return planet;
  }

  addPlanet(planet: Planet): void {
    planet.id = this.planets.length + 1; // Generate unique ID for new planet
    this.planets.push(planet);
  }

  updatePlanet(updatedPlanet: Planet): void {
    const index = this.planets.findIndex(p => p.id === updatedPlanet.id);
    if (index !== -1) {
      this.planets[index] = updatedPlanet;
    }
  }

  deletePlanet(id: number): void {
    this.planets = this.planets.filter(p => p.id !== id);
  }
}
