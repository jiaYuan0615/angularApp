import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.less']
})
export class GroupCardComponent implements OnInit {

  @Input() group;
  @Input() goToRoute: (...args: any) => void;
  constructor() { }

  ngOnInit(): void {
  }

  groupHandler(id: string) {
    this.goToRoute(['group', id])
  }
}
