import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Sound } from 'src/app/interface/sound';

@Component({
  selector: 'app-sound-detail',
  templateUrl: './sound-detail.component.html',
  styleUrls: ['./sound-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundDetailComponent implements OnInit {

  @Input() sound: Sound

  constructor() { }

  ngOnInit(): void { }

}
