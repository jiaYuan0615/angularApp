import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './layouts/login/login.component';
import { SoundComponent } from './pages/sound/sound.component';
import { SingerComponent } from './pages/singer/singer.component';
import { GroupComponent } from './pages/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      { path: '', component: SoundComponent },
      { path: 'singer', component: SingerComponent },
      { path: 'group', component: GroupComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
