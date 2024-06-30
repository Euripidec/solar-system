import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnGalleryComponent } from './saturn-gallery.component';

describe('SaturnGalleryComponent', () => {
  let component: SaturnGalleryComponent;
  let fixture: ComponentFixture<SaturnGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaturnGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaturnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
