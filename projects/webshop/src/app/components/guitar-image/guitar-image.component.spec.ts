import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarImageComponent } from './guitar-image.component';

describe('GuitarImageComponent', () => {
  let component: GuitarImageComponent;
  let fixture: ComponentFixture<GuitarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
