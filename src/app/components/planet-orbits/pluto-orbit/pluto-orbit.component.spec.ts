import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoOrbitComponent } from './pluto-orbit.component';

describe('PlutoOrbitComponent', () => {
  let component: PlutoOrbitComponent;
  let fixture: ComponentFixture<PlutoOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlutoOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlutoOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
