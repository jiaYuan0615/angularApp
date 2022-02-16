import { ActionReducerMap } from '@ngrx/store';
import * as member from './member.reducers';
import * as router from './router.reducers';
import * as sound from './sound.reducers';
import * as singer from './singer.reducers'
import * as group from './group.reducers';
import * as collection from './collection.reducers';
// reducer 是專門用來存取資料的

export interface State {
  member: member.MemberState,
  router: router.RouterState,
  sound: sound.SoundState,
  singer: singer.SingerState,
  group: group.GroupState,
  collection: collection.CollectionState,
}


export const reducers: ActionReducerMap<State> = {
  member: member.memberReducer,
  router: router.reducer,
  sound: sound.soundReducer,
  singer: singer.singerReducer,
  group: group.groupReducer,
  collection: collection.collectionReducer
}

export { CustomSerializer } from './router.reducers';
