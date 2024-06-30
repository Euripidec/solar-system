import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunGalleryComponent } from './sun-gallery.component';

describe('SunGalleryComponent', () => {
  let component: SunGalleryComponent;
  let fixture: ComponentFixture<SunGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
