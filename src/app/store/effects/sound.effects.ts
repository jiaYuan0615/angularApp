import { Injectable } from "@angular/core";
import { SoundService } from "src/app/service/sound.service";
import * as actions from '../actions'
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from "rxjs/operators";

@Injectable()
export class SoundEffects {
  constructor(
    private actions$: Actions,
    private soundService: SoundService,
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
}
