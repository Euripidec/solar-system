import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnOrbitCompletionComponent } from './saturn-orbit-completion.component';

describe('SaturnOrbitCompletionComponent', () => {
  let component: SaturnOrbitCompletionComponent;
  let fixture: ComponentFixture<SaturnOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturnOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaturnOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
