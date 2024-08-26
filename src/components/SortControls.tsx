import React from 'react';
import 'styles/SortControls.css';

interface SortControlsProps {
  sortOrder: 'asc' | 'desc';
  sortBy: 'name' | 'fuel';
  onSortChange: (order: 'asc' | 'desc') => void;
  onSortByChange: (sortBy: 'name' | 'fuel') => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortOrder,
  sortBy,
  onSortChange,
  onSortByChange,
}) => {
  return (
    <div className="sort-controls">
      <div>
        <label>Sort by: </label>
        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as 'name' | 'fuel')}
        >
          <option value="name">Name</option>
          <option value="fuel">Fuel</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => onSortChange('asc')}
          disabled={sortOrder === 'asc'}
        >
          Sort Ascending
        </button>
        <button
          onClick={() => onSortChange('desc')}
          disabled={sortOrder === 'desc'}
        >
          Sort Descending
        </button>
      </div>
    </div>
  );
};

export default SortControls;
