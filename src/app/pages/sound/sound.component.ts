import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { GlobalService } from 'src/app/service/global.service';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {
  constructor(private soundService: SoundService, private route: ActivatedRoute, private global: GlobalService) { }
  // sounds: Sounds
  sound$ = this.soundService.getSound().pipe(map(x => x.sounds));

  ngOnInit(): void {

    // const observer = {
    //   next: v => this.sounds = v,
    //   error: e => console.log(e),
    //   complete: () => { }

    // }
    // this.soundService.getSound().subscribe(observer)
  }

  goToRoute(path: string[]) {
    this.global.goToRoute(path)
  }

  handler(sound) {
    console.log(sound);
  }
}
