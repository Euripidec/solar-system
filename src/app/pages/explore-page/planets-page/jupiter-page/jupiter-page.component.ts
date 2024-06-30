import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector12Component } from '../../../../components/selector-12/selector-12.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { JupiterOrbitComponent } from '../../../../components/planet-orbits/jupiter-orbit/jupiter-orbit.component';
import { JupiterOrbitCompletionComponent } from '../../../../components/planet-orbits/jupiter-orbit/jupiter-orbit-completion/jupiter-orbit-completion.component';

@Component({
  selector: 'app-jupiter-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector12Component,QuickFactsComponent,ShareButtonComponent,JupiterOrbitComponent,JupiterOrbitCompletionComponent],
  templateUrl: './jupiter-page.component.html',
  styleUrl: './jupiter-page.component.css'
})
export class JupiterPageComponent {

  jupiter!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.jupiter = this.planetService.getPlanetById(5); 
  }
}
