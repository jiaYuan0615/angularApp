import { MemberEffects } from './member.effects'
import { RouterEffects } from './router.effects';
import { SingerEffects } from './singer.effects';
import { SoundEffects } from './sound.effects';
import { GroupEffects } from './group.effects';

export const effects: any[] = [
  MemberEffects,
  RouterEffects,
  SoundEffects,
  SingerEffects,
  GroupEffects
];

export * from './member.effects'
export * from './router.effects';
export * from './sound.effects';
export * from './singer.effects';
export * from './group.effects';
