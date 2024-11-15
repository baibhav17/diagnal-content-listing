import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Back from '../assets/Back.png';
import { setSearchTerm } from '../utils/State_Management/slices/dataSlice';
const SearchBar = () => {
    const dispatch = useDispatch();
    const [showBackBtn, setShowBackBtn] = useState(false)
    const [SearchBarText, setSearchBarText] = useState('')
  
    const handleSearchBackBtn = () => {
      setSearchBarText('')
      dispatch(setSearchTerm(''))
      setShowBackBtn(false)
    }
    return (
      <div className='search-bar-wrapper'>
      {showBackBtn && <img className='searhbar-back-btn' onClick={handleSearchBackBtn} src={Back} alt='back-btn' />}
      <input
        type="text"
        placeholder="Search..."
        className='search-bar-input'
        value={SearchBarText}
        onChange={(e) => {
          e.target.value.length > 0 ? setShowBackBtn(true) : setShowBackBtn(false)
          setSearchBarText(e.target.value)
          dispatch(setSearchTerm(e.target.value))}
        }
      />
      </div>
    );
  };

  export default SearchBar