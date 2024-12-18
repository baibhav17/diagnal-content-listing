import '../styles/SearchBar.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Back from '../assets/Back.png';
import searchIcon from '../assets/searchIcon.png';
import { setSearchTerm } from '../utils/State_Management/slices/dataSlice';
import { genreTitle } from '../utils/constant';
const SearchBar = () => {
    const dispatch = useDispatch();
    const [SearchBarText, setSearchBarText] = useState('')
    const [showSearchBar, setShowSearchBar] = useState(false)

// handling back button functionality.
    const handleSearchBackBtn = () => {
      setSearchBarText('')
      dispatch(setSearchTerm(''))
      setShowSearchBar(false)
      setSearchBarText('')
    }

// Show icon to show/hide searchbar.
    const handleShowSearchBar = () => {
      setSearchBarText('')
      dispatch(setSearchTerm(''))
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