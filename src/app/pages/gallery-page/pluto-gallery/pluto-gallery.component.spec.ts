import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoGalleryComponent } from './pluto-gallery.component';

describe('PlutoGalleryComponent', () => {
  let component: PlutoGalleryComponent;
  let fixture: ComponentFixture<PlutoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlutoGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlutoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
