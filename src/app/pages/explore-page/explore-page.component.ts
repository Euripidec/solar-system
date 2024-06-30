import { Component } from '@angular/core';
import { PlanetsComponent } from '../../components/planets/planets.component';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [PlanetsComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.css'
})
export class ExplorePageComponent {

}
