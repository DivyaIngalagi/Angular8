import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TempRefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
