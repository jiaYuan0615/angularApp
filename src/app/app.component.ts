import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  paths = [
    {
      title: '首頁',
      route: '/'
    },
    {
      title: '個人頁面',
      route: 'profile'
    }
  ]

  constructor() {
  }
}
