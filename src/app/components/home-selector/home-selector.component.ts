import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home-selector',
  standalone: true,
  imports: [],
  templateUrl: './home-selector.component.html',
  styleUrls: ['./home-selector.component.css']
})
export class HomeSelectorComponent implements OnInit {

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
