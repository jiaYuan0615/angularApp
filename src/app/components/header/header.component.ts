import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
  }


  goToRoute(path: string[]) {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
  }
}
