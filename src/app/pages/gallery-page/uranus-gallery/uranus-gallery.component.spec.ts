import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UranusGalleryComponent } from './uranus-gallery.component';

describe('UranusGalleryComponent', () => {
  let component: UranusGalleryComponent;
  let fixture: ComponentFixture<UranusGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UranusGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UranusGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
