import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusOrbitComponent } from './venus-orbit.component';

describe('VenusOrbitComponent', () => {
  let component: VenusOrbitComponent;
  let fixture: ComponentFixture<VenusOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenusOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenusOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
