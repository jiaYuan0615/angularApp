import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { GroupService } from 'src/app/service/group.service';

@Injectable()
export class GroupEffects {
  constructor(
    private actions$: Actions,
    private groupService: GroupService
  ) { }

  getGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.GetGroupAction),
    switchMap(() => {
      return this.groupService.getGroup().pipe(
        map(({ group }) => actions.GetGroupSuccessAction({ payload: { group } })),
        catchError(({ error }) => of(actions.GetGroupFailAction({ payload: error }))
        )
      )
    })
  ))
}
