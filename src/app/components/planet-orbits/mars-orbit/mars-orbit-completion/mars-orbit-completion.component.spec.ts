import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsOrbitCompletionComponent } from './mars-orbit-completion.component';

describe('MarsOrbitCompletionComponent', () => {
  let component: MarsOrbitCompletionComponent;
  let fixture: ComponentFixture<MarsOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
