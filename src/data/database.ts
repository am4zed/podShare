import { User } from '../model/User';
import { Pod } from '../model/Pod';
import { Item, ItemType } from '../model/Item';

export const users: User[] = [
  {
    id: '7895',
    name: 'Bob',
    bio: 'lorem ipsum',
    rating: 3,
    pods: [],
    image: 'src/images/bob.jpg',
    items: [],
    location: 'EH1'
  },
  {
    id: '7896',
    name: 'Sarah',
    bio: 'lorem ipsum',
    rating: 4,
    pods: [],
    image: 'src/images/sarah.jpg',
    items: [],
    location: 'EH6'
  },
  {
    id: '7897',
    name: 'Rupert',
    bio: 'lorem ipsum',
    rating: 5,
    pods: [],
    image: 'src/images/rupert.jpg',
    items: [],
    location: 'EH7'
  },
  {
    id: '7898',
    name: 'Jo',
    bio: 'lorem ipsum',
    rating: 4,
    pods: [],
    image: 'src/images/jo.jpg',
    items: [],
    location: 'EH1'
  },
  {
    id: '7899',
    name: 'Sam',
    bio: 'lorem ipsum',
    rating: 5,
    pods: [],
    image: 'src/images/sam.jpg',
    items: [],
    location: 'EH7'
  },
  {
    id: '7900',
    name: 'Jess',
    bio: 'lorem ipsum',
    rating: 3,
    pods: [],
    image: 'src/images/jess.jpg',
    items: [],
    location: 'EH1'
  }
];

export const pods: Pod[] = [
  {
    id: '78594',
    name: 'we heart cycling',
    users: [],
    items: []
  },
  {
    id: '6537',
    name: 'chefs united',
    users: [],
    items: []
  },
  {
    id: '4567',
    name: 'not a hoarder',
    users: [],
    items: []
  },
  {
    id: '4568',
    name: 'yes a hoarder',
    users: [],
    items: []
  },
  { id: '46567', name: 'kids club', users: [], items: [] }
];

export const items: Item[] = [
  {
    id: '75943',
    name: 'bike',
    description: 'dolor sit',
    type: ItemType.SPORTS,
    image: 'src/images/bike.jpg',
    available: true
  },
  {
    id: '68732',
    name: 'food processer',
    description: 'adipiscing elit, sed do eiusmod tempor',
    type: ItemType.COOKING,
    image: 'src/images/blender.jpg',
    available: false
  },
  {
    id: '5673',
    name: 'pushchair',
    description: 'veniam, quis nostrud exercitation ullamco laboris',
    type: ItemType.KIDS,
    image: 'src/images/pram.jpg',
    available: true
  },
  {
    id: '789837',
    name: 'violin',
    description: 'aliquip ex ea commodo',
    type: ItemType.HOBBIES,
    image: 'src/images/violin.jpg',
    available: false
  },
  {
    id: '5675',
    name: 'loom',
    description: 'dolore eu fugiat nulla par',
    type: ItemType.HOBBIES,
    image: 'src/images/loom.jpg',
    available: true
  },
  {
    id: '779943',
    name: 'tent',
    description: 'consectetur adipiscing elit, sed do eiusmod',
    type: ItemType.HOBBIES,
    image: 'src/images/tent.jpg',
    available: true
  }
];
