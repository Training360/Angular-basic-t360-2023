import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarRatingComponent } from './guitar-rating.component';

describe('GuitarRatingComponent', () => {
  let component: GuitarRatingComponent;
  let fixture: ComponentFixture<GuitarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
