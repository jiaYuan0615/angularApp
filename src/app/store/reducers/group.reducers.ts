import { createReducer, on } from '@ngrx/store';
import { Group } from 'src/app/interface/group';
import *  as actions from '../actions';

export interface GroupState {
  groups: Group[];

}

export const initialState: GroupState = {
  groups: undefined
}

export const groupReducer = createReducer(
  initialState,
  on(actions.GetGroupSuccessAction, (state, { payload }) => ({ ...state, groups: payload.group }))
)

export const getGroups = (state: GroupState) => state.groups
