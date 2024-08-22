import React, { useState } from 'react';
import CarList from '../components/CarList';
import FilterControls from '../components/FilterControls';
import { Placemark } from '../types';
import { filterCars } from 'utils/filterUtils';

interface FilteredCarListProps {
  cars: Placemark[];
}

const FilteredCarList: React.FC<FilteredCarListProps> = ({ cars }) => {
  const [filter, setFilter] = useState<string>('');

  const filteredCars = filterCars(cars, filter);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car List</h1>
      <FilterControls filter={filter} onFilterChange={setFilter} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default FilteredCarList;
