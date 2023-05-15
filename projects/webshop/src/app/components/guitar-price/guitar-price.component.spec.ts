import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarPriceComponent } from './guitar-price.component';

describe('GuitarPriceComponent', () => {
  let component: GuitarPriceComponent;
  let fixture: ComponentFixture<GuitarPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
