import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.less']
})
export class CollectionFormComponent implements OnInit {
  @Input() isShow: boolean
  collectionForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.collectionForm = this.fb.group({
      name: [null, [Validators.required]]
    })
  }

  submitForm() {
    if (this.collectionForm.valid) {
      return this.collectionForm.value
    } else {
      for (const i in this.collectionForm.controls) {
        if (this.collectionForm.controls.hasOwnProperty(i)) {
          this.collectionForm.controls[i].markAsDirty();
          this.collectionForm.controls[i].updateValueAndValidity();
        }
      }
      return false
    }
  }

  handleCancel() {

  }

}
