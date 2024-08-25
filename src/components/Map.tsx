// Map.tsx

import React, { useState, useEffect, useRef } from 'react';
//import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { Placemark } from 'types';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoia2lrYW5pLXBhcnRoIiwiYSI6ImNtMDZpd2JmODBkOWIyanM0N2lodjQwdXgifQ.Sn-nXnBNeWhmKmWwh5rW-A';

mapboxgl.accessToken = MAPBOX_TOKEN;

interface MapProps {
  cars: Placemark[];
  userLocation: { longitude: number; latitude: number };
}

const Map: React.FC<MapProps> = ({ cars, userLocation }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize map
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
        center: [userLocation.longitude, userLocation.latitude], // Initial map center in [longitude, latitude]
        zoom: 9, // Initial map zoom level
      });

      // Set map loaded flag once map is fully loaded
      mapRef.current.on('load', () => {
        setIsMapLoaded(true);

        // Add user location marker
        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat([userLocation.longitude, userLocation.latitude])
          .setPopup(new mapboxgl.Popup().setText('You are here'))
          .addTo(mapRef.current!);
      });
    }

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        // Remove all markers and popups if necessary
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [userLocation.latitude, userLocation.longitude]);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car Map</h1>
      <div
        ref={mapContainerRef}
        className="map"
        style={{ height: '550px' }} // Set the map size
      />
    </div>
  );
};

export default Map;
