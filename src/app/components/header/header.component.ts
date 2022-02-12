import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean
  @Input() goToRoute: (...args) => void

  visible = false

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
  }

  showDrawer() {
    this.visible = true
  }

  close() {
    this.visible = false
  }

}
