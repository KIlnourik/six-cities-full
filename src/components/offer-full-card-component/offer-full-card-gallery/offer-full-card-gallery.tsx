
type Props = {
  offerImages: string[];
}

function OfferFullCardGallery({ offerImages }: Props): JSX.Element {
  return (
    <div className="property__gallery">
      {offerImages.map((image) => (
        <div className="property__image-wrapper" key={image} >
          <img className="property__image" src={image} alt="Photo studio" />
        </div>
      ))}

    </div>
  );
}

export default OfferFullCardGallery;
