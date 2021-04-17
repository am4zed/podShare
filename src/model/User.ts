import { Pod } from './Pod';
import { Item } from './Item';

export interface User {
  id: string;
  name: string;
  bio: string;
  rating: number;
  pods: Pod[];
  image: string;
  items: Item[];
  location: string;
}
