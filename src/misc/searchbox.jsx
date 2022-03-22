import React from 'react';
import { FaSearch } from 'react-icons/fa';
export default function Searchbox() {
    return(
        <div className="flex-1 flex justify-center items-center">
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
        </div>
    );
}