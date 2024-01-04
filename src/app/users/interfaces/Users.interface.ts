export interface User {
  id: number;
  username: string;
  name: string;
  active: boolean;
  role: string;
  img: string;
}

export enum Role {
  Other = 'other',
  Student = 'student',
  Teacher = 'teacher',
}
