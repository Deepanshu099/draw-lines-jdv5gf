import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrawLinesComponent } from './draw-lines/draw-lines.component';
import { LineAnchorDirective } from './draw-lines/line-anchor.directive';
import { ResizeDirective } from './resize.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DrawLinesComponent, ResizeDirective, LineAnchorDirective ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
