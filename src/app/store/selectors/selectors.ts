import { createSelector } from 'reselect';
import * as fromReducer from '../reducers';
import * as member from '../reducers/member.reducers'

export const getMemberState = (state: fromReducer.State) => state.member

export const getMember = createSelector(getMemberState, member.getMember)
