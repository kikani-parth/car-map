import React, { useState, useEffect } from 'react';
import CarList from '../components/CarList';
import { Placemark } from '../types';
import locationsData from '../assets/locations.json';

const CarPage: React.FC = () => {
  const [cars, setCars] = useState<Placemark[]>([]);

  useEffect(() => {
    setCars(locationsData.placemarks);
  }, []);

  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};

export default CarPage;
