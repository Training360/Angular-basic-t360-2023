import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private vcr: ViewContainerRef,
    private tr: TemplateRef<HTMLElement>) {
  }

  @Input() set appDelay(time: number) {
    let delayTimeout = setTimeout( () => {
      clearTimeout(delayTimeout);
      this.vcr.createEmbeddedView(this.tr)
    }, time);
  }
}
