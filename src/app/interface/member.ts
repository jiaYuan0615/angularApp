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

export interface MemberInfo {
  id: string;
  email: string
  name: string
}
