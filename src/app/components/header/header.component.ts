import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResetPasswordFormComponent } from '../form/reset-password-form/reset-password-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean
  @Input() memberInfo: any
  @Input() logout: () => void;
  @Input() goToRoute: (...args) => void
  modalNumber: number
  modalVisible: boolean = false

  @ViewChild(ResetPasswordFormComponent) rpfc: ResetPasswordFormComponent

  visible = false
  popoverVisible = false

  constructor() { }

  ngOnInit(): void { }

  showDrawer() {
    this.visible = true
  }

  handleOnOk() {
    this.modalVisible = false
  }

  handleCancel() {
    this.modalVisible = false
  }

  handleOpenModal(index: number) {
    this.modalNumber = index
    this.modalVisible = true
    this.popoverVisible = false
  }

  close() {
    this.visible = false
  }
}
