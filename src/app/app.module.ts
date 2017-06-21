import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrayWatchDemoComponent } from './array-watch-demo/array-watch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayWatchDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
