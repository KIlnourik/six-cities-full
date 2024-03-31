import { Review } from '../../../types/review';
import OfferFullCardReview from '../offer-full-card-review/offer-full-card-review';

type Props = {
  reviews: Review[];
}

function OfferFullCardReviews({ reviews }: Props): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferFullCardReview review={review} key={review.id} />
        ))}
      </ul>
    </section>
  );
}

export default OfferFullCardReviews;
