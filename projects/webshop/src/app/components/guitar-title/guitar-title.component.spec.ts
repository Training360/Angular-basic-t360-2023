import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarTitleComponent } from './guitar-title.component';

describe('GuitarTitleComponent', () => {
  let component: GuitarTitleComponent;
  let fixture: ComponentFixture<GuitarTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
