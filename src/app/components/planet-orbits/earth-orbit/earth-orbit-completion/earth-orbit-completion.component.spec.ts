import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthOrbitCompletionComponent } from './earth-orbit-completion.component';

describe('EarthOrbitCompletionComponent', () => {
  let component: EarthOrbitCompletionComponent;
  let fixture: ComponentFixture<EarthOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarthOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
