import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SingerService } from 'src/app/service/singer.service';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less']
})
export class SingerComponent implements OnInit {
  singer$ = this.singerService.getSinger({ offset: 20, limit: 20 }).pipe(map(x => x.singer));

  constructor(private singerService: SingerService) { }

  ngOnInit(): void {
  }

  singerHandler(singer: any) {
    console.log(singer);
  }

}
