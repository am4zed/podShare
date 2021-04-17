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
    image: 'blah',
    items: [],
    location: 'EH1'
  },
  {
    id: '7896',
    name: 'Sarah',
    bio: 'lorem ipsum',
    rating: 4,
    pods: [],
    image: 'blah',
    items: [],
    location: 'EH6'
  },
  {
    id: '7897',
    name: 'Rupert',
    bio: 'lorem ipsum',
    rating: 5,
    pods: [],
    image: 'blah',
    items: [],
    location: 'EH7'
  },
  {
    id: '7898',
    name: 'Jo',
    bio: 'lorem ipsum',
    rating: 4,
    pods: [],
    image: 'blah',
    items: [],
    location: 'EH1'
  },
  {
    id: '7899',
    name: 'Sam',
    bio: 'lorem ipsum',
    rating: 5,
    pods: [],
    image: 'blah',
    items: [],
    location: 'EH7'
  },
  {
    id: '7900',
    name: 'Jess',
    bio: 'lorem ipsum',
    rating: 3,
    pods: [],
    image: 'blah',
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
    image: 'blah',
    available: true
  },
  {
    id: '779943',
    name: 'stand mixer',
    description: 'consectetur adipiscing elit, sed do eiusmod',
    type: ItemType.COOKING,
    image: 'blah',
    available: true
  },
  {
    id: '68732',
    name: 'food processer',
    description: 'adipiscing elit, sed do eiusmod tempor',
    type: ItemType.COOKING,
    image: 'blah',
    available: false
  },
  {
    id: '5673',
    name: 'pushchair',
    description: 'veniam, quis nostrud exercitation ullamco laboris',
    type: ItemType.KIDS,
    image: 'blah',
    available: true
  },
  {
    id: '789837',
    name: 'violin',
    description: 'aliquip ex ea commodo',
    type: ItemType.HOBBIES,
    image: 'blah',
    available: false
  },
  {
    id: '5675',
    name: 'cricut machine',
    description: 'dolore eu fugiat nulla par',
    type: ItemType.HOBBIES,
    image: 'blah',
    available: true
  }
];
