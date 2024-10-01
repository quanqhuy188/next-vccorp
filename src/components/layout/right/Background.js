import React from 'react';
import SquareComponent from '../../blockComponents/SquareComponent';
import PlusComponent from '../../blockComponents/PlusComponent';
import HexagonComponent from '../../blockComponents/HexagonComponent';

const Background = () => {
  return (
    <>
      <SquareComponent
        className="absolute bottom-[18%] right-[25%]"
        color={'#FFFFFF'}
        width={'60px'}
        height={'60px'}
        opacity={0.2}
        rotate={1}
      />
      <SquareComponent
        className="absolute transform -translate-y-1/2 top-1/2 left-[20px]"
        color={'#FFFFFF'}
        width={'75px'}
        height={'75px'}
        opacity={0.3}
        rotate={1}
      />
      <PlusComponent
        className="absolute bottom-[-20px] left-0"
        color={'#FFFFFF'}
        width={'105px'}
        height={'105px'}
        opacity={0.6}
        rotate={1}
      />
      <PlusComponent
        className="absolute top-[20px] right-[-15px]"
        color={'#FFFFFF'}
        width={'105px'}
        height={'105px'}
        opacity={1}
        rotate={1}
      />
      <HexagonComponent
        className="absolute bottom-1/2 right-[-40px]"
        color={'#032184'}
        width={'85px'}
        height={'96px'}
        opacity={0.26}
        rotate={1}
      />
      <HexagonComponent
        className="absolute bottom-[34%] right-[35%]"
        color={'#032184'}
        width={'64px'}
        height={'72px'}
        opacity={0.59}
        rotate={1}
      />
      <SquareComponent
        className="absolute top-[30%] right-[15%]"
        color={'#FFFFFF'}
        width={'61px'}
        height={'60px'}
        opacity={0.1}
        rotate={1}
      />
      <SquareComponent
        className="absolute bottom-[22%] right-[47%]"
        color={'#FFFFFF'}
        width={'26px'}
        height={'26px'}
        opacity={0.2}
        rotate={1}
      />
      <SquareComponent
        className="absolute bottom-[10%] right-[50%]"
        color={'#FFFFFF'}
        width={'45px'}
        height={'45px'}
        opacity={0.3}
        rotate={1}
      />
    </>
  );
};

export default Background;
