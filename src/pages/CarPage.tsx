// CarPage.tsx

import React, { useState, useEffect } from 'react';
import { Placemark } from '../types';
import locationsData from '../assets/locations.json';
import FilteredCarList from 'components/FilteredCarList';
import Map from 'components/Map';
import 'styles/CarPage.css';

const CarPage: React.FC = () => {
  const [cars, setCars] = useState<Placemark[]>([]);

  useEffect(() => {
    setCars(locationsData.placemarks);
  }, []);

  return (
    <div className="car-page-container">
      <FilteredCarList cars={cars} />
      <Map />
    </div>
  );
};

export default CarPage;
