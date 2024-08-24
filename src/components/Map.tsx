// Map.tsx

import React, { useEffect, useRef } from 'react';
//import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoia2lrYW5pLXBhcnRoIiwiYSI6ImNtMDdzbmJkejE2dnkya3IwcXZ2d2E0NzUifQ.8zNZPfCw9-NH6T3f3oT8xw';

mapboxgl.accessToken = MAPBOX_TOKEN;

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
      center: [-74.5, 40], // Initial map center in [longitude, latitude]
      zoom: 9, // Initial map zoom level
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="map"
      style={{ height: '500px' }} // Set the map size
    />
  );
};

export default Map;
