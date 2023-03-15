import { React, useState } from 'react';
import ModeSwitch from '../assets/modeSwitch';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft, FaBell, FaBolt, FaCaretDown, FaChevronRight, FaCog, FaFacebookMessenger, FaPlus } from 'react-icons/fa';

function MenuDropDown() {
    const [isDark, setIsDark] = useState(true);

    function NavBar(props) {
        return (
            <nav className='h-[80px] w-full bg-[#242526] p-0 border-b-4 border-solid border-[#474a4d]'>
                <ul className='max-w-full h-full flex items-center justify-end text-white gap-2 p-2'>
                    {props.children}
                </ul>
            </nav>
        );
    }
    function NavItem(props) {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <li className='h-2/3 flex items-center justify-center'>
                <button className='w-[40px] h-[40px] flex items-center justify-center p-1 bg-[#484a4d] rounded-full
                                       hover:brightness-125'
                    onClick={() => setIsOpen(!isOpen)}>
                    {props.icon}
                </button>
                {isOpen && props.children}
            </li>
        );
    }
    function DropdownMenu() {
        const [activeMenu, setActiveMenu] = useState('main');
        const [menuHeight, setMenuHeight] = useState(null);

        function calcHeight(el) {
            const height = el.offsetHeight + 20;
            setMenuHeight(height);
        }

        function DropdownItem(props) {
            return (
                <button className='h-[50px] w-full flex items-center rounded-2xl hover:bg-[#525357] cursor-pointer' 
                   onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                    <span className='mx-2 p-2 bg-[#484a4d] rounded-full'>{props.leftIcon}</span>
                    {props.children}
                    <span className='ml-auto'>{props.rightIcon}</span>
                </button>
            );
        }

        return (
            <div className='absolute top-20 w-[300px] translate-x-[-45%] bg-[#242526] border-solid border-2 border-[#474a4d]
                            rounded-2xl p-2 overflow-hidden' style={{ height: menuHeight, transition: 'height 500ms ease' }}>
                <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>
                    <div className='menu'>
                        <DropdownItem>My Profile</DropdownItem>
                        <DropdownItem leftIcon={< FaBolt />}>Performance</DropdownItem>
                        <DropdownItem leftIcon={< FaCog />}
                            rightIcon={< FaChevronRight />}
                            goToMenu="settings">
                            Settings
                        </DropdownItem>
                    </div>  
                </CSSTransition>

                <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight}>
                    <div className='menu'>
                        <DropdownItem leftIcon={< FaArrowLeft />} goToMenu="main" />
                        <DropdownItem >Settings</DropdownItem>
                        <DropdownItem >Settings</DropdownItem>
                        <DropdownItem >Settings</DropdownItem>
                        <DropdownItem >Settings</DropdownItem>
                        <DropdownItem >Settings</DropdownItem>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    return (
        <div className={isDark ? 'w-full h-full dark' :
            'w-full h-full '}>
            <div className='w-screen h-screen flex-1 flex justify-center items-center bg-light dark:bg-dark'>

                <div className='absolute top-10 right-10'>
                    <ModeSwitch setIsDark={setIsDark} />
                </div>

                <div className='flex scale-50 w-1/2 md:scale-100 bg-slate-300 rounded-2xl p-3'>
                    <NavBar>
                        <NavItem icon={<FaPlus />} />
                        <NavItem icon={<FaBell />} />
                        <NavItem icon={<FaFacebookMessenger />} />
                        <NavItem icon={<FaCaretDown />}>
                            <DropdownMenu />
                        </NavItem>
                    </NavBar>
                </div>
            </div>
        </div>
    );
}

export default MenuDropDown;
