import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Singers } from '../interface/singer';
import { Request } from '../utils/request';
import { getToken } from '../utils/authorize';

const { router } = environment;

@Injectable({
  providedIn: 'root'
})

export class SingerService {

  constructor(
    private request: Request,
  ) { }

  getSinger() {
    return this.request.get<Singers>('singer');
  }

  // getSinger({ offset, limit }) {
  //   let params = new HttpParams();
  //   params.set("limit", limit);
  //   if (!!offset) params.set("offset", offset)
  //   return this.request.get<Singers>('singer', { params });
  // }

  postSinger(payload: Singers) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    }
    return this.request.post<Singers>("sound", payload, options);
  }
}
