import React from 'react';

interface FilterControlsProps {
  filters: {
    name: string;
    address: string;
    coordinates: number[];
    engineType: string;
    fuel: number;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div>
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
        value={filters.fuel}
        onChange={(e) => onFilterChange('fuel', e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />
    </div>
  );
};

export default FilterControls;
