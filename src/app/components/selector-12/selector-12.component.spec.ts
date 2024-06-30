import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector12Component } from './selector-12.component';

describe('Selector12Component', () => {
  let component: Selector12Component;
  let fixture: ComponentFixture<Selector12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selector12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Selector12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
