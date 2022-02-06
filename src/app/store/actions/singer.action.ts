import { createAction, props } from "@ngrx/store";
import { Singer, SingerCreate, Singers, SingeUpdate } from "src/app/interface/singer";

const getSinger = '[singer] getSinger';
const getSingerSuccess = '[singer] getSingerSuccess';
const getSingerFail = '[singer] getSingerFail';
const getSpecifySinger = '[singer] getSpecifySinger';
const postSinger = '[singer] postSinger';
const putSinger = '[singer] putSinger';
const deleteSinger = '[singer] deleteSinger';

export const GetSingerAction = createAction(
  getSinger
)

export const GetSingerSuccessAction = createAction(
  getSingerSuccess,
  props<{ payload: Singers, callback?: (...args: any) => void }>()
)

export const GetSingerFailAction = createAction(
  getSingerFail,
  props<{ payload: string }>()
)

export const GetSpecifySingerAction = createAction(
  getSpecifySinger,
  props<{ payload: Singer }>()
)

export const PostSingerAction = createAction(
  postSinger,
  props<{ payload: SingerCreate }>()
)

export const PutSingerAction = createAction(
  putSinger,
  props<{ payload: SingeUpdate }>()
)

export const DeleteSingerAction = createAction(
  deleteSinger,
  props<{ payload: string }>()
)
