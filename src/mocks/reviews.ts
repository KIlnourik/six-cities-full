import { faker } from '@faker-js/faker';
import { Review } from '../types/review';
import { Rating } from '../const';

const createReview = (): Review => ({
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
});

const createReviews = (length: number): Review[] => {
  const reviews: Review[] = [];
  for (let i = 0; i < length; i++) {
    reviews.push(createReview());
  }
  return reviews;
};

export const reviews: Review[] = createReviews(faker.number.int({ max: 6 }));
