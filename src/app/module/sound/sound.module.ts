import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoundRoutingModule } from './sound-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { SoundComponent } from 'src/app/pages/sound/sound.component';
import { SoundFormComponent } from 'src/app/components/form/sound-form/sound-form.component';
import { SoundDetailComponent } from 'src/app/components/sound-detail/sound-detail.component';
import { CardComponent } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    SoundComponent,
    CardComponent,
    SoundFormComponent,
    SoundDetailComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    SoundRoutingModule
  ]
})
export class SoundModule { }
