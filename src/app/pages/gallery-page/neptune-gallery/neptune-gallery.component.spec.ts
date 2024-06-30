import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeptuneGalleryComponent } from './neptune-gallery.component';

describe('NeptuneGalleryComponent', () => {
  let component: NeptuneGalleryComponent;
  let fixture: ComponentFixture<NeptuneGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeptuneGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeptuneGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
