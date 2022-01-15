import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

const { router: api } = environment;

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromStore.State>,
  ) { }

  goToRoute(path: string[]) {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }));
  }

  get<T>(path: string, options?: object) {
    return this.http.get<T>(`${api}${path}`, options)
  }

  post<T>(path: string, payload?: object, options?: object) {
    return this.http.post<T>(`${api}${path}`, payload, options)
  }

  put<T>(path: string, payload?: object, options?: object) {
    return this.http.put<T>(`${api}${path}`, payload, options)
  }

  delete<T>(path: string, options?: object) {
    return this.http.delete<T>(`${api}${path}`, options)
  }
}
