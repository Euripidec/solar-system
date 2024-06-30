import { Component } from '@angular/core';
import { HomeSelectorComponent } from '../../components/home-selector/home-selector.component';
import { ScrollIconComponent } from '../../components/scroll-icon/scroll-icon.component';
import { ShareButtonComponent } from '../../components/share-button/share-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSelectorComponent, ScrollIconComponent,ShareButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
