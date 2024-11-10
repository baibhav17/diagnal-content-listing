import React from 'react';

const Thumbnail = React.forwardRef(({ title, imageUrl }, ref) => (
  <div ref={ref} style={thumbnailStyle}>
    <img src={imageUrl} alt={title} style={imageStyle} />
    <p style={titleStyle}>{title}</p>
  </div>
));

const thumbnailStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
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
