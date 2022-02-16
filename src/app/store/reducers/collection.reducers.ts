import { createReducer, on } from '@ngrx/store';
import { Collection } from 'src/app/interface/collection';
import *  as actions from '../actions';

export interface CollectionState {
  collection: any;
  collectionItem: any;
}

export const initialState: CollectionState = {
  collection: undefined,
  collectionItem: undefined
}

export const collectionReducer = createReducer(
  initialState,
  on(actions.GetCollectionSuccessAction, (state, { payload }) => ({ ...state, collection: payload })),
  on(actions.GetCollectionItemSuccessAction, (state, { payload }) => ({ ...state, collectionItem: payload.collection }))
)


export const getCollection = (state) => state.collection;
export const getCollectionItem = (state) => state.collectionItem;
