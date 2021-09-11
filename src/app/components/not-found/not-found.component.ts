import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  goToRoute(path: string) {
    this.globalService.goToRoute(path)
  }
}
