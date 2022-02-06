import { createAction, props } from "@ngrx/store";
import { MemberLogin } from '../../interface/member';

// action 是專門用來派發任務讓資料流作用

const getMember = '[member] getMember';
const postMemberLogin = '[member] postMemberLogin';
const memberLoginFail = '[member] memberLoginFail'

export const GetMemberAction = createAction(
  getMember
);

// export const PostMemberLoginAction = createAction(
//   postMemberLogin,
//   props<{ payload: MemberLogin }>()
// )
export const PostMemberLoginAction = createAction(
  postMemberLogin,
  props<{ payload: MemberLogin, callback?: (...args: any) => void }>()
)
