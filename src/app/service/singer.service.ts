import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SingerCreate, Singers } from '../interface/singer';
import { Request } from '../utils/request';
import { getToken } from '../utils/authorize';

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

  postSinger(payload: SingerCreate) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    }
    return this.request.post<any>("singer", payload, options);
  }

  putSinger(id: string, payload: any) {
    return this.request.put<any>(`singer/${id}`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  deleteSinger(id: string) {
    return this.request.delete<any>(`singer/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`
      })
    })
  }
}
