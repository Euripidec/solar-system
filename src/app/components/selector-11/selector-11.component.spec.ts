import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector11Component } from './selector-11.component';

describe('Selector11Component', () => {
  let component: Selector11Component;
  let fixture: ComponentFixture<Selector11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selector11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Selector11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
