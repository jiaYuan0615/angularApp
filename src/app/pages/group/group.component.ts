import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Group } from 'src/app/interface/group';
import { Singer } from 'src/app/interface/singer';
import { Sound } from 'src/app/interface/sound';
import { GroupFormComponent } from 'src/app/components/form/group-form/group-form.component';
import * as moment from 'moment';
import { GoToRouteAction, PostGroupAction } from '../../store';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less']
})
export class GroupComponent implements OnInit {
  isVisible: boolean = false;
  modalTitle: string
  modalType: string;
  groups$: Observable<Group[]>
  singers$: Observable<Singer[]>
  sounds$: Observable<Sound[]>
  group: any;


  @ViewChild(GroupFormComponent) gfc: GroupFormComponent

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetGroupAction());
    this.store.dispatch(fromStore.GetSingerAction());
    this.store.dispatch(fromStore.GetSoundAction());
    this.groups$ = this.store.select(fromStore.getGroupSelector);
    this.singers$ = this.store.select(fromStore.getSingerSelector);
    this.sounds$ = this.store.select(fromStore.getSoundSelector);
  }

  showModal = (type: string, title: string, value?) => {
    this.modalType = type;
    this.modalTitle = title;
    this.isVisible = true;

    if (!!value) this.group = value

  }

  callback() {
    this.gfc.groupForm.reset()
    this.gfc.handleReset()
    this.isVisible = false;
  }

  handleOk(): void {
    if (this.modalType === 'create') {
      const value = this.gfc.submitForm()
      if (!!value) {
        this.onSubmit(value, this.callback())
      } else {
        this.isVisible = true
      }
    }

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onSubmit = (value: any, callback?: any) => {
    const payload = new FormData();
    Object.keys(value).map(key => {
      if (key === 'publishYear') {
        payload.append(key, moment(value[key]).format('yyyy/MM'))
      } else {
        payload.append(key, value[key])
      }
    })
    this.store.dispatch(PostGroupAction({ payload }))
    if (callback) callback()
  }

  goToRoute = (path: string[]) => {
    this.store.dispatch(GoToRouteAction({ payload: { path } }))
  }
}
