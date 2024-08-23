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
  // TODO: add useState<Placemark>
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    coordinates: [0],
    engineType: '',
    fuel: 0,
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredCars = filterCars(
    cars,
    filters.name,
    filters.address,
    filters.coordinates,
    filters.engineType,
    filters.fuel
  );

  const sortedCars = sortCars(filteredCars, sortOrder);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car List</h1>
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <SortControls sortOrder={sortOrder} onSortChange={setSortOrder} />
      <CarList cars={sortedCars} />
    </div>
  );
};

export default FilteredCarList;
