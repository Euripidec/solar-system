import { Component } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector11Component } from '../../../../components/selector-11/selector-11.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';

@Component({
  selector: 'app-sun-page',
  standalone: true,
  imports: [ScrollIconComponent,Selector11Component,ShareButtonComponent],
  templateUrl: './sun-page.component.html',
  styleUrl: './sun-page.component.css'
})
export class SunPageComponent {

}
