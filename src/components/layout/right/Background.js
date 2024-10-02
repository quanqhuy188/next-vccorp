import React from 'react';
import SquareComponent from '../../blockComponents/SquareComponent';
import PlusComponent from '../../blockComponents/PlusComponent';
import HexagonComponent from '../../blockComponents/HexagonComponent';

const Background = ({ isMobile }) => {
  return (
    <>
      <SquareComponent
        className="absolute desktop:bottom-[18%] desktop:right-[25%] mobile:bottom-[18%] mobile:right-[25%]"
        color={'#FFFFFF'}
        width={isMobile ? '60px' : '60px'}
        height={isMobile ? '60px' : '60px'}
        opacity={0.2}
        rotate={1}
      />
      <SquareComponent
        className="absolute transform -translate-y-1/2 desktop:top-1/2 desktop:left-[20px]  mobile:top-1/2 mobile:left-[20px]"
        color={'#FFFFFF'}
        width={isMobile ? '75px' : '75px'}
        height={'75px'}
        opacity={0.3}
        rotate={1}
      />
      <PlusComponent
        className="absolute desktop:bottom-[-20px] desktop:left-0 mobile:bottom-[-20px] mobile:left-0"
        color={'#FFFFFF'}
        width={isMobile ? '105px' : '105px'}
        height={isMobile ? '105px' : '105px'}
        opacity={0.6}
        rotate={1}
      />
      <PlusComponent
        className="absolute desktop:top-[20px] desktop:right-[-15px] mobile:top-[20px] mobile:right-[-15px]"
        color={'#FFFFFF'}
        width={isMobile ? '105px' : '105px'}
        height={isMobile ? '105px' : '105px'}
        opacity={1}
        rotate={1}
      />
      <HexagonComponent
        className="absolute desktop:bottom-1/2 desktop:right-[-40px] mobile:bottom-1/2 mobile:right-[-40px]"
        color={'#032184'}
        width={isMobile ? '85px' : '85px'}
        height={isMobile ? '96px' : '96px'}
        opacity={0.26}
        rotate={1}
      />
      <HexagonComponent
        className="absolute desktop:bottom-[34%] desktop:right-[35%] mobile:bottom-[34%] mobile:right-[35%]"
        color={'#032184'}
        width={isMobile ? '64px' : '64px'}
        height={isMobile ? '72px' : '72px'}
        opacity={0.59}
        rotate={1}
      />
      <SquareComponent
        className="absolute desktop:top-[30%] desktop:right-[15%] mobile:top-[30%] mobile:right-[15%]"
        color={'#FFFFFF'}
        width={isMobile ? '60px' : '60px'}
        height={isMobile ? '60px' : '60px'}
        opacity={0.1}
        rotate={1}
      />
      <SquareComponent
        className="absolute desktop:bottom-[22%] desktop:right-[47%] mobile:bottom-[22%] mobile:right-[47%]"
        color={'#FFFFFF'}
        width={isMobile ? '26px' : '26px'}
        height={isMobile ? '26px' : '26px'}
        opacity={0.2}
        rotate={1}
      />
      <SquareComponent
        className="absolute desktop:bottom-[10%] desktop:right-[50%] mobile:bottom-[10%] mobile:right-[50%]"
        color={'#FFFFFF'}
        width={isMobile ? '45px' : '45px'}
        height={isMobile ? '45px' : '45px'}
        opacity={0.3}
        rotate={1}
      />
    </>
  );
};

export default Background;
