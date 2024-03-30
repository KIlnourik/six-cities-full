import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isMain?: boolean;
};

function Logo({isMain}: Props): JSX.Element {
  return (
    <div className="header__left">
      <Link className={`header__logo-link ${isMain ? 'header__logo-link--active' : ''}`} to={AppRoute.Root}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}

export default Logo;
