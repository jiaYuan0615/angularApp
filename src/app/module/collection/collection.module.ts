import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { CollectionComponent } from 'src/app/pages/collection/collection.component';
import { CollectionFormComponent } from 'src/app/components/form/collection-form/collection-form.component';


@NgModule({
  declarations: [
    CollectionComponent,
    CollectionFormComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    CollectionRoutingModule
  ],
})
export class CollectionModule { }
