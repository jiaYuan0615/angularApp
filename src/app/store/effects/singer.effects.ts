import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SingerService } from 'src/app/service/singer.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class SingerEffects {
  constructor(
    private actions$: Actions,
    private singerService: SingerService,
    private message: NzMessageService
  ) { }

  getSinger$ = createEffect(() => this.actions$.pipe(
    ofType(actions.GetSingerAction),
    switchMap(() => {
      return this.singerService.getSinger().pipe(
        map(({ singer }) => actions.GetSingerSuccessAction({ payload: { singer } })),
        catchError(({ error }) => of(actions.GetSingerFailAction({ payload: error })))
      )
    }),
  ));
}
