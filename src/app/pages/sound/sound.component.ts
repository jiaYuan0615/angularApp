import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sounds, Sound } from 'src/app/interface/sound';
import * as fromStore from '../../store';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  sounds$: Observable<Sound[]>;
  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GetSoundAction());
    this.sounds$ = this.store.select(fromStore.getSoundSelector);


    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }

    // }
  }

  handler(sound) {
    console.log(sound);
  }
}
