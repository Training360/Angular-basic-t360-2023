import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarStockComponent } from './guitar-stock.component';

describe('GuitarStockComponent', () => {
  let component: GuitarStockComponent;
  let fixture: ComponentFixture<GuitarStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
