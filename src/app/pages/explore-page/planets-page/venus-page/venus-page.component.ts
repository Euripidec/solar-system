import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { VenusOrbitComponent } from '../../../../components/planet-orbits/venus-orbit/venus-orbit.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { VenusOrbitCompletionComponent } from '../../../../components/planet-orbits/venus-orbit/venus-orbit-completion/venus-orbit-completion.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';



@Component({
  selector: 'app-venus-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,ShareButtonComponent,VenusOrbitComponent,VenusOrbitCompletionComponent],
  templateUrl: './venus-page.component.html',
  styleUrl: './venus-page.component.css'
})
export class VenusPageComponent {

  venus!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.venus = this.planetService.getPlanetById(2); 
  }
}
