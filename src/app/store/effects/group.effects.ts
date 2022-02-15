import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { GroupService } from 'src/app/service/group.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class GroupEffects {
  constructor(
    private actions$: Actions,
    private groupService: GroupService,
    private message: NzMessageService,
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

  postGroup$ = createEffect(() => this.actions$.pipe(
    ofType(actions.PostGroupAction),
    switchMap((group) => {
      return this.groupService.postGroup(group.payload).pipe(
        map(({ message }) => {
          this.message.success(message)
          return actions.GetGroupAction()
        }),
        catchError(({ error }) => {
          this.message.error(error.message);
          return of(actions.PostGroupFailAction({ payload: error.message }))
        })
      )
    })
  ))
}
