import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  backendApi = environment.router;

  goToRoute(path: string) {
    this.router.navigate(new Array(path));
  }
}
