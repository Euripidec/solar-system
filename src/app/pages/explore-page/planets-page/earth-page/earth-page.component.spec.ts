import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPageComponent } from './earth-page.component';

describe('EarthPageComponent', () => {
  let component: EarthPageComponent;
  let fixture: ComponentFixture<EarthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
