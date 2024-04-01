import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City, Points } from '../../types/types';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT } from '../../const';

type Props = {
  city: City;
  points: Points;
};

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: Props): JSX.Element {
  const { city, points } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(currentCustomIcon).addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
