import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from '../actions'
import { MemberService } from 'src/app/service/member.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { setToken } from 'src/app/utils/authorize';
import { NzMessageService } from 'ng-zorro-antd/message';

// effects 處理對應商業邏輯（大部分是和後端取資料）

@Injectable()
export class MemberEffects {
  constructor(
    private actions$: Actions,
    private memberService: MemberService,
    private message: NzMessageService
  ) { }


  // 沒有要透過呼叫 action 來放入資料到 reducers 時需要加上 { dispatch: false }
  // 通常登入的行為是寫入到 localstorage
  // 而不是將資料放入 state 裡面
  login$ = createEffect(() => this.actions$.pipe(
    ofType(actions.PostMemberLoginAction),
    switchMap((member) => {
      return this.memberService.postLogin(member).pipe(
        map(({ message, token }) => {
          setToken(token)
          this.message.success(message)
          return actions.GoToRouteAction({ payload: { path: ['/'] } })
        }),
        catchError(({ error }) => {
          this.message.error(error.message)
          return of(actions.GoToRouteAction({ payload: { path: ['/'] } }))
        })
      )
    }),
  ));


}
