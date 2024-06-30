import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthGalleryComponent } from './earth-gallery.component';

describe('EarthGalleryComponent', () => {
  let component: EarthGalleryComponent;
  let fixture: ComponentFixture<EarthGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarthGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
