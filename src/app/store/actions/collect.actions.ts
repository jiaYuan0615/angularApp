import { createAction, props } from "@ngrx/store"

const getCollection = '[collection] getCollection'
const getCollectionSuccess = '[collection] getCollectionSuccess'
const getCollectionItem = '[collection] getCollectionItem'
const getCollectionItemSuccess = '[collection] getCollectionItemSuccess'
const postCollection = '[collection] postCollection'
const postCollectionFail = '[collection] postCollectionFail'
const postCollectionItem = '[collection] postCollectionItem'
const postCollectionItemFail = '[collection] postCollectionItemFail'



export const GetCollectionAction = createAction(
  getCollection
)

export const GetCollectionSuccessAction = createAction(
  getCollectionSuccess,
  props<{ payload: any }>()
);

export const GetCollectionItemAction = createAction(
  getCollectionItem
)

export const GetCollectionItemSuccessAction = createAction(
  getCollectionItemSuccess,
  props<{ payload: any }>()
)


export const PostCollectionAction = createAction(
  postCollection,
  props<{ payload: any, callback?: (...args: any) => void }>()
)

export const PostCollectionFailAction = createAction(
  postCollectionFail,
  props<{ payload: string, callback?: (...args: any) => void }>()
)

export const PostCollectionItemAction = createAction(
  postCollectionItem,
  props<{ payload: any, callback?: (...args: any) => void }>()
)

export const PostCollectionItemFailAction = createAction(
  postCollectionItemFail,
  props<{ payload: any, callback?: (...args: any) => void }>()
)

