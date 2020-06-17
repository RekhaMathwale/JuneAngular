import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [AppComponent, SqrtPipe],
  imports: [BrowserModule], // module : group of logics i,e. takes required logics from browser
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
