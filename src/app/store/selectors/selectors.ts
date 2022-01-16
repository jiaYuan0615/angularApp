import { createSelector } from 'reselect';
import * as fromReducer from '../reducers';
import * as member from '../reducers/member.reducers'
import * as sound from '../reducers/sound.reducers'

export const getMemberState = (state: fromReducer.State) => state.member
export const getSoundsState = (state: fromReducer.State) => state.sound

export const getMemberSelector = createSelector(
  getMemberState,
  member.getMember
)

export const getSoundSelector = createSelector(
  getSoundsState,
  sound.getSounds
);
