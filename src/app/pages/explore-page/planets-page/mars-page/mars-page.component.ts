import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ScrollIconComponent } from '../../../../components/scroll-icon/scroll-icon.component';
import { Selector12Component } from '../../../../components/selector-12/selector-12.component';
import { QuickFactsComponent } from '../../../../components/quick-facts/quick-facts.component';
import { MarsOrbitComponent } from '../../../../components/planet-orbits/mars-orbit/mars-orbit.component';
import { MarsOrbitCompletionComponent } from '../../../../components/planet-orbits/mars-orbit/mars-orbit-completion/mars-orbit-completion.component';
import { ShareButtonComponent } from '../../../../components/share-button/share-button.component';
import { PlanetService } from '../../../../planets.service';
import { Planet } from '../../../../planets.model';

@Component({
  selector: 'app-mars-page',
  standalone: true,
  imports: [
    ScrollIconComponent,
    Selector12Component,
    QuickFactsComponent,
    MarsOrbitComponent,
    MarsOrbitCompletionComponent,
    ShareButtonComponent
  ],
  templateUrl: './mars-page.component.html',
  styleUrls: ['./mars-page.component.css']
})
export class MarsPageComponent implements OnInit, AfterViewInit {
  mars!: Planet;

  constructor(private planetService: PlanetService, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.mars = this.planetService.getPlanetById(4);
  }

  ngAfterViewInit(): void {
    // Phobos Modal
    const modalbtnPhobos = this.elRef.nativeElement.getElementsByClassName('modalbtnPhobos')[0];
    const modalPhobos = this.elRef.nativeElement.querySelector('#phobos_overlay');
    const closebtnPhobos = this.elRef.nativeElement.getElementsByClassName('closebtnPhobos')[0];

    modalbtnPhobos.addEventListener('click', openmodalPhobos);
    closebtnPhobos.addEventListener('click', closemodalPhobos);
    window.addEventListener('click', outsideclickPhobos);

    function openmodalPhobos() {
      modalPhobos.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closemodalPhobos() {
      modalPhobos.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function outsideclickPhobos(e: MouseEvent) {
      if (e.target === modalPhobos) {
        modalPhobos.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }

    // Deimos Modal
    const modalbtnDeimos = this.elRef.nativeElement.getElementsByClassName('modalbtnDeimos')[0];
    const modalDeimos = this.elRef.nativeElement.querySelector('#deimos_overlay');
    const closebtnDeimos = this.elRef.nativeElement.getElementsByClassName('closebtnDeimos')[0];

    modalbtnDeimos.addEventListener('click', openmodalDeimos);
    closebtnDeimos.addEventListener('click', closemodalDeimos);
    window.addEventListener('click', outsideclickDeimos);

    function openmodalDeimos() {
      modalDeimos.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closemodalDeimos() {
      modalDeimos.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function outsideclickDeimos(e: MouseEvent) {
      if (e.target === modalDeimos) {
        modalDeimos.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }
}
