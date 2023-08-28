import React, { useState, useEffect } from 'react';
function Cartbutton() { // Changed the component name to CartButton
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['iPhone 32GB', 'iPhone 64GB', 'iPhone 128GB'];
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (isDropdownOpen && !event.target.classList.contains('cart-button')) {
      setIsDropdownOpen(false);
    }
  };

  // handle open click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="cart-button">
      <button
        className={`cart-button ${isDropdownOpen ? 'item-selected' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption || 'Select Product Variation'}
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cartbutton; // Export the updated component as CartButton
