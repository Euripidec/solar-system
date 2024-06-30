import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthOrbitComponent } from './earth-orbit.component';

describe('EarthOrbitComponent', () => {
  let component: EarthOrbitComponent;
  let fixture: ComponentFixture<EarthOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarthOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
