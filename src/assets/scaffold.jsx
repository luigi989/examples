import { React, useState } from 'react';
import ModeSwitch from './modeSwitch';

function Scaffold(props) {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={isDark ? 'w-full h-full dark' : 'w-full h-full '}>
            <div className='w-screen h-screen flex-1 flex justify-center items-center bg-light dark:bg-dark'>
                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <div className='flex scale-50 md:scale-100 bg-slate-300 rounded-2xl p-3'>
                    {props.children}
                </div>
            </div>
        </div>
    ) 
}
export default Scaffold;