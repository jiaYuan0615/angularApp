export interface Sounds {
  sounds: Sound[];
}

export interface Sound {
  id: string;
  name: string;
  lyrics: string;
  publishYear: string | Date;
  cover: string;
  ost: string;
  isCover: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface SoundCreate {
  name: string;
  lyrics: string;
  publishYear: Date;
  cover: string;
  ost: string;
  isCover: boolean;
}

export interface SoundUpdate {
  name: string;
  lyrics: string;
  publishYear: Date;
  cover: string;
  ost: string;
  isCover: boolean;
}
