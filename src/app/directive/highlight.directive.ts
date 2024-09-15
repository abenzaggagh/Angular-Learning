import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {

  @Input()
  highlightText = '';

  @Input()
  highlightColor = 'yellow';

  originalHTML = '';

  constructor(private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['highlightText'].isFirstChange()) {
      this.originalHTML = this.element.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes['highlightText'];
    if (currentValue) {
      const regEx = new RegExp(`(${currentValue})`, 'gi');
      this.element.nativeElement.innerHTML = this.originalHTML.replace(regEx, `<span style="background-color: ${this.highlightColor}">$1</span>`);
    } else {
      this.element.nativeElement.innerHTML = this.originalHTML
    }
    console.log(currentValue);
  }

}
