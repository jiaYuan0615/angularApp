import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-singer-card',
  templateUrl: './singer-card.component.html',
  styleUrls: ['./singer-card.component.less']
})
export class SingerCardComponent implements OnInit {

  @Input() singer;
  @Input() collection;
  @Input() goToRoute: (...args: any) => void;
  @Input() showModal: (...args) => void;
  @Output('clickEvent') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


}
