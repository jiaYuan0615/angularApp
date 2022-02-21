import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/form/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginFormComponent,
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
