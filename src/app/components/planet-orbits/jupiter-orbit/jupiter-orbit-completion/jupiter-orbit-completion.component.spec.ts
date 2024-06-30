import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterOrbitCompletionComponent } from './jupiter-orbit-completion.component';

describe('JupiterOrbitCompletionComponent', () => {
  let component: JupiterOrbitCompletionComponent;
  let fixture: ComponentFixture<JupiterOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JupiterOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupiterOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
