import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sound } from 'src/app/interface/sound';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.less']
})
export class SoundComponent implements OnInit {

  constructor(private soundService: SoundService) { }
  sound: Sound[]
  sound$ = this.soundService.getSound().pipe(map(v => v.sounds));

  ngOnInit(): void {
    this.soundService.getSound().subscribe({
      next: v => this.sound = v.sounds
    })
  }

}
