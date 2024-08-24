// FilteredCarList.tsx

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
  const [filters, setFilters] = useState<Placemark>({
    name: '',
    address: '',
    coordinates: [0],
    engineType: '',
    fuel: 0,
    exterior: '',
    interior: '',
    vin: '', // Vehicle Indentification Number
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<'name' | 'fuel'>('name');

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
    filters.fuel,
    filters.exterior,
    filters.interior,
    filters.vin
  );

  const sortedCars = sortCars(filteredCars, sortOrder, sortBy);

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '25px' }}>Car List</h1>
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <SortControls
        sortOrder={sortOrder}
        sortBy={sortBy}
        onSortChange={setSortOrder}
        onSortByChange={setSortBy}
      />
      <CarList cars={sortedCars} />
    </div>
  );
};

export default FilteredCarList;
