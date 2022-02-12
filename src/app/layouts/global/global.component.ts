import { Component, HostListener, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.less']
})
export class GlobalComponent implements OnInit {
  readonly width: Number = 768;
  isMobile: boolean = false;
  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  ngAfterViewInit(): void {
    if (window.innerWidth > this.width) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  goToRoute = (path: string[], callback?: any) => {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
    if (callback) callback()
  }
}
