import { useParams } from 'react-router-dom';
import { Offer } from '../../../types/offer';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import OfferFullCardGallery from '../offer-full-card-gallery/offer-full-card-gallery';
import OfferFullCardGoods from '../offer-full-card-goods/offer-full-card-goods';
import OfferFullCardHost from '../offer-full-card-host/offer-full-card-host';
import { Review } from '../../../types/review';
import OfferFullCardReviews from '../offer-full-card-reviews/offer-full-card-reviews';
import Rating from '../../rating/rating';

type Props = {
  offers: Offer[];
  reviews: Review[];
};

function OfferFullCard({ offers, reviews }: Props): JSX.Element {
  const { id } = useParams();

  const activeOffer = offers.find((offer) => offer.id.toString() === id);

  if (!activeOffer) {
    return <NotFoundPage />;
  }

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          {(activeOffer.images) && <OfferFullCardGallery offerImages={activeOffer.images} />}
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {(activeOffer.isPremium)
              && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {activeOffer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <Rating rating={activeOffer.rating} />
              </div>
              <span className="property__rating-value rating__value">{activeOffer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {activeOffer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {activeOffer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {activeOffer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{activeOffer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            {(activeOffer.goods) && <OfferFullCardGoods goods={activeOffer.goods} />}
            <OfferFullCardHost offer={activeOffer} />
            <div className="property__description">
              <p className="property__text">
                {activeOffer.description}
              </p>
            </div>
            <OfferFullCardReviews reviews={reviews} />
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferFullCard;
