import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  @Input() paths: any

  constructor(private globalService: GlobalService) {

  }

  ngOnInit(): void { }

  goToRoute(path: string) {
    this.globalService.goToRoute(path)
  }

}
