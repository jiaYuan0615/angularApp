import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzMessageModule } from 'ng-zorro-antd/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoadingComponent } from './components/loading/loading.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './layouts/login/login.component';
import { SoundComponent } from './pages/sound/sound.component';
import { SingerComponent } from './pages/singer/singer.component';
import { GroupComponent } from './pages/group/group.component';
import { CardComponent } from './components/card/card.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { SingerCardComponent } from './components/singer-card/singer-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SoundFormComponent } from './components/form/sound-form/sound-form.component';
import { SingerFormComponent } from './components/form/singer-form/singer-form.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store'
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

registerLocaleData(zh);

const ngZorroModule = [
  NzLayoutModule,
  NzMessageModule,
  NzDatePickerModule,
  NzMenuModule,
  NzResultModule,
  NzIconModule,
  NzButtonModule,
  NzSpinModule,
  NzFormModule,
  NzBreadCrumbModule,
  NzInputModule,
  NzCardModule,
  NzTabsModule,
  NzAvatarModule,
  NzPaginationModule,
  NzUploadModule,
  NzModalModule,
  NzSelectModule,
  NzRadioModule,
  NzGridModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SingerComponent,
    LoadingComponent,
    SoundComponent,
    BreadcrumbComponent,
    GlobalComponent,
    LoginComponent,
    SoundComponent,
    GroupComponent,
    CardComponent,
    LoginFormComponent,
    SingerCardComponent,
    PaginationComponent,
    SoundFormComponent,
    SingerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...ngZorroModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    // !environment.production ? StoreRouterConnectingModule : [],
    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW },
    { provide: RouterStateSerializer, useClass: fromStore.CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
