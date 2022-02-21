import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_TW, en_US } from 'ng-zorro-antd/i18n';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ResetPasswordFormComponent } from './components/form/reset-password-form/reset-password-form.component';
import { ForgetPasswordFormComponent } from './components/form/forget-password-form/forget-password-form.component';
import { ErrorLogHandler } from './error-log-handler';
import { AgePipe } from './pipe/age.pipe';
import { GroupFormComponent } from './components/form/group-form/group-form.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { SoundDetailComponent } from './components/sound-detail/sound-detail.component';
import { SingerDetailComponent } from './components/singer-detail/singer-detail.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { UpdateProfileFormComponent } from './components/form/update-profile-form/update-profile-form.component';
import { CollectButtonComponent } from './components/collect-button/collect-button.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionFormComponent } from './components/form/collection-form/collection-form.component';
import { ShareModule } from './share/share.module';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SingerComponent,
    // LoadingComponent,
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
    ResetPasswordFormComponent,
    ForgetPasswordFormComponent,
    AgePipe,
    GroupFormComponent,
    GroupCardComponent,
    SoundDetailComponent,
    SingerDetailComponent,
    GroupDetailComponent,
    UpdateProfileFormComponent,
    CollectButtonComponent,
    CollectionComponent,
    CollectionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    // !environment.production ? StoreRouterConnectingModule : [],
    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW },
    { provide: RouterStateSerializer, useClass: fromStore.CustomSerializer },
    // { provide: ErrorHandler, useClass: ErrorLogHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
