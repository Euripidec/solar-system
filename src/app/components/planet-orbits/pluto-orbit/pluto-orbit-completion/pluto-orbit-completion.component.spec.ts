import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoOrbitCompletionComponent } from './pluto-orbit-completion.component';

describe('PlutoOrbitCompletionComponent', () => {
  let component: PlutoOrbitCompletionComponent;
  let fixture: ComponentFixture<PlutoOrbitCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlutoOrbitCompletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlutoOrbitCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
