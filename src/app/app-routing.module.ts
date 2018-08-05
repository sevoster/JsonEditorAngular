import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaverComponent } from './saver/saver.component';
import { EditorComponent } from './editor/editor.component';
import { JsonChooserComponent } from './json-chooser/json-chooser.component';

const routes: Routes = [
  {
    path: 'select',
    component: JsonChooserComponent
  },
  {
    path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  }
  {
    path: 'edit',
    component: EditorComponent
  },
  {
    path: 'save',
    component: SaverComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
