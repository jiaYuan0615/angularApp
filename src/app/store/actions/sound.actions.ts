import { createAction, props } from "@ngrx/store";
import { Sound, Sounds, SoundCreate, SoundUpdate } from '../../interface/sound';

const getSound = '[sound] getSound';
const getSoundSuccess = '[sound] getSoundSuccess';
const getSoundFail = '[sound] getSoundFail';
const getSpecifySound = '[sound] getSpecifySound';
const postSound = '[sound] postSound';
const postSoundFail = '[sound] postSoundFail';
const putSound = '[sound] putSound';
const deleteSound = '[sound] deleteSound';

export const GetSoundAction = createAction(
  getSound,
)

export const GetSoundSuccessAction = createAction(
  getSoundSuccess,
  props<{ payload: Sounds }>()
)

export const GetSoundFailAction = createAction(
  getSoundFail,
  props<{ payload: any }>()
)

export const GetSpecifySoundAction = createAction(
  getSpecifySound,
  props<{ payload: Sound }>()
)

export const PostSoundAction = createAction(
  postSound,
  props<{ payload: any, callback?: (...args) => void }>()
)

export const PostSoundFailAction = createAction(
  postSoundFail,
  props<{ payload: string }>()
)

export const PutSoundAction = createAction(
  putSound,
  props<{ payload: SoundUpdate }>()
)

export const DeleteSoundAction = createAction(
  deleteSound,
  props<{ payload: string }>()
)
