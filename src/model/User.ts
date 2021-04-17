import { Pod } from './Pod';

export interface User {
  id: string;
  name: string;
  bio: string;
  rating: number;
  pods: Pod[];
}
