import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries, country } from 'src/app/utils/country';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.less']
})
export class GroupFormComponent implements OnInit {

  @Input() singers: any
  @Input() sounds: any

  groupForm: FormGroup
  thumbUrl: string = ''
  imageName: string = ''
  imageExtension: string = ''
  progress: number = 0;
  uploadFile: any
  countries: country[] = countries

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      name: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
      publishYear: [null, [Validators.required]],
      biography: [null, [Validators.required]],
      country: [null, [Validators.required]],
      singerId: [null, [Validators.required]],
      soundId: [null, [Validators.required]]
    })
  }

  submitForm() {
    if (this.groupForm.valid) {
      return {
        ...this.groupForm.value,
        avatar: this.uploadFile,
        singerId: JSON.stringify(this.groupForm.controls['singerId'].value),
        soundId: JSON.stringify(this.groupForm.controls['soundId'].value)
      }
    } else {
      for (const i in this.groupForm.controls) {
        if (this.groupForm.controls.hasOwnProperty(i)) {
          this.groupForm.controls[i].markAsDirty();
          this.groupForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }


  handleReset(): void {
    this.thumbUrl = '';
    this.imageName = '';
    this.uploadFile = '';
  }

  handleRemove(e: any): void {
    this.handleReset()
  }

  handleChange(e: any): void {
    const previewImageReader = new FileReader()
    const [uploadFile] = e.target.files

    previewImageReader.readAsDataURL(uploadFile)
    previewImageReader.onload = (e) => this.thumbUrl = previewImageReader.result as string;
    previewImageReader.onprogress = (e) => this.progress = Math.round(e.loaded / e.total * 100);
    [this.imageName, this.imageExtension] = uploadFile.name.split('.')
    this.uploadFile = uploadFile
  }
}
