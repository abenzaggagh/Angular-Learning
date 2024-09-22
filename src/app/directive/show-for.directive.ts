import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appShowFor]',
  standalone: true
})
export class ShowForDirective {

  @Input() set showFor(showForValue: boolean) {
    if (showForValue) {
      this.viewContainerRef.createEmbeddedView(
        this.templateRef
      );
    }
  }

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) { }

}
