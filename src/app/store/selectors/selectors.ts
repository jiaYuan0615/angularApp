import { createSelector } from 'reselect';
import * as fromReducer from '../reducers';
import * as member from '../reducers/member.reducers'
import * as sound from '../reducers/sound.reducers'
import * as singer from '../reducers/singer.reducers';
import * as group from '../reducers/group.reducers';
import * as collection from '../reducers/collection.reducers';

export const getMemberState = (state: fromReducer.State) => state.member
export const getSoundsState = (state: fromReducer.State) => state.sound
export const getSingerState = (state: fromReducer.State) => state.singer
export const getGroupState = (state: fromReducer.State) => state.group
export const getCollectionState = (state: fromReducer.State) => state.collection

export const getMemberSelector = createSelector(
  getMemberState,
  member.getMember
)

export const getSoundSelector = createSelector(
  getSoundsState,
  sound.getSounds
);

export const getSingerSelector = createSelector(
  getSingerState,
  singer.getSingers
)

export const getGroupSelector = createSelector(
  getGroupState,
  group.getGroups
)

export const getCollectionSelector = createSelector(
  getCollectionState,
  collection.getCollection
)
