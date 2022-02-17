import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sound } from 'src/app/interface/sound';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  // 預設括號不填入參數則以定義的變數作為接收的參數
  @Input() sound: Sound;
  @Input() collection;
  @Input() collectItem: (...args) => void;
  @Input() showModal: (...args) => void;
  // Output 一定只能使用 EventEmitter 的方式
  @Output('clickEvent') click = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
