import { Pod } from './Pod';

export interface User {
  name: string;
  bio: string;
  rating: number;
  pods: Pod[];
}
