import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const observer = {
      next: (value) => { },
      error: (error) => { },
      complete: () => { }
    }
    this.route.paramMap.pipe(map(params => params.get('username'))).subscribe(observer)
  }

  ngOnInit(): void {
    console.log('path', environment.router);
  }
}
