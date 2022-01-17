import { MemberEffects } from './member.effects'
import { RouterEffects } from './router.effects';
import { SoundEffects } from './sound.effects';

export const effects: any[] = [
  MemberEffects,
  RouterEffects,
  SoundEffects,
];

export * from './member.effects'
export * from './router.effects';
export * from './sound.effects';
