import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CollectService } from 'src/app/service/collect.service';
import * as actions from '../actions'
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CollectionEffects {
  constructor(
    private actions$: Actions,
    private collectService: CollectService,
    private message: NzMessageService
  ) { }

  /**
   * 取得全部收藏資料夾
   */
  getCollection$ = createEffect(() => this.actions$.pipe(
    ofType(actions.GetCollectionAction),
    switchMap(() => {
      return this.collectService.getCollection().pipe(
        map(({ collection }) => actions.GetCollectionSuccessAction({ payload: collection })),
        catchError(({ error }) => of(actions.GoToRouteAction({ payload: { path: ['/auth/login'] } })))
      )
    })
  ))

  /**
   * 新增收藏資料夾
   */
  postCollection$ = createEffect(() => this.actions$.pipe(
    ofType(actions.PostCollectionAction),
    switchMap((payload) => {
      return this.collectService.postCollection(payload.payload).pipe(
        map(({ message }) => {
          this.message.success(message)
          return actions.GetCollectionAction()
        }),
        catchError(({ error }) => {
          this.message.error(error.message)
          return of(actions.PostCollectionFailAction({ payload: error.message }))
        })
      )
    })
  ))

  /**
   * 新增項目至資料夾
   */
  postCollectionItem$ = createEffect(() => this.actions$.pipe(
    ofType(actions.PostCollectionItemAction),
    switchMap(({ payload }) => {

      return this.collectService.postItemToCollection(payload).pipe(
        map(({ message }) => {
          this.message.success(message)
          return actions.GetCollectionAction()
        }),
        catchError(({ error }) => {
          this.message.error(error.message)
          return of(actions.PostCollectionItemFailAction({ payload: error.message }))
        })
      )
    })
  ))

  deleteCollectionItem$ = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteCollectionItemAction),
    switchMap(({ payload }) => {
      return this.collectService.deleteCollectionItem(payload.id, payload.itemId).pipe(
        map(({ message }) => {
          this.message.success(message)
          return actions.GetCollectionAction()
        }),
        catchError(({ error }) => {
          this.message.error(error.message)
          return of(actions.DeleteCollectionItemFailAction({ payload: error.message }))
        })
      )
    })
  ))
}


