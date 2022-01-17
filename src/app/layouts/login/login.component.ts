import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  readonly width: Number = 768;
  currentSelectIndex = 0;
  isMoblie: boolean = false;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    if (window.innerWidth > this.width) {
      this.isMoblie = false;
    } else {
      this.isMoblie = true;
    }
  }

  handleChangeTab({ index }) {
    this.currentSelectIndex = index
  }
}
