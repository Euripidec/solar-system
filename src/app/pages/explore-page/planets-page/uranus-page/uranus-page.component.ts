import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { UranusOrbitComponent } from '../../../../components/planet-orbits/uranus-orbit/uranus-orbit.component';
import { UranusOrbitCompletionComponent } from '../../../../components/planet-orbits/uranus-orbit/uranus-orbit-completion/uranus-orbit-completion.component';


@Component({
  selector: 'app-uranus-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,ShareButtonComponent,UranusOrbitComponent,UranusOrbitCompletionComponent],
  templateUrl: './uranus-page.component.html',
  styleUrl: './uranus-page.component.css'
})
export class UranusPageComponent {

  uranus!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.uranus = this.planetService.getPlanetById(7); 
  }
}
