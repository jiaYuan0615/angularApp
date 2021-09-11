import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoadingComponent } from './components/loading/loading.component';
import { AboutComponent } from './components/about/about.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './layouts/login/login.component';

registerLocaleData(zh);

const ngZorroModule = [
  NzLayoutModule,
  NzMenuModule,
  NzResultModule,
  NzButtonModule,
  NzSpinModule,
  NzBreadCrumbModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    LoadingComponent,
    AboutComponent,
    BreadcrumbComponent,
    GlobalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...ngZorroModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent]
})
export class AppModule { }
