import { Injectable } from '@angular/core';
import { Request } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private request: Request
  ) { }

  postLogin(payload: any) {
    return this.request.post<any>('member/login', payload)
  }
}
