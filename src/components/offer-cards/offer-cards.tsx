import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offer[];
}

function OfferCards({offers}: Props): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} />) }
    </div>
  );
}

export default OfferCards;
