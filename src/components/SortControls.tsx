import React from 'react';

interface SortControlsProps {
  sortOrder: 'asc' | 'desc';
  onSortChange: (order: 'asc' | 'desc') => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortOrder,
  onSortChange,
}) => {
  return (
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
  );
};

export default SortControls;
