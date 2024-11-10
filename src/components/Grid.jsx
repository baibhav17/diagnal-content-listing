import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk, incrementPage } from '../utils/State_Management/slices/dataSlice';
import Thumbnail from './Thumbnail';
import ShimmerUI from '../utils/shimmerUI';

const Grid = () => {
  const { items, loading, page, searchTerm } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const observer = useRef();

  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(incrementPage());
      }
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
    <div style={gridStyle}>
      {filteredItems.map((item, index) => (
        <Thumbnail
          key={item.id || index}
          ref={index === filteredItems.length - 1 ? lastItemRef : null}
          title={item.name}
          imageUrl={`https://test.create.diagnal.com/images/${item['poster-image']}`}
        />
      ))}
      {loading && <ShimmerUI />}
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  padding: '20px',
};

export default Grid;
