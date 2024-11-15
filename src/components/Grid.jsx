import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk, incrementPage } from '../utils/State_Management/slices/dataSlice';
import Thumbnail from './Thumbnail';
import ShimmerUI from '../utils/shimmerUI';
import { BASE_URL } from '../utils/constant';

const Grid = () => {
  const { items, loading, page, searchTerm, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const observer = useRef();

  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if(error) return;
      if (!entries[0].isIntersecting) return;
      dispatch(incrementPage());
    });
    if (node) observer.current.observe(node);
  }, [loading, dispatch]);

  useEffect(() => {
    dispatch(fetchDataThunk(page));
  }, [page, dispatch]);

  const filteredItems = searchTerm
    ? items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : items;
  return filteredItems.length === 0 ? <ShimmerUI /> : (
    <div className='grid-style'>
      {filteredItems.map((item, index) => (
        <Thumbnail
          key={item.id || index}
          ref={index === filteredItems.length - 1 ? lastItemRef : null}
          title={item.name}
          imageUrl={`${BASE_URL}/images/${item['poster-image']}`}
        />
      ))}
    </div>
  );
};

export default Grid;
