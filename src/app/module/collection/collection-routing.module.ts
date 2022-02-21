import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from 'src/app/pages/collection/collection.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: CollectionComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
