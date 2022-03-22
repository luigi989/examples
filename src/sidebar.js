import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';


const Sidebar = ({ outerContainerId, pageWrapId }) => {
  const [cardsOpen, setCardsOpen] = useState(false);
  const [loginFormsOpen, setLoginFormsOpen] = useState(false);
  const [buttonsOpen, setButtonsOpen] = useState(false);
  const [miscOpen, setMiscOpen] = useState(false);

  const hoverColor = " hover:text-[#aa2222]";

  function SubMenu(props) {
    return (
      <div>
        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => props.func(!props.state)}>
            <span className={(buttonsOpen ? 'underline' : 'text-none')}>{props.text}</span>
            {props.state ? <FaMinus className='text-xs ml-2' /> : <FaPlus className='text-xs ml-2' />}
          </div>
        </div>
        {props.state ?
          <div className='relative'>
            <span className='absolute left-2 w-[1px] h-full bg-red-500'></span>
            <div className='flex flex-col ml-4'>
              {props.children}
            </div>
          </div> : null}
      </div>
    );
  }

  function MenuItem(props) {
    return (
      <NavLink to={props.path}
        className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
        {props.text}
      </NavLink>
    );
  }

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <div className='space-y-0.5'>
        <MenuItem path='./' text='Home' />
        <SubMenu text='Buttons effects' state={buttonsOpen} func={setButtonsOpen}>
          <MenuItem path='./neonEffect' text='Neon Effects' />
          <MenuItem path='./hoverEffect' text='Hover Effects' />
          <MenuItem path='./slideEffect' text='Slide Effects' />
        </SubMenu>

        <SubMenu text='Login Forms' state={loginFormsOpen} func={setLoginFormsOpen}>
          <MenuItem path='./loginForm' text='Login Form' />
          <MenuItem path='./loginFormTrans' text='Transparent Login form' />
        </SubMenu>

        <SubMenu text='Miscellaneous' state={miscOpen} func={setMiscOpen}>
          <MenuItem path='./searchBox' text='Searchbox' />
          <MenuItem path='./loadingIcon' text='Loading Icon' />
          <MenuItem path='./accordationMenu' text='Accordation menu' />
          <MenuItem path='./menuDropDown' text='Dropdown menu' />
        </SubMenu>

        <SubMenu text='Profile cards' state={cardsOpen} func={setCardsOpen}>
          <MenuItem path='./profilecard' text='Profile card 1' />
          <MenuItem path='./profilecard2' text='Profile card 2' />
        </SubMenu>
      </div>
    </Menu>
  );
};

export default Sidebar;
