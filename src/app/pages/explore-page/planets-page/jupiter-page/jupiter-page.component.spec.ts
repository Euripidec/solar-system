import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterPageComponent } from './jupiter-page.component';

describe('JupiterPageComponent', () => {
  let component: JupiterPageComponent;
  let fixture: ComponentFixture<JupiterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JupiterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupiterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
