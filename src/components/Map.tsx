import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Placemark } from 'types';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  const [selectedCarName, setSelectedCarName] = useState<string | null>(null);
  const markersRef = useRef<Record<string, mapboxgl.Marker>>({});

  useEffect(() => {
    // Initialize map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
      center: [userLocation.longitude, userLocation.latitude], // Initial map center in [longitude, latitude]
      zoom: 10, // Initial map zoom level
    });

    // Add user location marker
    new mapboxgl.Marker({ color: 'blue' })
      .setLngLat([userLocation.longitude, userLocation.latitude])
      .setPopup(new mapboxgl.Popup().setText('You are here'))
      .addTo(mapRef.current!);

    // Add car markers
    cars.forEach((car) => {
      const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([car.coordinates[0], car.coordinates[1]])
        .addTo(mapRef.current!);

      marker.getElement().addEventListener('click', () => {
        setSelectedCarName((prevName) =>
          prevName === car.name ? null : car.name
        );
      });

      // Store marker reference by Name
      markersRef.current[car.name] = marker;
    });

    // Clean up on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [cars, userLocation]);

  useEffect(() => {
    // Update marker visibility based on selectedCarName
    Object.keys(markersRef.current).forEach((name) => {
      const marker = markersRef.current[name];
      const markerElement = markersRef.current[name].getElement();

      if (selectedCarName) {
        // If a car is selected, show only the selected marker
        if (name === selectedCarName) {
          markerElement.style.display = 'block';
          marker.setPopup(new mapboxgl.Popup().setText(name)); // Set popup for selected marker
        } else {
          markerElement.style.display = 'none';
        }
      } else {
        // If no car is selected, show all markers
        markerElement.style.display = 'block';
        marker.setPopup(null); // Remove popup when all markers are visible
      }
    });
  }, [selectedCarName]);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car Map</h1>
      <div
        ref={mapContainerRef}
        className="map"
        style={{ height: '100vh' }} // Set the map size
      />
    </div>
  );
};

export default Map;
