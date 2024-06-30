import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonGalleryComponent } from './moon-gallery.component';

describe('MoonGalleryComponent', () => {
  let component: MoonGalleryComponent;
  let fixture: ComponentFixture<MoonGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
