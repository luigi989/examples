import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import './sidebar.css';

interface SideBarProps {
  outerContainerId: string;
  pageWrapId: string;
}

interface SubMenuProps {
  text: string;
  state: boolean;
  onClick: (state: boolean) => void;
  children: React.ReactNode;
}

interface MenuItemProps {
  text: string;
  path: string;
}

const Sidebar = ({ outerContainerId, pageWrapId }: SideBarProps) => {
  const [cardsOpen, setCardsOpen] = useState(false);
  const [loginFormsOpen, setLoginFormsOpen] = useState(false);
  const [buttonsOpen, setButtonsOpen] = useState(false);
  const [miscOpen, setMiscOpen] = useState(false);

  const hoverColor = " hover:text-[#aa2222]";

  const SubMenu = ({text, state, onClick, children} : SubMenuProps) => {
    return (
      <div>
        <div>
          <div className={`flex items-center cursor-pointer` + hoverColor} onClick={() => onClick(!state)}>
            <span className={(buttonsOpen ? 'underline' : 'text-none')}>{text}</span>
            {state ? <FaMinus className='text-xs ml-2' /> : <FaPlus className='text-xs ml-2' />}
          </div>
        </div>
        {state ?
          <div className='relative'>
            <span className='absolute left-2 w-[1px] h-full bg-red-500'></span>
            <div className='flex flex-col ml-4'>
              {children}
            </div>
          </div> : null}
      </div>
    );
  }

  const MenuItem = ({text, path} : MenuItemProps) => {
    return (
      <NavLink to={path}
        className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive') + hoverColor}>
        {text}
      </NavLink>
    );
  }

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <div className='space-y-0.5'>
        <MenuItem path='./' text='Home' />
        <SubMenu text='Buttons effects' state={buttonsOpen} onClick={setButtonsOpen}>
          <MenuItem path='./neonEffect' text='Neon Effects' />
          <MenuItem path='./hoverEffect' text='Hover Effects' />
          <MenuItem path='./slideEffect' text='Slide Effects' />
        </SubMenu>

        <SubMenu text='Login Forms' state={loginFormsOpen} onClick={setLoginFormsOpen}>
          <MenuItem path='./loginForm' text='Login Form' />
          <MenuItem path='./loginFormTrans' text='Transparent Login form' />
        </SubMenu>

        <SubMenu text='Miscellaneous' state={miscOpen} onClick={setMiscOpen}>
          <MenuItem path='./searchBox' text='Searchbox' />
          <MenuItem path='./loadingIcon' text='Loading Icon' />
          <MenuItem path='./accordationMenu' text='Accordation menu' />
          <MenuItem path='./menuDropDown' text='Dropdown menu' />
        </SubMenu>

        <SubMenu text='Profile cards' state={cardsOpen} onClick={setCardsOpen}>
          <MenuItem path='./profilecard' text='Profile card 1' />
          <MenuItem path='./profilecard2' text='Profile card 2' />
        </SubMenu>
      </div>
    </Menu>
  );
};

export default Sidebar;
