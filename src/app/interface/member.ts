export interface Member {
  id: string;
  email: string;
  password: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface MemberLogin {
  email: string;
  password: string;
}
