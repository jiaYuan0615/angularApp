import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.less']
})
export class ForgetPasswordFormComponent implements OnInit {
  forgetForm: FormGroup
  @Input() isMoblie: boolean;
  @Input() onSubmit: (...args: any) => void;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    })
  }

  submitForm() {
    if (this.forgetForm.valid) {
      this.onSubmit(this.forgetForm.value, 'forget');
    } else {
      for (const i in this.forgetForm.controls) {
        if (this.forgetForm.controls.hasOwnProperty(i)) {
          this.forgetForm.controls[i].markAsDirty();
          this.forgetForm.controls[i].updateValueAndValidity();
        }
      }
    }
  }
}
