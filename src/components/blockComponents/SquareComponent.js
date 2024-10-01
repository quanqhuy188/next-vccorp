import React from 'react';

const SquareComponent = ({ className, color, width, height, opacity, rotate }) => {
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity={opacity}
          d="M13.9652 0.345703H46.2692C53.9172 0.345703 60.1172 6.54565 60.1172 14.1937V46.4977C60.1172 54.1458 53.9172 60.3457 46.2692 60.3457H13.9652C6.31714 60.3457 0.117191 54.1458 0.117191 46.4977V14.1937C0.117191 6.54565 6.31714 0.345703 13.9652 0.345703Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SquareComponent;
