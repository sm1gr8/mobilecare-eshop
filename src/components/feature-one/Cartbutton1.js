import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
function CartButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['32GB', '64GB', '128GB','256GB', '512GB','1TB', '2TB'];
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
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <div className="cart-dropdown">
      <button
        className={`cart-button ${selectedOption ? 'item-selected' : ''}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption ? (
          <>
            Pridane do kosika <FontAwesomeIcon icon={faCheck} />
          </>
        ) : (
          <>
          <FontAwesomeIcon icon={faPlus} /> Rychly nakup
        </>
    
        )}
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
export default CartButton;