import { Component, HostListener, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetMemberLogout } from '../../store';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.less']
})
export class GlobalComponent implements OnInit {
  readonly width: Number = 768;
  memberInfo$: Observable<any>;
  isMobile: boolean = false;
  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetMemberAction());
    this.memberInfo$ = this.store.select(fromStore.getMemberSelector);
  }

  @HostListener('window:resize', ['$event'])
  ngAfterViewInit(): void {
    if (window.innerWidth > this.width) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  logout = () => {
    this.store.dispatch(fromStore.GetMemberLogout());
  }

  goToRoute = (path: string[], callback?: any) => {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
    if (callback) callback()
  }
}
