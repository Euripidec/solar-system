import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonPageComponent } from './moon-page.component';

describe('MoonPageComponent', () => {
  let component: MoonPageComponent;
  let fixture: ComponentFixture<MoonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
