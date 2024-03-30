import { faker } from '@faker-js/faker';
import { Comment } from '../types/comment';
import { Rating } from '../const';
import { getRandomItems } from '../utils/utils';

const review: Comment = {
  comment: faker.lorem.sentences(),
  date: faker.date.anytime().toString(),
  id: Number(faker.string.numeric({length: {min: 1, max: 10}})),
  rating: faker.number.float({ min: Rating.Min, max: Rating.Max }),
  user: {
    avatarUrl: faker.image.url(),
    id: Number(faker.string.numeric({length: {min: 1, max: 10}})),
    isPro: faker.datatype.boolean(),
    name: faker.person.fullName(),
  }
};

export const reviews: Comment[] = getRandomItems(review, faker.number.int({ max: 6 }));
