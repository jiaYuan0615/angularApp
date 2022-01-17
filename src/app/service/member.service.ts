import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import * as fromStore from '../store';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { Request } from '../utils/request';

const { router: api } = environment;
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private request: Request,
    private store: Store<fromStore.State>,
  ) { }

  postLogin(payload: any) {
    return this.request.post<any>('member/login', payload)
    // return this.request.post<any>(`${api}member/login`, payload)
  }
}
