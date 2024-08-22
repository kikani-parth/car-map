import React, { useState } from 'react';
import CarList from '../components/CarList';
import FilterControls from '../components/FilterControls';
import SortControls from '../components/SortControls';
import { Placemark } from '../types';
import { filterCars } from 'utils/filterUtils';
import { sortCars } from 'utils/sortUtils';

interface FilteredCarListProps {
  cars: Placemark[];
}

const FilteredCarList: React.FC<FilteredCarListProps> = ({ cars }) => {
  const [filter, setFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredCars = filterCars(cars, filter);
  const sortedCars = sortCars(filteredCars, sortOrder);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car List</h1>
      <FilterControls filter={filter} onFilterChange={setFilter} />
      <SortControls sortOrder={sortOrder} onSortChange={setSortOrder} />
      <CarList cars={sortedCars} />
    </div>
  );
};

export default FilteredCarList;
