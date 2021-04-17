export enum ItemType {
  ELECTRICAL = 'electrical',
  SPORTS = 'sports',
  DIY = 'diy',
  COOKING = 'cooking',
  KIDS = 'kids',
  CLOTHING = 'clothing',
  HOBBIES = 'hobbies'
}

export interface Item {
  id: string;
  name: string;
  image: string;
  description: string;
  type: ItemType;
  available: boolean;
}
