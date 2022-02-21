import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { SoundComponent } from 'src/app/pages/sound/sound.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SoundComponent,
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoundRoutingModule { }
