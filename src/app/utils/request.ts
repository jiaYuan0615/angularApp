import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { router: api } = environment;

@Injectable({
  providedIn: 'root'
})

export class Request {
  constructor(
    private http: HttpClient
  ) { }

  get<T>(path: string, options?: object) {
    return this.http.get<T>(`${api}${path}`, options)
  }

  post<T>(path: string, payload?: object, options?: object) {
    return this.http.post<T>(`${api}${path}`, payload, options)
  }

  put<T>(path: string, payload?: object, options?: object) {
    return this.http.put<T>(`${api}${path}`, payload, options)
  }

  delete<T>(path: string, options?: object) {
    return this.http.delete<T>(`${api}${path}`, options)
  }
}
