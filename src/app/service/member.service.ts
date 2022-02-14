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
}
