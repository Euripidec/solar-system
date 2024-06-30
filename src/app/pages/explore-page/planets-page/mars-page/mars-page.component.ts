import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector12Component } from '../../../../components/selector-12/selector-12.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { MarsOrbitComponent } from '../../../../components/planet-orbits/mars-orbit/mars-orbit.component';
import { MarsOrbitCompletionComponent } from '../../../../components/planet-orbits/mars-orbit/mars-orbit-completion/mars-orbit-completion.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';

@Component({
  selector: 'app-mars-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector12Component,QuickFactsComponent,MarsOrbitComponent,MarsOrbitCompletionComponent,ShareButtonComponent],
  templateUrl: './mars-page.component.html',
  styleUrl: './mars-page.component.css'
})
export class MarsPageComponent {
  mars!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.mars = this.planetService.getPlanetById(4); 
  }
}
