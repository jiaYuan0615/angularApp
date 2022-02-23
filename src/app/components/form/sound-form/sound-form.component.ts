import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Sound } from 'src/app/interface/sound';

@Component({
  selector: 'app-sound-form',
  templateUrl: './sound-form.component.html',
  styleUrls: ['./sound-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundFormComponent implements OnInit, OnChanges {

  @Input() singers: any
  @Input() sound: Sound
  soundForm: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.sound) {
      const currentValue = changes.sound.currentValue;
      const item = {}
      Object.keys(currentValue).map((v) => {
        if (v === 'isCover') {
          item[v] = [currentValue[v] ? 'true' : 'false', Validators.required]
        } else {
          item[v] = [currentValue[v], Validators.required]
        }
      })
      this.soundForm = this.fb.group(item)
    }
  }

  ngOnInit(): void {
    if (!this.sound) {
      this.soundForm = this.fb.group({
        name: [null, [Validators.required]],
        lyrics: [null, [Validators.required]],
        publishYear: [null, [Validators.required]],
        cover: [null, [Validators.required]],
        ost: [null],
        isCover: [null, [Validators.required]],
      })
    }
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
