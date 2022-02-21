import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { LoginFormComponent } from 'src/app/components/form/login-form/login-form.component';
import { ForgetPasswordFormComponent } from 'src/app/components/form/forget-password-form/forget-password-form.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    ForgetPasswordFormComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MemberRoutingModule
  ],
  exports: [
    LoginFormComponent,
    ForgetPasswordFormComponent,
  ]
})
export class MemberModule { }
