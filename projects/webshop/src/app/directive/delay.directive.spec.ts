import { Component, ViewChild, TemplateRef } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DelayDirective } from './delay.directive';

@Component({
  template: `
    <ng-container *appDelay="delayTime">
      <div id="content">Delayed Content</div>
    </ng-container>
  `
})
class TestComponent {
  @ViewChild(TemplateRef)
  templateRef!: TemplateRef<any>;
  delayTime!: number;
}

describe('DelayDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelayDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should display the delayed content after a specified time', () => {
    component.delayTime = 2000;
    fixture.detectChanges();

    const contentElement = fixture.nativeElement.querySelector('#content');
    expect(contentElement).toBeNull();

    fixture.detectChanges();

    setTimeout(() => {
      const delayedContentElement = fixture.nativeElement.querySelector('#content');
      expect(delayedContentElement).toBeDefined();
    }, 2000);
  });
});
