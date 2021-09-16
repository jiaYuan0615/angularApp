import { Component, OnInit } from '@angular/core';
import { Sounds } from 'src/app/interface/sound';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  constructor(private soundService: SoundService) { }
  // sounds: Sounds
  sound$ = this.soundService.getSound();

  ngOnInit(): void {
    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }

    // }
    // this.soundService.getSound().subscribe(observer)
  }
}
