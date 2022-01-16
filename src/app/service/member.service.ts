import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private global: GlobalService,
    private store: Store<fromStore.State>,
  ) { }

  getMember() {
    return this.global.get
  }

  postLogin(payload: any) {
    return this.global.post<any>('member/login', payload)
  }
}
