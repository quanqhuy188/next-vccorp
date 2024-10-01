import React from 'react';

const PlusComponent = ({ className, color, width, height, opacity, rotate }) => {
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity={opacity}
          d="M129.382 44.9899H85.4296V1.03711H44.7614V44.9899H0.808594V85.6581H44.7614V129.611H85.4296V85.6581H129.382V44.9899Z"
          fill={color}
        />
        <path
          d="M86.1104 130.346H44.07V86.3389H0.117188V44.2985H44.07V0.345703H86.1104V44.2985H130.117V86.3389H86.1104V130.346ZM45.453 128.963H84.7382V84.9667H128.691V45.6815H84.7382V1.77191H45.453V45.7247H1.54339V84.9667H45.4962L45.453 128.963Z"
          fill="#07F9FE"
        />
      </svg>
    </div>
  );
};

export default PlusComponent;
