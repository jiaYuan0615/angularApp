import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from '../actions'
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) { }


  goToRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.GoToRouteAction),
      map((actions) => actions.payload),
      tap(({ path, query: queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras })
      })
    )
  }, { dispatch: false })


  back$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.BackAction),
      tap(() => this.location.back));
  }, { dispatch: false });
}
