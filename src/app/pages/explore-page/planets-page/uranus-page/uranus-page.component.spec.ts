import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusPageComponent } from './uranus-page.component';

describe('UranusPageComponent', () => {
  let component: UranusPageComponent;
  let fixture: ComponentFixture<UranusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UranusPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UranusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
