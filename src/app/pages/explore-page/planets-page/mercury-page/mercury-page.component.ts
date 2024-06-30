import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { OrbitCompletionComponent } from '../../../../components/planet-orbits/mercury-orbit/mercury-orbit-completion/mercury-orbit-completion.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';
import { MercuryOrbitModule } from '../../../../components/planet-orbits/mercury-orbit/mercury-orbit.module';


@Component({
  selector: 'app-mercury-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,QuickFactsComponent,MercuryOrbitModule,OrbitCompletionComponent,ShareButtonComponent],
  templateUrl: './mercury-page.component.html',
  styleUrl: './mercury-page.component.css'
})
export class MercuryPageComponent {
  mercury!: Planet; 

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.mercury = this.planetService.getPlanetById(1); 
  }
}
