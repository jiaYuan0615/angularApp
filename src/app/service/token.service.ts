import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  tokenName: string = environment.tokenName;

  getToken() {
    return localStorage.getItem(this.tokenName)
  }

  setToken(token: string) {
    return localStorage.setItem(token, this.tokenName)
  }

  removeToken() {
    return localStorage.removeItem(this.tokenName)
  }
}
