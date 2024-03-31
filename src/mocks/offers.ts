import { faker } from '@faker-js/faker';
import { Offer } from '../types/offer';
import { HOUSING_TYPES, Rating, MAX_IMAGE_COUNT } from '../const';
import { getRandomItems } from '../utils/utils';

const createOffer = (): Offer => ({
  bedrooms: faker.number.int({ max: 10 }),
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
    avatarUrl: faker.image.avatar(),
    id: Number(faker.string.numeric({ length: { min: 1, max: 10 } })),
    isPro: faker.datatype.boolean(),
    name: faker.person.fullName(),
  },
  id: Number(faker.string.numeric({ length: { min: 1, max: 10 } })),
  images: getRandomItems(faker.image.urlLoremFlickr({ category: 'city' }), faker.number.int({ max: MAX_IMAGE_COUNT })),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int(),
  },
  maxAdults: faker.number.int({max: 10}),
  previewImage: faker.image.urlLoremFlickr({ category: 'city' }),
  price: faker.number.int({ min: 1000, max: 10000 }),
  rating: faker.number.float({ min: Rating.Min, max: Rating.Max, fractionDigits: 1 }),
  title: faker.lorem.sentence(),
  type: HOUSING_TYPES[faker.number.int({ min: 0, max: (HOUSING_TYPES.length - 1) })],
});

const createOffers = (length: number): Offer[] => {
  const offers: Offer[] = [];
  for (let i = 0; i < length; i++) {
    offers.push(createOffer());
  }
  return offers;
};

export const offers: Offer[] = createOffers(faker.number.int({ max: 6 }));
