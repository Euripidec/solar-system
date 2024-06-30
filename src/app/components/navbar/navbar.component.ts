import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    // Initialize any component-specific logic here if needed
  }

  ngAfterViewInit(): void {
    // jQuery code wrapped in Angular lifecycle hook
    $(this.elRef.nativeElement).find('.hamwrap').on('click', (e) => {
      e.preventDefault();
      $('.navbar-links ul').toggleClass('navbar-links_active');
      $('.first, .second, .third').toggleClass('f s t');
      $('.navbar-links').toggleClass('navbar-links_expanded');
    });

    $('.navbar-links').on('click', () => {
      $('.hamwrap').click();
    });

    $(window).on('scroll', () => {
      $('.navbar-links ul').removeClass('navbar-links_active');
      $('.hamwrap').removeClass('hamwrap_active');
      $('.first, .second, .third').removeClass('f s t');
      $('.navbar-links').removeClass('navbar-links_expanded');
    });
  }

}