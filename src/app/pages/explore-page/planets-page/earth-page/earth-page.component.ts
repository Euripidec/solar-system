import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { EarthOrbitComponent } from '../../../../components/planet-orbits/earth-orbit/earth-orbit.component';
import { EarthOrbitCompletionComponent } from '../../../../components/planet-orbits/earth-orbit/earth-orbit-completion/earth-orbit-completion.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';




@Component({
  selector: 'app-earth-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,EarthOrbitComponent,ShareButtonComponent,EarthOrbitCompletionComponent],
  templateUrl: './earth-page.component.html',
  styleUrl: './earth-page.component.css'
})
export class EarthPageComponent {

  earth!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.earth = this.planetService.getPlanetById(3); 
  }
}
