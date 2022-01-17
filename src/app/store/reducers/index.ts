import { ActionReducerMap } from '@ngrx/store';
import * as member from './member.reducers';
import * as router from './router.reducers';
import * as sound from './sound.reducers';

// reducer 是專門用來存取資料的

export interface State {
  member: member.MemberState,
  router: router.RouterState,
  sound: sound.SoundState,
}


export const reducers: ActionReducerMap<State> = {
  member: member.memberReducer,
  router: router.reducer,
  sound: sound.soundReducer,
}

export { CustomSerializer } from './router.reducers';
