import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './layouts/login/login.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store'
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer } from '@ngrx/router-store';
import { ResetPasswordFormComponent } from './components/form/reset-password-form/reset-password-form.component';
import { UpdateProfileFormComponent } from './components/form/update-profile-form/update-profile-form.component';
import { ShareModule } from './share/share.module';
import { MemberModule } from './module/member/member.module';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    GlobalComponent,
    LoginComponent,
    PaginationComponent,
    ResetPasswordFormComponent,
    UpdateProfileFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    MemberModule,
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
