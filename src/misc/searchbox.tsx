import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Scaffold from '../assets/scaffold';
export default function Searchbox() {
    return(
        <Scaffold>
            <input
                className='bg-[#2f3640] px-2 py-1 rounded-2xl
                           float-left' 
                type='text'
                name=''
                placeholder='Type to search'
            />
            <button className='float-right'>
                <FaSearch />
            </button>

        </Scaffold>
    );
}