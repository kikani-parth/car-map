import React from 'react';
import { Placemark } from 'types';
import 'styles/FilterControls.css';

interface FilterControlsProps {
  filters: Placemark;
  onFilterChange: (filterType: string, value: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="text"
        placeholder="Filter by address"
        value={filters.address}
        onChange={(e) => onFilterChange('address', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="text"
        placeholder="Filter by engine type"
        value={filters.engineType}
        onChange={(e) => onFilterChange('engineType', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="number"
        placeholder="Filter by fuel"
        value={filters.fuel === 0 ? '' : filters.fuel}
        onChange={(e) => onFilterChange('fuel', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="text"
        placeholder="Filter by exterior"
        value={filters.exterior}
        onChange={(e) => onFilterChange('exterior', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="text"
        placeholder="Filter by interior"
        value={filters.interior}
        onChange={(e) => onFilterChange('interior', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />

      <input
        type="text"
        placeholder="Filter by vin"
        value={filters.vin}
        onChange={(e) => onFilterChange('vin', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />
    </div>
  );
};

export default FilterControls;
