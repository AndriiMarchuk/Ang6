import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NotesComponent} from './notes/notes.component';
import {HttpClientModule} from "@angular/common/http";
import { SectionsComponentComponent } from './sections-component/sections-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SectionsComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
