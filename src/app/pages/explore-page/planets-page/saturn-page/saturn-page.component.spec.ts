import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnPageComponent } from './saturn-page.component';

describe('SaturnPageComponent', () => {
  let component: SaturnPageComponent;
  let fixture: ComponentFixture<SaturnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturnPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaturnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
