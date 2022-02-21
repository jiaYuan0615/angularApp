import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingerRoutingModule } from './singer-routing.module';
import { SingerComponent } from 'src/app/pages/singer/singer.component';
import { SingerCardComponent } from 'src/app/components/singer-card/singer-card.component';
import { SingerDetailComponent } from 'src/app/components/singer-detail/singer-detail.component';
import { SingerFormComponent } from 'src/app/components/form/singer-form/singer-form.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    SingerComponent,
    SingerCardComponent,
    SingerFormComponent,
    SingerDetailComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    SingerRoutingModule
  ]
})
export class SingerModule { }
