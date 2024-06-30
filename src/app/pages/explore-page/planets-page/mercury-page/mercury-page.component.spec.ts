import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryPageComponent } from './mercury-page.component';

describe('MercuryPageComponent', () => {
  let component: MercuryPageComponent;
  let fixture: ComponentFixture<MercuryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercuryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercuryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
