import React, { useState, useEffect } from 'react';
import CarList from '../components/CarList';
import { Placemark } from '../types';
import locationsData from '../assets/locations.json';
import FilteredCarList from 'components/FilteredCarList';

const CarPage: React.FC = () => {
  const [cars, setCars] = useState<Placemark[]>([]);

  useEffect(() => {
    setCars(locationsData.placemarks);
  }, []);

  return (
    <div>
      <FilteredCarList cars={cars} />
    </div>
  );
};

export default CarPage;
