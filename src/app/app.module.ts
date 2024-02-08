import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import {ClrFormsModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    ClrFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
