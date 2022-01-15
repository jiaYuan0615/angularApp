import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  constructor(
    private store: Store<fromStore.State>,
  ) { }
  // sounds: Sounds

  ngOnInit(): void {
    console.log();

    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }

    // }
    // this.soundService.getSound().subscribe(observer)
  }

  goToRoute(path: string[]) {
    this.store.dispatch(fromStore.GoToRouteAction({ payload: { path } }))
  }

  handler(sound) {
    console.log(sound);
  }
}
