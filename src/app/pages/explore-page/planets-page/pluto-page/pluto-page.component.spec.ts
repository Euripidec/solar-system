import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoPageComponent } from './pluto-page.component';

describe('PlutoPageComponent', () => {
  let component: PlutoPageComponent;
  let fixture: ComponentFixture<PlutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlutoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
