import { HttpClient } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.State>,
  ) { }

  goToRoute(path: string[]) {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }));
  }
}
