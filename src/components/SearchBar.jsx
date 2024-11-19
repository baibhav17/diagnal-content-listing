import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Back from '../assets/Back.png';
import searchIcon from '../assets/searchIcon.png';
import { setSearchTerm } from '../utils/State_Management/slices/dataSlice';
import { genreTitle } from '../utils/constant';
const SearchBar = () => {
    const dispatch = useDispatch();
    // const [showBackBtn, setShowBackBtn] = useState(false)
    const [SearchBarText, setSearchBarText] = useState('')
    const [showSearchBar, setShowSearchBar] = useState(false)
  
    const handleSearchBackBtn = () => {
      setSearchBarText('')
      dispatch(setSearchTerm(''))
      // setShowBackBtn(false)
      setShowSearchBar(false)
    }

    const handleShowSearchBar = () => {
      setShowSearchBar(!showSearchBar)
    }
    return (
      <div className='search-bar-wrapper'>
      <div className='genre-title-wrapper'>
      <img className='searhbar-back-btn' onClick={handleSearchBackBtn} src={Back} alt='back-btn' />
      
      <p>{genreTitle}</p>
      </div>
      <div className='searchbar-wrapper'>
      {showSearchBar && <input
        type="text"
        placeholder="Search..."
        className='search-bar-input'
        value={SearchBarText}
        onChange={(e) => {
          // e.target.value.length > 0 ? setShowBackBtn(true) : setShowBackBtn(false)
          setSearchBarText(e.target.value)
          dispatch(setSearchTerm(e.target.value))}
        }
      />}
      <img onClick={handleShowSearchBar} className='search-icon' src={searchIcon} />
      </div>

      </div>
    );
  };

  export default SearchBar