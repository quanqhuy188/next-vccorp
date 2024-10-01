import React from 'react';
import SquareComponent from '../../blockComponents/SquareComponent';
import Hexagon from 'react-hexagon';

const Left = () => {
  return (
    <div className="desktop:w-1/2 mobile:w-full ">
      <div className="hexagon-container" style={{ padding: '20px' }}>
        <Hexagon
          style={{
            padding: 10,
            stroke: '#07F9FE',
            strokeWidth: 4, // Độ dày đường viền
          }}
          backgroundImage="https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_h%C3%B9ng.png"
        />
      </div>
    </div>
  );
};

export default Left;
