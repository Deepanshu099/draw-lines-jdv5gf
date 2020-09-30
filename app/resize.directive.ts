import { Directive, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';

import { fromResizeObserver, ResizeEvent } from './from-resize-observer';

import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  @Output() resize = new EventEmitter<ResizeEvent>();

  constructor(private element: ElementRef, private zone: NgZone) { }

  ngOnInit(): void {
    fromResizeObserver(this.element.nativeElement).subscribe(event => {
      this.zone.run(() => this.resize.emit(event));
    });
  }

}