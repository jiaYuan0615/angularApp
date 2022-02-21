import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { LoadingComponent } from '../components/loading/loading.component';

const NG_Zorro = [
  NzCollapseModule,
  NzCheckboxModule,
  NzDescriptionsModule,
  NzProgressModule,
  NzDividerModule,
  NzCarouselModule,
  NzCalendarModule,
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
  NzDrawerModule,
  NzSkeletonModule,
  NzPopoverModule
]

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ...NG_Zorro
  ],
  exports: [
    ...NG_Zorro,
    LoadingComponent,
  ]
})
export class ShareModule { }
