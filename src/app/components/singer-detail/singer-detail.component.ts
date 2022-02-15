import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.less']
})
export class SingerDetailComponent implements OnInit {

  @Input() singer: any

  constructor() { }

  ngOnInit(): void {
  }

}
