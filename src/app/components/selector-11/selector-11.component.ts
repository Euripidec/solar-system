import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-11',
  standalone: true,
  imports: [],
  templateUrl: './selector-11.component.html',
  styleUrl: './selector-11.component.css'
})
export class Selector11Component implements OnInit {
 
  @Input() planetName: string = '';

  constructor() { }

  ngOnInit(): void {
    
    $('.sections a, .btn a, .logo a').on('click', function (event) {
      const target = event.target as HTMLAnchorElement;
      if (target.hash !== '') {
        event.preventDefault();

        const hash = target.hash;
        const targetElement = $(hash);

        if (targetElement.length) {
          const offset = targetElement.offset();
          if (offset) {
            $('html, body').animate(
              {
                scrollTop: offset.top - 80
              },
              800
            );
          }
        }
      }
    });
  }
}
