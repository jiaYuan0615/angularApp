import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.less']
})
export class ResetPasswordFormComponent implements OnInit {
  resetPasswordForm: FormGroup
  @Input() isMobile: boolean;
  @Input() onSumbit: (...args: any) => void;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      againPassword: [null, [Validators.required, this.confirmationValidator]]
    })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.resetPasswordForm.controls.againPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.resetPasswordForm.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm() {
    if (this.resetPasswordForm.valid) {
      return this.resetPasswordForm.value
    } else {
      for (const i in this.resetPasswordForm.controls) {
        if (this.resetPasswordForm.controls.hasOwnProperty(i)) {
          this.resetPasswordForm.controls[i].markAsDirty();
          this.resetPasswordForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }

}
