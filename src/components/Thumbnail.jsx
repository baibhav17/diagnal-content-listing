import React, { useState } from 'react';
import imgNotFound from '../assets/imgNotFound.png';
const Thumbnail = React.forwardRef(({ title, imageUrl }, ref) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const fallbackImage = imgNotFound;  // Path to your alternate image

  
  const handleImageError = () => {
    setCurrentImageUrl(fallbackImage);
  };

  return (
    <div ref={ref} style={thumbnailStyle}>
      <img
        src={currentImageUrl}
        alt={title}
        style={imageStyle}
        onError={handleImageError}
      />
      <p className='scrollable-name' style={titleStyle}>{title}</p>
    </div>
  );
});

const thumbnailStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const imageStyle = {
  width: '100%',
  aspectRatio: '2/3',
  objectFit: 'cover',
  borderRadius: '8px',
};

const titleStyle = {
  fontSize: '0.9rem',
  marginTop: '8px',
};

export default Thumbnail;
