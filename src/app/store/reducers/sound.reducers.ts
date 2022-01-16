import { createReducer, on } from '@ngrx/store';
import { Sounds, Sound } from 'src/app/interface/sound';
import *  as actions from '../actions';

export interface SoundState {
  sounds: Sound[];
  sound: Sound
}

export const initialState: SoundState = {
  sounds: undefined,
  sound: undefined,
}

export const soundReducer = createReducer(
  initialState,
  on(actions.GetSoundSuccessAction, (state, { payload }) => ({ ...state, sounds: payload.sounds })),
  on(actions.GetSpecifySoundAction, (state, { payload }) => ({ ...state, sound: payload }))
)


export const getSound = (state: SoundState) => state.sound
export const getSounds = (state: SoundState) => state.sounds
