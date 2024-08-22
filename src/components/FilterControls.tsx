import React from 'react';

interface FilterControlsProps {
  filter: string;
  onFilterChange: (value: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ marginBottom: '20px', display: 'block' }}
      />
    </div>
  );
};

export default FilterControls;
