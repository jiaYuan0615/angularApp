import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ResetPasswordFormComponent } from '../form/reset-password-form/reset-password-form.component';
import { UpdateProfileFormComponent } from '../form/update-profile-form/update-profile-form.component';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean
  @Input() memberInfo
  @Input() logout: () => void;
  @Input() goToRoute: (...args) => void
  modalNumber: number
  modalVisible: boolean = false
  modalType: string;
  modalTitle: string

  @ViewChild(ResetPasswordFormComponent) rpfc: ResetPasswordFormComponent
  @ViewChild(UpdateProfileFormComponent) upf: UpdateProfileFormComponent

  visible = false
  popoverVisible = false

  constructor(
    private store: Store<fromStore.State>
  ) {
  }

  ngOnInit(): void {
  }

  goToRouteHandler(path: string[]) {
    this.goToRoute(path)
    if (this.isMobile) {
      this.closeDrawer()
    }
  }

  showDrawer() {
    this.visible = true
  }

  onSubmit = (value: any, callback?: any) => {
    if (this.modalType === 'profile') {
      // update profile
      const items = new FormData();
      Object.keys(value).map(key => items.append(key, value[key]))
      this.store.dispatch(fromStore.UpdateMemberAction({ payload: items }))
    } else {
      this.store.dispatch(fromStore.UpdatePasswordAction({ payload: value }))
    }
    if (callback) callback()
  }

  closeDrawer() {
    this.visible = false
  }

  handleOnOk() {
    let value
    let callback;
    if (this.modalType === 'profile') {
      value = this.upf.submitForm()
      callback = () => {
        this.upf.handleReset()
        this.upf.showPreviousAvatar = true
        this.modalVisible = false
      }
    } else {
      value = this.rpfc.submitForm()
      callback = () => {
        this.rpfc.resetPasswordForm.reset()
        this.modalVisible = false
      }
    }

    if (!!value) {
      this.onSubmit(value, callback)
    } else {
      this.modalVisible = true
    }
  }

  handleCancel() {
    this.modalVisible = false
  }

  handleOpenModal(type: string, title: string, callback?: () => void) {
    this.modalType = type
    this.modalTitle = title
    this.modalVisible = true
    this.popoverVisible = false
    if (callback) callback();
  }
}
