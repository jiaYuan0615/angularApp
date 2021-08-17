import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  goToRoute(path: string) {
    this.router.navigate(new Array(path));
  }
}
