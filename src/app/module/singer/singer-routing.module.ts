import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingerComponent } from 'src/app/pages/singer/singer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: SingerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingerRoutingModule { }
