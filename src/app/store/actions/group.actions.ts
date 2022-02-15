import { createAction, props } from "@ngrx/store";
import { Group, GroupCreate, Groups } from "src/app/interface/group";
import { SingeUpdate } from "src/app/interface/singer";

const getGroup = '[group] getGroup';
const getGroupSuccess = '[group] getGroupSuccess';
const getGroupFail = '[group] getGroupFail';
const getSpecifyGroup = '[group] getSpecifyGroup';
const postGroup = '[group] postGroup';
const postGroupFail = '[group] postGroupFail';
const putGroup = '[group] putGroup';
const deleteGroup = '[group] deleteGroup';

export const GetGroupAction = createAction(
  getGroup
)

export const GetGroupSuccessAction = createAction(
  getGroupSuccess,
  props<{ payload: Groups, callback?: (...args: any) => void }>()
)

export const GetGroupFailAction = createAction(
  getGroupFail,
  props<{ payload: string }>()
)

export const GetSpecifyGroupAction = createAction(
  getSpecifyGroup,
  props<{ payload: Group }>()
)

export const PostGroupAction = createAction(
  postGroup,
  props<{ payload: any }>()
)

export const PostGroupFailAction = createAction(
  postGroupFail,
  props<{ payload: string }>()
)

export const PutGroupAction = createAction(
  putGroup,
  props<{ payload: SingeUpdate }>()
)

export const DeleteGroupAction = createAction(
  deleteGroup,
  props<{ payload: string }>()
)
