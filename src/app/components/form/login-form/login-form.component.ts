import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EventEmitter } from 'stream';
import * as fromStore from '../../../store';
import { PostMemberLoginAction } from '../../../store/actions/member.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  @Input() isMoblie: boolean
  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['heroyuans@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]]
    })
  }

  submitForm() {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
  }

  login() {
    this.store.dispatch(PostMemberLoginAction(this.loginForm.value));
  }
}
