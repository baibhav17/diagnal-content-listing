import '../styles/Thumbnail.css'
import React, { useEffect, useState } from 'react';
import imgNotFound from '../assets/imgNotFound.png';
const Thumbnail = React.forwardRef(({ title, imageUrl }, ref) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

// Updating the image whenever filtering is done.
  useEffect(()=>{
    setCurrentImageUrl(imageUrl)
  },[imageUrl])

  // If thumbnail image is not found then this image will be rendered. This img is from the API.
  const handleImageError = () => {
    setCurrentImageUrl(imgNotFound);
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
