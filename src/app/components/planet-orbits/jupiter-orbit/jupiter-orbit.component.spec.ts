import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterOrbitComponent } from './jupiter-orbit.component';

describe('JupiterOrbitComponent', () => {
  let component: JupiterOrbitComponent;
  let fixture: ComponentFixture<JupiterOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JupiterOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupiterOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
