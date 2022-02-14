import { createAction, props } from "@ngrx/store";
import { MemberInfo, MemberLogin } from '../../interface/member';

// action 是專門用來派發任務讓資料流作用

const getMember = '[member] getMember';
const getMemberSuccess = '[member] getMemberSuccess';
const postMemberLogin = '[member] postMemberLogin';
const getMemberLogout = '[member] getMemberLogout';
const memberLoginFail = '[member] memberLoginFail'

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

// export const PostMemberLoginAction = createAction(
//   postMemberLogin,
//   props<{ payload: MemberLogin }>()
// )
export const PostMemberLoginAction = createAction(
  postMemberLogin,
  props<{ payload: MemberLogin, callback?: (...args: any) => void }>()
)
