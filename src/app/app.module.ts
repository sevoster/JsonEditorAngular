import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { JsonChooserComponent } from './json-chooser/json-chooser.component';
import { EditorComponent } from './editor/editor.component';
import { SaverComponent } from './saver/saver.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    JsonChooserComponent,
    EditorComponent,
    SaverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
