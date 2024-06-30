import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { SaturnOrbitComponent } from '../../../../components/planet-orbits/saturn-orbit/saturn-orbit.component';
import { SaturnOrbitCompletionComponent } from '../../../../components/planet-orbits/saturn-orbit/saturn-orbit-completion/saturn-orbit-completion.component';


@Component({
  selector: 'app-saturn-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,ShareButtonComponent,SaturnOrbitComponent,SaturnOrbitCompletionComponent],
  templateUrl: './saturn-page.component.html',
  styleUrl: './saturn-page.component.css'
})
export class SaturnPageComponent {

  saturn!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.saturn = this.planetService.getPlanetById(6); 
  }
}
