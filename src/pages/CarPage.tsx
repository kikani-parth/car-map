import React, { useState, useEffect } from 'react';
import { Placemark } from '../types';
import locationsData from '../assets/locations.json';
import FilteredCarList from 'components/FilteredCarList';
import Map from 'components/Map';
import 'styles/CarPage.css';

interface Coordinates {
  longitude: number;
  latitude: number;
}

const CarPage: React.FC = () => {
  const [cars, setCars] = useState<Placemark[]>([]);
  const [userLocation, setUserLocation] = useState<Coordinates>({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    setCars(locationsData.placemarks);

    // Get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    }
  }, []);

  return (
    <div className="car-page-container">
      <div className="car-list-section">
        <FilteredCarList cars={cars} />
      </div>
      <div className="map-section">
        <Map cars={cars} userLocation={userLocation} />
      </div>
    </div>
  );
};

export default CarPage;
