export interface Sounds {
  sounds: Sound[];
}

export interface Sound {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
