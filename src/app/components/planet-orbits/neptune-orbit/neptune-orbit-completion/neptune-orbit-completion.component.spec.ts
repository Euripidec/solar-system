import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptuneOrbitCompletionComponent } from './neptune-orbit-completion.component';

describe('NeptuneOrbitCompletionComponent', () => {
  let component: NeptuneOrbitCompletionComponent;
  let fixture: ComponentFixture<NeptuneOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeptuneOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeptuneOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
