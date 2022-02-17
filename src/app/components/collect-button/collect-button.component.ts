import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.less']
})


export class CollectButtonComponent implements OnInit {
  @Input() collection: any
  @Input('targetId') id: string
  @Input('collectItem') postCollectItem: (...args) => void;
  popoverVisible: boolean = false;
  showAdd: boolean = false
  items
  constructor() { }

  ngOnInit(): void {
    this.items = this.collection.map(x => {
      return {
        label: x.name,
        value: x.id,
      }
    })

  }

  handleClose() {
    this.popoverVisible = false
  }

  handleAdd(e: boolean) {
    this.showAdd = e
  }

  popoverVisibleChange(e: boolean) {
    if (!e) {
      this.showAdd = e
    }
  }

  checkHandler(v: string[]) {
    const item = v[v?.length - 1]
    this.postCollectItem({
      id: this.id,
      collectionId: item
    })

    // 觸發新增程序
    // this.postCollectItem()

  }

}
