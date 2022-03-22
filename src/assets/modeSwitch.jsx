import { React, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ModeSwitch = ({setIsDark}) => {
    const [darkMode, setDarkMode] = useState(true);

    function setDark() {
        setIsDark(prevIsDark => !prevIsDark);
        setDarkMode(!darkMode);
    }

    return (
        <label className='relative flex justify-start items-center p-2 text-xl cursor-pointer'>
            <input type='checkbox'
                className='peer appearance-none' onChange={setDark}/>
            <span className='w-16 h-10 flex items-center flex-shrink-0
                            ml-4 p-1 bg-gray-300 rounded-full
                            duration-300 ease-in-out peer-checked:bg-black'>
                            </span>
            <span className=' absolute w-8 h-8 bg-white rounded-full shadow-md
                                duration-300 flex items-center justify-center translate-x-5
                                peer-checked:translate-x-11'>
                {darkMode ? <FaMoon className=''/> : 
                            <FaSun className=''/>}
            </span>
        </label>
    )     
}
export default ModeSwitch;