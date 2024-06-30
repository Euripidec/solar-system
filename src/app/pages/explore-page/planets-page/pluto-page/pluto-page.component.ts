import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { PlutoOrbitComponent } from '../../../../components/planet-orbits/pluto-orbit/pluto-orbit.component';
import { PlutoOrbitCompletionComponent } from '../../../../components/planet-orbits/pluto-orbit/pluto-orbit-completion/pluto-orbit-completion.component';


@Component({
  selector: 'app-pluto-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,ShareButtonComponent, PlutoOrbitComponent,PlutoOrbitCompletionComponent],
  templateUrl: './pluto-page.component.html',
  styleUrl: './pluto-page.component.css'
})
export class PlutoPageComponent {

  pluto!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.pluto = this.planetService.getPlanetById(9); 
  }
}
