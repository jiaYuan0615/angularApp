import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Singer } from 'src/app/interface/singer';
import * as fromStore from '../../store';
import { GoToRouteAction } from '../../store/actions/router.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less'],
})
export class SingerComponent implements OnInit {
  isVisible = false;

  singers$: Observable<Singer[]>

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetSingerAction());
    this.singers$ = this.store.select(fromStore.getSingerSelector);
  }

  singerHandler(singer: any) {
    console.log(singer);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  goToRoute = (path: any) => {
    console.log(path);

    this.store.dispatch(GoToRouteAction({ payload: { path: [path] } }))
  }
}
