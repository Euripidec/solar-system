import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterGalleryComponent } from './jupiter-gallery.component';

describe('JupiterGalleryComponent', () => {
  let component: JupiterGalleryComponent;
  let fixture: ComponentFixture<JupiterGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JupiterGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupiterGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
