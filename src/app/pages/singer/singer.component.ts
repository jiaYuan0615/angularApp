import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Singer } from 'src/app/interface/singer';
import * as fromStore from '../../store';
import { GoToRouteAction } from '../../store/actions/router.actions'
import { Observable, combineLatest, zip } from 'rxjs';
import { Group } from 'src/app/interface/group';
import { SingerFormComponent } from 'src/app/components/form/singer-form/singer-form.component';
import { PostSingerAction } from '../../store';
import * as moment from 'moment';
import { Collection } from 'src/app/interface/collection';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less'],
})
export class SingerComponent implements OnInit {
  isVisible = false;
  singers$: Observable<Singer[]>
  groups$: Observable<Group[]>
  items$: Observable<any>
  singer: Singer;
  modalTitle: string;
  modalType: string;

  @ViewChild(SingerFormComponent) sfc: SingerFormComponent

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetSingerAction());
    this.store.dispatch(fromStore.GetGroupAction());

    this.singers$ = this.store.select(fromStore.getSingerSelector);
    this.groups$ = this.store.select(fromStore.getGroupSelector);
  }

  showModal = (type: string, title: string, value?) => {
    this.modalType = type;
    this.modalTitle = title;
    this.isVisible = true;
    if (!!value) this.singer = value
  }

  onSubmit = (value: any, callback: any) => {
    const payload = new FormData();
    Object.keys(value).map(key => {
      if (key === 'birth') {
        payload.append(key, moment(value[key]).format())
      } else {
        payload.append(key, value[key])
      }
    })
    // payload.forEach((value, key) => console.log(`${key}:${value}`))
    this.store.dispatch(PostSingerAction({ payload }))
    if (callback) callback()
  }

  callback(): void {
    this.sfc.handleReset()
    this.sfc.singerForm.reset();
    this.isVisible = false;
  }

  handleOk(): void {
    if (this.modalType === 'create') {
      const value = this.sfc.submitForm()
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

  goToRoute = (path: string[]) => {
    this.store.dispatch(GoToRouteAction({ payload: { path } }))
  }
}
