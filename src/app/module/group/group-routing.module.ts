import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { GroupComponent } from 'src/app/pages/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
