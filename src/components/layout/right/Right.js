import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Background from './Background';

const Right = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
  return (
    <div className="desktop:w-1/2 mobile:w-full flex items-center justify-center z-3 desktop:relative">
      <div className="z-10 p-4 mobile:pb-8">
        <div className="font-semibold  desktop:text-[28px] mobile:text-[16px] text-left text-white">
          Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là
          vì sự chân thật và giản dị.
        </div>
        <div className="font-montserrat desktop:text-[28px] mobile:text-[14px] font-bold tracking-[0.06em] text-left text-[#FFDE05] desktop:mt-16">
          THU QUỲNH
        </div>
        <div className="font-montserrat desktop:text-[16px] mobile:text-[12px]  tracking-[0.06em] text-left text-white">
          Bác sĩ
        </div>
      </div>

      <Background isMobile={isMobile} />
    </div>
  );
};

export default Right;
