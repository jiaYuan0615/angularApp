import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { GroupComponent } from 'src/app/pages/group/group.component';
import { GroupDetailComponent } from 'src/app/components/group-detail/group-detail.component';
import { GroupFormComponent } from 'src/app/components/form/group-form/group-form.component';
import { GroupCardComponent } from 'src/app/components/group-card/group-card.component';


@NgModule({
  declarations: [
    GroupComponent,
    GroupDetailComponent,
    GroupFormComponent,
    GroupCardComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
