import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenusGalleryComponent } from './venus-gallery.component';

describe('VenusGalleryComponent', () => {
  let component: VenusGalleryComponent;
  let fixture: ComponentFixture<VenusGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenusGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenusGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
