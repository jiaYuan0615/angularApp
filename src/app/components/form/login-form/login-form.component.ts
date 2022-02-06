import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  @Input() onSubmit: (...args: any) => void;
  @Input() isMoblie: boolean
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['heroyuans@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]]
    })
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.onSubmit(this.loginForm.value, 'login');
    } else {
      for (const i in this.loginForm.controls) {
        if (this.loginForm.controls.hasOwnProperty(i)) {
          this.loginForm.controls[i].markAsDirty();
          this.loginForm.controls[i].updateValueAndValidity();
        }
      }
    }
  }
}
