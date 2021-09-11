import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }


  goToRoute(path?: string) {
    this.globalService.goToRoute(path)
  }
}
