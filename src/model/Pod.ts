import { User } from './User';

export interface Pod {
  id: string;
  name: string;
  users: User[];
}
