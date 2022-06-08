import React from 'react';

import TimerComp from './components/countTimer';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-darkest-blue to-dark-blue">
      <div className="h-full"
        style={{
          background: 'grey',
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
        }}
      >
        <div className="py-8 h-full flex flex-col justify-between">
          <div className="mt-8 flex flex-col items-center space-y-12 md:mt-28 md:space-y-24">
            <span className="text-light font-bold text-lg tracking-3xl text-center">
              CCD 2022 website launching soon
            </span>
            <div>
              <TimerComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;