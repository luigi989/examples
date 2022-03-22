import { React, useState } from 'react';
import ModeSwitch from "./assets/modeSwitch";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? 'dark w-full h-full' :
      'w-full h-full'}>
      <div className='relative w-full h-screen bg-light dark:bg-dark'>

        <div className='absolute top-10 right-10'>
          <ModeSwitch setIsDark={setIsDark} />
        </div>

        <div className='flex flex-row'>
          <span className={`absolute top-1/2 left-0 h-[2px] w-0
                          animate-moveWidthInfin bg-green-600`}>
          </span>
          <span className={`absolute mt-4 top-1/2 left-0 h-[2px] w-0
                          animate-moveWidth75Infin bg-red-600`}></span>
          <span className={`absolute mt-8 top-1/2 left-0 h-[2px] w-0
                          animate-moveWidth50Infin bg-purple-600`}></span>
        </div>

        {/* <div className='flex flex-row-reverse'>
        <span className={`absolute top-1/2 left-0 h-[2px] w-0
                          animate-moveWidthInfin bg-green-600`}></span>
        <span className={`absolute mt-4 top-1/2 left-0 h-[2px] w-0
                          animate-moveWidth75Infin bg-red-600`}></span>
        <span className={`absolute mt-8 top-1/2 left-0 h-[2px] w-0
                          animate-moveWidth50Infin bg-purple-600`}></span>
      </div> */}
      </div>
    </div>
  );
}

export default App;
