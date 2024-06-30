import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnOrbitComponent } from './saturn-orbit.component';

describe('SaturnOrbitComponent', () => {
  let component: SaturnOrbitComponent;
  let fixture: ComponentFixture<SaturnOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturnOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaturnOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
