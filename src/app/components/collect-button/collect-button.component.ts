import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CollectionFormComponent } from '../form/collection-form/collection-form.component';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CollectButtonComponent implements OnInit, OnChanges {
  @Input() collection: any
  @Input('targetId') id: string
  @Input('collectItem') postCollectItem: (...args) => void;
  @Input('deleteItem') deleteCollectItem: (...args) => void;
  @Input('collect') postCollect: (...args) => void;
  popoverVisible: boolean = false;
  showAdd: boolean = false
  items: any

  @ViewChild(CollectionFormComponent) cfc: CollectionFormComponent
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const { collection, collection: { currentValue } } = changes
    if (!!collection && currentValue) {
      this.items = this.collection.map((x: any) => {
        return {
          label: x.name,
          value: x.id,
          isCollect: x.sounds.filter(v => v.id === this.id).length > 0
        }
      })

    }
  }

  ngOnInit(): void { }

  handleClose() {
    this.popoverVisible = false
  }

  handleAdd() {
    if (!this.showAdd) {
      this.showAdd = true
    } else {
      this.showAdd = false
    }
  }

  popoverVisibleChange(e: boolean) {
    if (!e) {
      this.showAdd = e
    }
  }

  handleCreate() {
    const value = this.cfc.submitForm()
    const callback = () => {
      this.showAdd = false
      this.cfc.collectionForm.reset();
    }
    if (!!value) {
      this.postCollect(value, callback)
    } else {
      this.showAdd = true
    }
  }

  checkHandler(v: string[]) {
    const item = this.items[v?.length - 1]
    const value = {
      id: this.id,
      collectionId: item
    }
    if (item.isCollect) {
      this.deleteCollectItem(value)
    } else {
      this.postCollectItem(value)
    }
  }

}
