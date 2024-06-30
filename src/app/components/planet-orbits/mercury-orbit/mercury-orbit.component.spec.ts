import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryOrbitComponent } from './mercury-orbit.component';

describe('MercuryOrbitComponent', () => {
  let component: MercuryOrbitComponent;
  let fixture: ComponentFixture<MercuryOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercuryOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercuryOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
