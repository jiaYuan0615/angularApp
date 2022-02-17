import { createAction, props } from "@ngrx/store";
import { MemberInfo, MemberLogin } from '../../interface/member';

// action 是專門用來派發任務讓資料流作用

const getMember = '[member] getMember';
const getMemberSuccess = '[member] getMemberSuccess';
const postMemberLogin = '[member] postMemberLogin';
const getMemberLogout = '[member] getMemberLogout';
const memberLoginFail = '[member] memberLoginFail'
const updateMember = '[member] updateMember'
const updatePassword = '[member] updatePassword'
const updatePasswordFail = '[member] updatePasswordFail'


export const GetMemberLogout = createAction(
  getMemberLogout
)

export const GetMemberAction = createAction(
  getMember
);

export const GetMemberSuccessAction = createAction(
  getMemberSuccess,
  props<{ payload: MemberInfo }>()
)

export const PostMemberLoginAction = createAction(
  postMemberLogin,
  props<{ payload: MemberLogin, callback?: (...args: any) => void }>()
)

export const UpdateMemberAction = createAction(
  updateMember,
  props<{ payload: any, callback?: (...args: any) => void }>()
)

export const UpdatePasswordAction = createAction(
  updatePassword,
  props<{ payload: any, callback?: (...args: any) => void }>()
)

export const UpdatePasswordFailAction = createAction(
  updatePasswordFail,
  props<{ payload: string }>()
)
