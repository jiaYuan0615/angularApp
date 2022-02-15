import { Injectable } from "@angular/core";
import { SoundService } from "src/app/service/sound.service";
import * as actions from '../actions'
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from "rxjs/operators";
import { NzMessageService } from "ng-zorro-antd/message";

@Injectable()
export class SoundEffects {
  constructor(
    private actions$: Actions,
    private soundService: SoundService,
    private message: NzMessageService
  ) { }

  getSounds$ = createEffect(() => this.actions$.pipe(
    ofType(actions.GetSoundAction),
    switchMap(() => {
      return this.soundService.getSound().pipe(
        map(({ sounds }) => {
          return actions.GetSoundSuccessAction({ payload: { sounds } })
        }),
        catchError(({ error }) => of(actions.GetSoundFailAction(error)))
      )
    }),
  ))

  postSound$ = createEffect(() => this.actions$.pipe(
    ofType(actions.PostSoundAction),
    switchMap((sound) => {
      return this.soundService.postSound(sound.payload).pipe(
        map(({ message }) => {
          this.message.success(message)
          return actions.GetSoundAction()
        }),
        catchError(({ error }) => {
          this.message.error(error.message);
          return of(actions.PostSoundFailAction({ payload: error }))
        })
      )
    })
  ))
}
