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
  createdAt: string;
  updatedAt: string;
}
