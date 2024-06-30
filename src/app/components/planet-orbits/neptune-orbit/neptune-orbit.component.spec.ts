import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptuneOrbitComponent } from './neptune-orbit.component';

describe('NeptuneOrbitComponent', () => {
  let component: NeptuneOrbitComponent;
  let fixture: ComponentFixture<NeptuneOrbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeptuneOrbitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeptuneOrbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
