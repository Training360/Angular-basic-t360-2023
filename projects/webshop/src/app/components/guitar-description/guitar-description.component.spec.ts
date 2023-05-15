import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarDescriptionComponent } from './guitar-description.component';

describe('GuitarDescriptionComponent', () => {
  let component: GuitarDescriptionComponent;
  let fixture: ComponentFixture<GuitarDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
