import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { NeptuneOrbitComponent } from '../../../../components/planet-orbits/neptune-orbit/neptune-orbit.component';
import { NeptuneOrbitCompletionComponent } from '../../../../components/planet-orbits/neptune-orbit/neptune-orbit-completion/neptune-orbit-completion.component';


@Component({
  selector: 'app-neptune-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,ShareButtonComponent, NeptuneOrbitComponent,NeptuneOrbitCompletionComponent],
  templateUrl: './neptune-page.component.html',
  styleUrl: './neptune-page.component.css'
})
export class NeptunePageComponent {
  neptune!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.neptune = this.planetService.getPlanetById(8); 
  }
}
