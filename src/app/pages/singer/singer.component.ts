import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Group } from 'src/app/interface/group';
import { GroupService } from 'src/app/service/group.service';
import { SingerService } from 'src/app/service/singer.service';
import * as fromStore from '../../store';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.less'],
})
export class SingerComponent implements OnInit {
  isVisible = false;

  groups: Group[];

  constructor(
    private store: Store<fromStore.State>,
  ) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    // this.store.dispatch(fromStore.)
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
