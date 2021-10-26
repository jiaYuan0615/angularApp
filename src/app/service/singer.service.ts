import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Singers } from '../interface/singer';
import { GlobalService } from './global.service';
import { TokenService } from './token.service';

const { router } = environment;

@Injectable({
  providedIn: 'root'
})

export class SingerService {

  constructor(
    private token: TokenService,
    private global: GlobalService,
  ) { }

  getSinger({ offset, limit }) {

    let params = new HttpParams();
    params.set("limit", limit);
    if (!!offset) params.set("offset", offset)

    return this.global.get<Singers>('singer', { params });

  }

  postSinger(payload: Singers) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `bearer ${this.token.getToken()}`,
      })
    }
    return this.global.post<Singers>("sound", payload, options);
  }
}
