import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sound, Sounds } from '../interface/sound';
import { Request } from '../utils/request';
import { getToken } from '../utils/authorize';

@Injectable({
  providedIn: 'root'
})


export class SoundService {

  constructor(
    private request: Request,
  ) { }

  getSound() {
    return this.request.get<Sounds>("sound")
      .pipe(
        map(x => {
          x.sounds.forEach(v => {
            v.createdAt = new Date(v.createdAt);
            v.updatedAt = new Date(v.createdAt)
          });
          return x
        })
      );
  }

  postSound(payload: Sound) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    }
    return this.request.post<any>("sound", payload, options);
  };

  putSound(id: string, payload: any) {
    return this.request.put<any>(`sound/${id}`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    });
  }

  deleteSound(id: string) {
    return this.request.delete(`sound/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }
}
