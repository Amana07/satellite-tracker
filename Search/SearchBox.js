import React from 'react';
import './Search.css'; // Import your CSS file for styling

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className='SearchBox' // Add your custom styles in the CSS file
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder='Search'
    />
  );
};

export default SearchBox;
