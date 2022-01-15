import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Group } from 'src/app/interface/group';
import { GroupService } from 'src/app/service/group.service';
import { SingerService } from 'src/app/service/singer.service';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less'],
})
export class SingerComponent implements OnInit {
  singer$ = this.singerService
    .getSinger({ offset: 20, limit: 20 })
    .pipe(map((x) => x.singer));
  group$ = this.groupService.getGroup().pipe(map((x) => x.group));
  isVisible = false;

  groups: Group[];

  constructor(
    private singerService: SingerService,
    private groupService: GroupService,
  ) {
    this.groupService.getGroup().subscribe((x) => (this.groups = x.group));
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  singerHandler(singer: any) {
    console.log(singer);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
