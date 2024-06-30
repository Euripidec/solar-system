import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusOrbitCompletionComponent } from './venus-orbit-completion.component';

describe('VenusOrbitCompletionComponent', () => {
  let component: VenusOrbitCompletionComponent;
  let fixture: ComponentFixture<VenusOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenusOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenusOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
