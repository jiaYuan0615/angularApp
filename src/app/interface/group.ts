export interface Groups {
  group: Group[];
}

export interface Group {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface GroupCreate {
  name: string;
}

export interface GroupUpdate {
  name: string;
}
