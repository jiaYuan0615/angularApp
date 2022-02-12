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
  thumbUrl: string = ''
  imageName: string = ''
  imageExtension: string = ''
  progress: number = 0;
  uploadFile: any


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.singerForm = this.fb.group({
      name: [null, [Validators.required]],
      biography: [null, [Validators.required]],
      groupId: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
      nickname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      birth: [null, [Validators.required]],
      country: [null, [Validators.required]],
    })
  }

  submitForm() {
    if (this.singerForm.valid) {
      return {
        ...this.singerForm.value,
        birth: Date.parse(this.singerForm.controls['birth'].value),
        avatar: this.uploadFile
      }
    } else {
      for (const i in this.singerForm.controls) {
        if (this.singerForm.controls.hasOwnProperty(i)) {
          this.singerForm.controls[i].markAsDirty();
          this.singerForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }

  handleReset() {
    this.thumbUrl = '';
    this.imageName = '';
    this.uploadFile = '';
  }

  handleRemove(e: any) {
    this.handleReset()
  }

  handleChange(e: any) {
    const previewImageReader = new FileReader()
    const [uploadFile] = e.target.files

    previewImageReader.readAsDataURL(uploadFile)
    previewImageReader.onload = (e) => this.thumbUrl = previewImageReader.result as string;
    previewImageReader.onprogress = (e) => this.progress = Math.round(e.loaded / e.total * 100);
    [this.imageName, this.imageExtension] = uploadFile.name.split('.')
    this.uploadFile = uploadFile
    // 設定 FormControl 的兩種方式
    // FormControl 只接受 string / number 型態
    // this.singerForm.patchValue({ 'avatar': uploadFile })
    // this.singerForm.controls['avatar'].setValue(uploadFile)
  }

  handlePreview(file) {
    console.log(file);
  }

}
