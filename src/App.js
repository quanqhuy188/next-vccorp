// App.js
import React from 'react';

import HexagonComponent from './components/blockComponents/HexagonComponent';
import Left from './components/layout/left/Left';
import Right from './components/layout/right/Right';

function App() {
  return (
    <div className="h-screen bg-[#029CF6] flex items-center justify-center font-montserrat">
      <div className="max-w-[980px] w-full h-full overflow-hidden relative">
        <div className="flex flex-col desktop:flex-row h-screen z-10 relative mobile:justify-between ">
          <Left />
          <Right />
        </div>
        <HexagonComponent
          className="absolute transform -translate-x-1/2 left-1/2 w-[200%] top-[580px]"
          color={'#032184'}
          width={'100%'}
          height={'100%'}
          opacity={0.3}
          rotate={1}
        />
      </div>
    </div>
  );
}

export default App;
