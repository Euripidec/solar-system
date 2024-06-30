import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryOrbitCompletionComponent } from './mercury-orbit-completion.component';

describe('MercuryOrbitCompletionComponent', () => {
  let component: MercuryOrbitCompletionComponent;
  let fixture: ComponentFixture<MercuryOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercuryOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercuryOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
