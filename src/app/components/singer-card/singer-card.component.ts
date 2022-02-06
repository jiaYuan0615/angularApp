import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-singer-card',
  templateUrl: './singer-card.component.html',
  styleUrls: ['./singer-card.component.less']
})
export class SingerCardComponent implements OnInit {

  @Input() singer;
  @Input() goToRoute: (...args: any) => void;
  @Output('clickEvent') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  singerHandler() {
    this.click.emit(this.singer);
    this.goToRoute(this.singer.id);
  }

}
