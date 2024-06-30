import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsOrbitComponent } from './mars-orbit.component';

describe('MarsOrbitComponent', () => {
  let component: MarsOrbitComponent;
  let fixture: ComponentFixture<MarsOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
