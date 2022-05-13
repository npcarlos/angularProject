import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[subpageHost]',
})
export class TabPanelSubpageDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
