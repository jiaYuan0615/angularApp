import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sound, Sounds } from '../interface/sound';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})


export class SoundService {

  constructor(private http: HttpClient, private token: TokenService) { }

  getSound() {
    return this.http.get<Sounds>(`${environment.router}/sound`).pipe(map(x => x.sounds));
  }

  postSound(payload: Sound) {
    return this.http.post(`${environment.router}/sound`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${this.token.getToken()}`,
      })
    })
  };
}
