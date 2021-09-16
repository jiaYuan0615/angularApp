import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Sounds } from 'src/app/interface/sound';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  constructor(private soundService: SoundService, private route: ActivatedRoute) { }
  // sounds: Sounds
  sound$ = this.soundService.getSound().pipe(map(x => x.sounds));

  ngOnInit(): void {
    console.log(this.route.url.subscribe({
      next: v => console.log(v),
    }));

    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }

    // }
    // this.soundService.getSound().subscribe(observer)
  }

  handler(sound) {
    console.log(sound);
  }
}
