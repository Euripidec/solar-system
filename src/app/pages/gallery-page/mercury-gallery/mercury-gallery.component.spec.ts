import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercuryGalleryComponent } from './mercury-gallery.component';

describe('MercuryGalleryComponent', () => {
  let component: MercuryGalleryComponent;
  let fixture: ComponentFixture<MercuryGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercuryGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercuryGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
