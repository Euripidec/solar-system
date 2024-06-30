import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptunePageComponent } from './neptune-page.component';

describe('NeptunePageComponent', () => {
  let component: NeptunePageComponent;
  let fixture: ComponentFixture<NeptunePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeptunePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeptunePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
