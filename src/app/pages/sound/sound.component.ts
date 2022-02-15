import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SoundFormComponent } from 'src/app/components/form/sound-form/sound-form.component';
import { Singer } from 'src/app/interface/singer';
import { Sound } from 'src/app/interface/sound';
import * as fromStore from '../../store';
@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  isVisible: boolean = false;
  modalTitle: string
  modalType: string;
  sound: Sound
  sounds$: Observable<Sound[]>;
  singers$: Observable<Singer[]>
  isMobile$: Observable<any>;

  @ViewChild(SoundFormComponent) sfc: SoundFormComponent

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetSingerAction());
    this.store.dispatch(fromStore.GetSoundAction());
    this.singers$ = this.store.select(fromStore.getSingerSelector);
    this.sounds$ = this.store.select(fromStore.getSoundSelector);
    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }
    // }
  }
  showModal = (type: string, title: string, value?) => {
    this.modalType = type;
    this.modalTitle = title;
    this.isVisible = true;
    if (!!value) this.sound = value
  }

  callback() {
    this.isVisible = false;
    this.sfc.soundForm.reset();
  }

  onSubmit = (value: any, callback?: any) => {
    this.store.dispatch(fromStore.PostSoundAction({ payload: value }))
    if (callback) callback()
  }

  handleOk(): void {
    this.isVisible = false;
    if (this.modalType === 'create') {
      const value = this.sfc.submitForm()
      if (!!value) {
        this.onSubmit(value, this.callback())
      } else {
        this.isVisible = true;
      }
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  goToRoute = (path: string[]) => {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
  }
}
