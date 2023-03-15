import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Sidebar from './sidebar';
import LoginForm from './login_forms/login_form';
import LoginFormTrans from './login_forms/login_form_trans';
import SearchBox from './misc/searchbox';
import ProfileCard from './profile_cards/profile_card';
import ProfileCard2 from './profile_cards/profile_card2';
import HoverEffect from './button_effects/hover_effect';
import NeonEffects from './button_effects/neon_effect';
import SlideEffect from './button_effects/button_slide';
import LoadingIcon from './misc/loadingIcon';
import AccordationMenu from './misc/accordationMenu';
import MenuDropDown from './misc/menuDropDown';

const rootElement = document.getElementById('root')
render(
  <BrowserRouter>
    <div id="outer-container" className='h-full'>
      <Sidebar outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      {/* < Header /> */}
      <div id='page-wrap' className='flex h-full'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="loginFormTrans" element={<LoginFormTrans />} />
          <Route path='searchbox' element={<SearchBox />} />
          <Route path='profilecard' element={<ProfileCard />} />
          <Route path='profilecard2' element={<ProfileCard2 />} />
          <Route path='neonEffect' element={<NeonEffects />} />
          <Route path='hoverEffect' element={<HoverEffect />} />
          <Route path='slideEffect' element={<SlideEffect />} />
          <Route path='loadingIcon' element={<LoadingIcon />} />
          <Route path='accordationMenu' element={<AccordationMenu />} />
          <Route path='menuDropDown' element={<MenuDropDown />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>,
  rootElement
);
