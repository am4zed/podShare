import { User } from './User';
import { Item } from './Item';

export interface Pod {
  id: string;
  name: string;
  users: User[];
  items: Item[];
}
