import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  baseUrl = `${environment.protocol}://${environment.host}${environment.port ? `:${environment.port}` : ''}${environment.prefix}`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('url', this.baseUrl);

  }

  loadData() {
    // this.http.get(`${this.baseUrl}`)
  }
}
