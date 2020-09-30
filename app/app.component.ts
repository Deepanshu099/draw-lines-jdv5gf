import { Component, ViewChild, ElementRef } from '@angular/core';
import { Line } from './draw-lines/draw-lines.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lines: Line[] = [
    {
      from: '1',
      to: '6',
      position: {
        from: ['center', 'right'],
        to: ['center', 'left']
      }
    }
  ];

  content = 'short';
  count = 0;
  expanded = false;

  add(): void {
    this.lines = [...this.lines, {
      from: `${Math.floor(Math.random() * 3) + 1}`,
      to: `${Math.floor(Math.random() * 3) + 4}`,
      position: {
        from: ['center', 'right'],
        to: ['center', 'left']
      }
    }];
  }
  
  onResize(): void {
    this.count++;
  }

  toggleHeight(): void {
    this.expanded = !this.expanded;
  }

  toggleContent(): void {
    this.content = this.content === 'short' ? 'very long content with line break and yet another line break if we make this long enough' : 'short';
  }

  clearLines(): void {
    this.lines = [];
  }
}
