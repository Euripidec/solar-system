import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunPageComponent } from './sun-page.component';

describe('SunPageComponent', () => {
  let component: SunPageComponent;
  let fixture: ComponentFixture<SunPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
