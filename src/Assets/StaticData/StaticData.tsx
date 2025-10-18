import {
  AcService,
  Carpenter,
  CarService,
  Cleaner,
  Electrician,
  Plumber,
} from '../Constant/Images';

export const UserData = [
  {
    id: 1,
    name: 'DigiWave',
    password: '1234',
    role: 'user',
  },
  {
    id: 2,
    name: 'DigiWave',
    password: '12345',
    role: 'subAdmin',
  },
];

export const HomeCard = [
  { id: 1, label: 'Electrician', image: Electrician },
  { id: 2, label: 'Plumber', image: Plumber },
  { id: 3, label: 'Cleaning', image: Cleaner },
  { id: 4, label: 'Carpenter', image: Carpenter },
  { id: 5, label: 'Car Service', image: CarService },
  { id: 6, label: 'Ac Service', image: AcService },
];

export const services = [
  {
    id: 1,
    label: 'Full Home Cleaning',
    rating: '4.76 (978k)',
    image: require('../Images/Rectangle.png'),
    amount: 'Rs. 100',
  },
  {
    id: 2,
    label: 'Full Home Cleaning',
    rating: '4.76 (978k)',
    image: require('../Images/Rectangle.png'),
    amount: 'Rs. 1500',
  },
  {
    id: 3,
    label: 'Full Home Cleaning',
    rating: '4.76 (978k)',
    image: require('../Images/Rectangle.png'),
    amount: 'Rs. 20000',
  },
];
