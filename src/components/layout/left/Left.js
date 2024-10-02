import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Doctor1Component from '../../blockComponents/Doctor1Component';
import Doctor2Component from '../../blockComponents/Doctor2Component';
import HexagonComponent from '../../blockComponents/HexagonComponent';

const Left = () => {
  // Media queries for responsive design
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  // Adjust dimensions based on screen size
  const doctor1Dimensions = {
    width: isMobile ? 276 : 517,
    height: isMobile ? 310 : 565,
    widthImg: isMobile ? 300 : 517,
    heightImg: isMobile ? 350 : 565,
  };

  const doctor2Dimensions = {
    width: isMobile ? 226 : 366,
    height: isMobile ? 256 : 415,
    widthImg: isMobile ? 250 : 366,
    heightImg: isMobile ? 300 : 415,
  };

  const hexagonDimensions = {
    width: isMobile ? '56px' : '147px',
    height: isMobile ? '63px' : '166px',
    opacity: 0.3,
  };

  return (
    <div className="desktop:w-1/2 mobile:w-full flex desktop:items-center desktop:justify-center z-3 relative">
      <div className="relative">
        <Doctor1Component
          className="relative desktop:left-[-85px] desktop:top-[-90px] mobile:left-[-45px] mobile:top-[-25px]"
          src={'https://www.wellingtonregional.com/sites/wellingtonregional.com/files/doctors_visit_1200x900.jpg'}
          width={doctor1Dimensions.width}
          height={doctor1Dimensions.height}
          widthImg={doctor1Dimensions.widthImg}
          heightImg={doctor1Dimensions.heightImg}
        >
          <Doctor2Component
            className="absolute desktop:bottom-[-183px] desktop:right-[-57px] mobile:bottom-[-137px] mobile:right-[-63px]"
            src={
              'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip'
            }
            width={doctor2Dimensions.width}
            height={doctor2Dimensions.height}
            widthImg={doctor2Dimensions.widthImg}
            heightImg={doctor2Dimensions.heightImg}
          />
          <HexagonComponent
            className="absolute desktop:top-[40px] desktop:right-[-40px]  mobile:top-[48px] mobile:right-[-23px]"
            color={'#07F9FE'}
            width={hexagonDimensions.width}
            height={hexagonDimensions.height}
            opacity={hexagonDimensions.opacity}
            rotate={1}
          />
        </Doctor1Component>
      </div>
    </div>
  );
};

export default Left;
