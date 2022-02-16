import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.less']
})
export class UpdateProfileFormComponent implements OnInit {

  @Input() memberInfo: any;
  profileForm: FormGroup
  thumbUrl: string = ''
  imageName: string = ''
  imageExtension: string = ''
  progress: number = 0;
  showPreviousAvatar: boolean = true;
  uploadFile: any = null
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      avatar: [null],
      email: [{ value: this.memberInfo.email, disabled: true }],
      name: [this.memberInfo.name, [Validators.required]],
      gender: [{ value: `${this.memberInfo.gender}性`, disabled: true }],
      email_verified: [{ value: this.memberInfo.email_verified, disabled: true }],
      createdAt: [{ value: this.memberInfo.createdAt, disabled: true }],
      updatedAt: [{ value: this.memberInfo.updatedAt, disabled: true }],
    })
  }


  handleRemove(e: any): void {
    this.handleReset()
    this.showPreviousAvatar = true;
    this.uploadFile = null
  }

  handleReset(): void {
    this.thumbUrl = '';
    this.imageName = '';
    this.uploadFile = '';
  }


  submitForm() {
    if (this.profileForm.valid) {
      return {
        ...this.profileForm.value,
        avatar: this.uploadFile
      }
    } else {
      for (const i in this.profileForm.controls) {
        if (this.profileForm.controls.hasOwnProperty(i)) {
          this.profileForm.controls[i].markAsDirty();
          this.profileForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }

  handleChange(e: any): void {
    this.showPreviousAvatar = false;
    const previewImageReader = new FileReader()
    const [uploadFile] = e.target.files

    previewImageReader.readAsDataURL(uploadFile)
    previewImageReader.onload = (e) => this.thumbUrl = previewImageReader.result as string;
    previewImageReader.onprogress = (e) => this.progress = Math.round(e.loaded / e.total * 100);
    [this.imageName, this.imageExtension] = uploadFile.name.split('.')
    this.uploadFile = uploadFile
  }

}
