import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appReadTime]',
  standalone: true
})
export class ReadTimeDirective implements OnInit {

  @Input()
  configuration: ReadTimeConfig = {
    wordsPerMinute: 150
  }

  @Output()
  readTimeCalculated: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const text = this.elementRef.nativeElement.textContent;
    console.log(text);
    const time = this.calculateReadTime(text);
    console.log(time);
    const minutes = this.createTimeString(time);
    console.log(minutes);
    this.readTimeCalculated.emit(minutes);
  }

  calculateReadTime(text: string) {
    const wordsCount = text.split(/\s+/g).length;
    const minutes = wordsCount / this.configuration.wordsPerMinute;
    console.log(wordsCount);
    return Math.ceil(minutes);
  }

  createTimeString(timeInMinutes: number) {
    if (timeInMinutes < 1) {
      return 'less than a minute';
    } else if (timeInMinutes == 1) {
      return 'one minute'
    } else {
      return `${timeInMinutes} minutes`;
    }
  }

}

export interface ReadTimeConfig {
  wordsPerMinute: number;
}
