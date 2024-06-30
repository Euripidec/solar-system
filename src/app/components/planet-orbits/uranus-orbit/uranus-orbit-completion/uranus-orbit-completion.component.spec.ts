import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusOrbitCompletionComponent } from './uranus-orbit-completion.component';

describe('UranusOrbitCompletionComponent', () => {
  let component: UranusOrbitCompletionComponent;
  let fixture: ComponentFixture<UranusOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UranusOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UranusOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
