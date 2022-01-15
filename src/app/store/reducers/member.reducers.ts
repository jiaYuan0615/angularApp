import { createReducer, on } from '@ngrx/store';
import *  as actions from '../actions';

export interface MemberState {
  member: any;
}

export const initialState: MemberState = {
  member: ''
}

export const memberReducer = createReducer(
  initialState,
  on(actions.GetMemberAction, state => ({ ...state })),
  on(actions.PostMemberLoginAction, (state, { payload }) => ({ ...state, member: payload })),
)

// for selector
export const getMember = (state: MemberState) => state.member

