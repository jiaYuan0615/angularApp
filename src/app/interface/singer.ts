export interface Singers {
  singer: Singer[];
  totalQuantity: string;
}

export interface Singer {
  id: string;
  name: string;
  avatar: string;
  biography: string;
  groupId: string;
  nickname: string;
  gender: string;
  birth: string;
  country: string;
}
