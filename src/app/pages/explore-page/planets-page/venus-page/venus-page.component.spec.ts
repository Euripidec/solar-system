import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusPageComponent } from './venus-page.component';

describe('VenusPageComponent', () => {
  let component: VenusPageComponent;
  let fixture: ComponentFixture<VenusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenusPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
