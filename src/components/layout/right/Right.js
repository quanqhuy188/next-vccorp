import React from 'react';

import Background from './Background';

const Right = () => {
  return (
    <div className="desktop:w-1/2 mobile:w-full flex items-center justify-center z-3 relative">
      <div className="z-10 p-4">
        <div className="font-semibold  text-[28px] text-left text-white">
          Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là
          vì sự chân thật và giản dị.
        </div>
        <div className="font-montserrat text-[28px] font-bold tracking-[0.06em] text-left text-[#FFDE05]">
          THU QUỲNH
        </div>
        <div className="font-montserrat text-[18px]  tracking-[0.06em] text-left text-white">Bác sĩ</div>
      </div>

      <Background />
    </div>
  );
};

export default Right;
