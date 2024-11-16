import React, { useState } from 'react';
import imgNotFound from '../assets/imgNotFound.png';
const Thumbnail = React.forwardRef(({ title, imageUrl }, ref) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const fallbackImage = imgNotFound;
  const handleImageError = () => {
    setCurrentImageUrl(fallbackImage);
  };

  return (
    <div ref={ref} className='thumbnailStyle'>
      <img
        src={currentImageUrl}
        alt={title}
        className='imageStyle'
        onError={handleImageError}
      />
      <p className='scrollable-name'>{title}</p>
    </div>
  );
});

export default Thumbnail;
