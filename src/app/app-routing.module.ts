import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'sound',
        loadChildren: () => import('./module/sound/sound.module').then(m => m.SoundModule)
      },
      {
        path: 'singer',
        loadChildren: () => import('./module/singer/singer.module').then(m => m.SingerModule)
      },
      {
        path: 'group',
        loadChildren: () => import('./module/group/group.module').then(m => m.GroupModule)
      },
      {
        path: 'collection',
        loadChildren: () => import('./module/collection/collection.module').then(m => m.CollectionModule)
      },
      { path: 'profile', component: ProfileComponent },
      { path: '*', redirectTo: '/' }
    ]
  },
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () => import('./module/member/member.module').then(m => m.MemberModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
