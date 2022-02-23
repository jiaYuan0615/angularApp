import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.less']
})
export class CollectionComponent implements OnInit {
  collection$: Observable<any>;
  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetCollectionAction())
    this.collection$ = this.store.select(fromStore.getCollectionSelector);
  }
}
