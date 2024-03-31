import { getRating } from '../../utils/utils';

type Props = {
  rating: number;
}

function Rating({ rating }: Props): JSX.Element {
  return (
    <>
      <span style={{ width: `${getRating(rating)}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </>
  );
}

export default Rating;
