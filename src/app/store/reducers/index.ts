import { ActionReducerMap } from '@ngrx/store';
import * as member from './member.reducers';
import * as router from './router.reducers';

// reducer 是專門用來取資料的

export interface State {
  member: member.MemberState,
  router: router.RouterState,
}


export const reducers: ActionReducerMap<State> = {
  member: member.memberReducer,
  router: router.reducer,
}

export { CustomSerializer } from './router.reducers';
