import { Injectable } from '@angular/core';
import { Request } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private request: Request
  ) { }

  postImage(payload: any) {
    return this.request.post<any>('image', payload)
  }
}
