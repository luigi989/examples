import React, { useState, useEffect  } from 'react';
import { SketchPicker } from 'react-color';
import { FaRedo } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModeSwitch from "../assets/modeSwitch";

interface InputTabProps {
  id: string;
  index: number;
  text: string;
}

interface ResetButtonProps {
  color: string;
  index: number;
}

function LoadingIcon() {
  const red = '#f44336';
  const green = '#4caf50';
  const blue = '#2196f3';
  const pink = '#e91e63';

  const [isDark, setIsDark] = useState(true);
  const [selectedObject, setSelectedObject] = useState([true, false, false, false]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [colors, setColors] = useState([red, green, blue, pink]);
  const [showPopup, setShowPopup] = useState(false);

  const contentStyle = { background: '#FFF', width: 'min-content', padding: '0', borderRadius: '3%'};
  const overlayStyle = { background: 'rgba(0,0,0,0.0)' };

  function ColorSelect() {

    function changeColor(color) {
      var newArray = [...colors];
      for (var i = 0; i < newArray.length; i++) {
        if (selectedObject[i]) {
          newArray[i] = color.hex;
        }
      }
      setColors(newArray);
    }

    function setIndex(index: number) {
      let newArray = [false, false, false, false];
      newArray[index - 1] = true;
      setSelectedIndex(index - 1);
      setSelectedObject(newArray);
    }

    function resetColor(color: string, index: number) {
      var newArray = [...colors];
      newArray[index] = color;
      setColors(newArray);
    }

    function handleOnClick(index: number) {
      setIndex(index);
      setShowPopup(true);
    }

    function showColor() {
      for(var i = 0; i < selectedObject.length; i++) {
        console.log(selectedObject[i]);
        if(selectedObject[i]) {
          console.log(colors[i]);
          return colors[i];
        }
      }
    }

    const InputTab = ({id, index, text}: InputTabProps) => {
      return (
        <div>
          <input type='radio' id={id} name='number' checked={selectedObject[index - 1]} onChange={() => setIndex(index)}
            className='peer hidden' />
          <label htmlFor={id} style={{ backgroundColor: colors[index - 1] }}
            className='p-2 rounded-2xl cursor-pointer' onClick={() => handleOnClick(index)}>
            {text}
          </label>
        </div>
      );
    }

    const ResetButton = ({color, index}: ResetButtonProps) => {
      return (
        <button className='w-fit p-2 hover:bg-slate-700 rounded-full hover:text-dark duration-300' 
          onClick={() => resetColor(color, index)}><FaRedo /></button>
      );
    }

    return (
      <div className='parent absolute right-12 p-2 flex flex-row items-center bg-slate-300 rounded-2xl'>
        <div className='flex flex-col gap-5 p-2'>
          <InputTab id='number1' index={1} text='Siffra 1' />
          <InputTab id='number2' index={2} text='Siffra 2' />
          <InputTab id='number3' index={3} text='Siffra 3' />
          <InputTab id='number4' index={4} text='Siffra 4' />
        </div>
        <div className='flex flex-col gap-3 py-2'>
          <ResetButton color={red} index={0} />
          <ResetButton color={green} index={1} />
          <ResetButton color={blue} index={2} />
          <ResetButton color={pink} index={3} />
        </div>
        <Popup open={showPopup} onClose={() => setShowPopup(false)} 
              position='right center' closeOnDocumentClick
              {...{ contentStyle, overlayStyle }}>
          <SketchPicker color={colors[selectedIndex]} onChange={changeColor} />
        </Popup>
      </div>

    );
  }

  return (
    <div className={isDark ? 'w-full h-full dark' :
      'w-full h-full '}>
      <div className='w-full h-screen flex-1 flex flex-col justify-center items-center bg-light dark:bg-dark'>

        <div className='absolute top-10 right-10'>
          <ModeSwitch setIsDark={setIsDark} />
        </div>
        <ColorSelect />

        <div className='flex justify-center items-center md:scale-100'>
          <div className="w-1/2 flex flex-wrap animate-spinSlow text-xs">
            <span style={{ backgroundColor: colors[0] }}
              className={`w-[32px] h-[32px] m-1 animate-scale
                          rounded-t-full rounded-l-full origin-bottom-right flex items-center justify-center`}>1</span>
            <span style={{ backgroundColor: colors[1] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-500
                          rounded-t-full rounded-r-full origin-bottom-left flex items-center justify-center`}>2</span>
            <span style={{ backgroundColor: colors[2] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-1500
                          rounded-b-full rounded-l-full origin-top-right flex items-center justify-center`}>3</span>
            <span style={{ backgroundColor: colors[3] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-1000
                          rounded-b-full rounded-r-full origin-top-left flex items-center justify-center`}>4</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoadingIcon;
