import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { getToken } from 'src/app/utils/authorize';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sound-form',
  templateUrl: './sound-form.component.html',
  styleUrls: ['./sound-form.component.less']
})
export class SoundFormComponent implements OnInit {

  @Input() singers: any
  soundForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.soundForm = this.fb.group({
      name: [null, [Validators.required]],
      lyrics: [null, [Validators.required]],
      publishYear: [null, [Validators.required]],
      cover: [null, [Validators.required]],
      ost: [null],
      isCover: [null, [Validators.required]],
    })
  }

  submitForm() {
    if (this.soundForm.valid) {
      return {
        ...this.soundForm.value,
        publishYear: moment(this.soundForm.controls['publishYear'].value).format('yyyy')
      }
    } else {
      for (const i in this.soundForm.controls) {
        if (this.soundForm.controls.hasOwnProperty(i)) {
          this.soundForm.controls[i].markAsDirty();
          this.soundForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }

  handleIllegalDate = (current) => {
    // 最多選擇隔年發行
    return current && current.getFullYear() > new Date().getFullYear() + 1;
  }
}
