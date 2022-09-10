import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, pipe } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.less']
})
export class GlobalComponent implements OnInit, OnDestroy {
  readonly width: Number = 768;
  memberInfo$: Observable<any>;
  destroy$ = new Subject();
  isMobile: boolean = false;
  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetMemberAction());
    this.memberInfo$ = this.store.select(fromStore.getMemberSelector);

    // 取得視窗改變事件
    fromEvent(window, 'resize').pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$),
    ).subscribe((x: any) => {
      const width = x.target['innerWidth']
      // this.store.dispatch(fromStore.postWindowSizeAction({ width }))
    })
  }

  logout = () => {
    this.store.dispatch(fromStore.GetMemberLogout());
  }

  goToRoute = (path: string[], callback?: any) => {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
    if (callback) callback()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
