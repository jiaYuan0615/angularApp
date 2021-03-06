import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken } from '../utils/authorize';
import { Request } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private request: Request
  ) { }

  getMemberInfo() {
    return this.request.get<any>('member', {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  postLogin(payload: any) {
    return this.request.post<any>('member/login', payload)
  }

  registerMember(payload: any) {
    return this.request.post<any>("member/register", payload)
  }

  updateMember(payload: any) {
    return this.request.put<any>('member', payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`
      })
    })
  }

  updatePassword(payload: any) {
    return this.request.put<any>('member/password', payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }
}
