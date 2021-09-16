import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  // 預設括號不填入參數則以定義的變數作為接收的參數
  @Input() sound;
  @Output('clickEvent') click = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }

  soundHandler() {
    this.click.emit(this.sound)
  }

}
