import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BearerModule } from 'projects/bearer/src/lib/bearer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BearerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
