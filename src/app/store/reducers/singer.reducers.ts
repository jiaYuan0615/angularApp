import { createReducer, on } from '@ngrx/store';
import { Singer } from 'src/app/interface/singer';
import *  as actions from '../actions';

export interface SingerState {
  singer: Singer;
  singers: Singer[];
}

export const initialState: SingerState = {
  singer: undefined,
  singers: undefined
}

export const singerReducer = createReducer(
  initialState,
  on(actions.GetSingerSuccessAction, (state, { payload }) => ({ ...state, singers: payload.singer })),
  on(actions.GetSpecifySingerAction, (state, { payload }) => ({ ...state, singer: payload }))
)

export const getSingers = (state: SingerState) => state.singers
export const getSinger = (state: SingerState) => state.singer
