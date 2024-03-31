import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offer';
import OfferFullCard from '../../components/offer-full-card-component/offer-full-card/offer-full-card';
import { Review } from '../../types/review';

type Props = {
  offers: Offer[];
  reviews: Review[];
};


function RoomPage({ offers, reviews }: Props): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>
          6 cities: property
        </title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <OfferFullCard offers={offers} reviews={reviews} />
    </div>
  );
}

export default RoomPage;
