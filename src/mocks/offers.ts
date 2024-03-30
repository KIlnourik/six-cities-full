import { faker } from '@faker-js/faker';
import { Offer } from '../types/offer';
import { HOUSING_TYPES, Rating, MAX_IMAGE_COUNT } from '../const';
import { getRandomItems } from '../utils/utils';

const offer = {
  bedrooms: faker.number.int(),
  city: {
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int(),
    },
    name: faker.location.city(),
  },
  description: faker.lorem.sentences(),
  goods: getRandomItems(faker.lorem.word(), faker.number.int({ max: 10 })),
  host: {
    avatarUrl: faker.image.url(),
    id: Number(faker.string.numeric({length: {min: 1, max: 10}})),
    isPro: faker.datatype.boolean(),
    name: faker.person.fullName(),
  },
  id: Number(faker.string.numeric()),
  images: getRandomItems(faker.image.url(), faker.number.int({ max: MAX_IMAGE_COUNT })),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int(),
  },
  maxAdults: faker.number.int(),
  previewImage: faker.image.url(),
  price: faker.number.int({ min: 1000 }),
  rating: faker.number.float({ min: Rating.Min, max: Rating.Max }),
  title: faker.lorem.sentence(),
  type: HOUSING_TYPES[faker.number.int({ min: 0, max: (HOUSING_TYPES.length - 1) })],
};

export const offers: Offer[] = getRandomItems(offer, faker.number.int({ max: 6 }));
