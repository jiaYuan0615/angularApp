import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { country, countries } from 'src/app/utils/country';

@Component({
  selector: 'app-singer-form',
  templateUrl: './singer-form.component.html',
  styleUrls: ['./singer-form.component.less']
})
export class SingerFormComponent implements OnInit, OnChanges {

  @Input() groups: any;
  @Input() singer: any;
  countries: country[] = countries
  singerForm: FormGroup
  thumbUrl: string = ''
  imageName: string = ''
  imageExtension: string = ''
  progress: number = 0;
  uploadFile: any


  constructor(
    private fb: FormBuilder
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.singer) {
      const currentValue = changes.singer.currentValue;
      const item = {}
      Object.keys(this.singer).map((v) => item[v] = [this.singer[v], [Validators.required]])

      this.singerForm = this.fb.group(item)
    }
  }

  ngOnInit(): void {
    if (!this.singer) {
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
  }

  submitForm() {
    if (this.singerForm.valid) {
      return {
        ...this.singerForm.value,
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
    // 設定 FormControl 的兩種方式
    // FormControl 只接受 string / number 型態
    // this.singerForm.patchValue({ 'avatar': uploadFile })
    // this.singerForm.controls['avatar'].setValue(uploadFile)
  }
}
