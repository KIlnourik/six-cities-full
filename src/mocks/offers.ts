import { faker } from '@faker-js/faker';
import { Offer } from '../types/offer';

const getRandomItems = <T>(item: T, length: number): [] => {
  const items: [] = [];
  for (let i = 0; i < length; i++) {
    items.push(item);
  }
  return items;
};

const getOffers = (length: number): Offer[] => {
  const offers: Offer[] = [];
  for (let i = 0; i < length; i++) {
    offers.push({
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
      goods: string[];
      host: {
        avatarUrl: string;
        id: number;
        isPro: boolean;
        name: string;
      };
      id: number;
      images: string[];
      isFavorite: boolean;
      isPremium: boolean;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
      maxAdults: number;
      previewImage: string;
      price: number;
      rating: number;
      title: string;
      type: string;
    });
  }
  return offers;
};

export const offers: Offer[] = [

];
