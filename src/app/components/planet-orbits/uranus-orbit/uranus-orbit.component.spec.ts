import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusOrbitComponent } from './uranus-orbit.component';

describe('UranusOrbitComponent', () => {
  let component: UranusOrbitComponent;
  let fixture: ComponentFixture<UranusOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UranusOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UranusOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
