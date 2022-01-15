import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singer-form',
  templateUrl: './singer-form.component.html',
  styleUrls: ['./singer-form.component.less']
})
export class SingerFormComponent implements OnInit {

  @Input() groups: any;
  singerForm: FormGroup
  groupSelet = null;
  genderValue = "男生";
  countrySelet = "台灣";

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.singerForm = this.fb.group({
      name: [null, [Validators.required]],
      biography: [null, [Validators.required]],
      groupId: [null],
      nickname: [null, [Validators.required]],
      gender: [, [Validators.required]],
      birth: [null, [Validators.required]],
      country: [null],
    })
  }

  submitForm() {
    for (const i in this.singerForm.controls) {
      if (this.singerForm.controls.hasOwnProperty(i)) {
        this.singerForm.controls[i].markAsDirty();
        this.singerForm.controls[i].updateValueAndValidity();
      }
    }
    console.log(this.singerForm);

  }

}
