import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule], // module : group of logics i,e. takes required logics from browser
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
