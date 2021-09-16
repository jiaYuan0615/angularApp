import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient, private token: TokenService) { }

  getSinger({ offset, limit }) {
    let params = new HttpParams();
    params.set("limit", limit);
    if (!!offset) params.set("offset", offset)
    return this.http.get(`${environment.router}/singer`, { params });
  }

  postSinger(payload) {
    return this.http.post(`${environment.router}/singer`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${this.token.getToken()}`
      }),
    })
  }
}
