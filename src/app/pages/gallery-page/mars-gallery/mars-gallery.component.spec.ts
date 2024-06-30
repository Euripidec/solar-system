import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsGalleryComponent } from './mars-gallery.component';

describe('MarsGalleryComponent', () => {
  let component: MarsGalleryComponent;
  let fixture: ComponentFixture<MarsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
