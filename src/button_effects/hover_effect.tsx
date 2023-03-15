import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import Scaffold from '../assets/scaffold';

function HoverEffect() {

    return (
        <Scaffold>
            {/* Maps an array into three rows with a different color on each row */}
            <div className="flex flex-row md:flex-col m-6">
                {[
                    ['border-[#255784]', 'text-[#255784]'],
                    ['border-[#ca1f1f]', 'text-[#ca1f1f]'],
                    ['border-[#92530b]', 'text-[#92530b]']
                ].map(([borderColor, textColor]) => (
                    <div key={textColor} className={`flex flex-col md:flex-row gap-20 m-4 text-5xl ${textColor}`}>
                        {/* Facebook icon */}
                        <div className='group relative cursor-pointer'>
                            {[['top-0', 'group-hover:border-t-4', 'group-hover:w-full', 'group-hover:-skew-y-12'],
                            ['right-0', 'group-hover:border-r-4', 'group-hover:h-full', 'group-hover:skew-x-12'],
                            ['bottom-0', 'group-hover:border-b-4', 'group-hover:w-full', 'group-hover:-skew-y-12'],
                            ['left-0', 'group-hover:border-l-4', 'group-hover:h-full', 'group-hover:skew-x-12']
                            ].map(([position, border, size, skew]) => (
                                <span key={position} className={`absolute ${position} ${borderColor} duration-300 
                                        group-hover:border-solid ${size} 
                                        ${border} ${skew}`}>
                                </span>
                            ))}
                            <FaFacebookF className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                        {/* Twitter icon */}
                        <div className='group relative cursor-pointer'>
                            {[['top-0', 'group-hover:border-t-8', 'group-hover:w-full'],
                            ['right-0', 'group-hover:border-r-4', 'group-hover:h-full'],
                            ['bottom-0', 'group-hover:border-b-8', 'group-hover:w-full'],
                            ['left-0', 'group-hover:border-l-4', 'group-hover:h-full']
                            ].map(([position, border, sizeHover]) => (
                                <span key={position} className={`absolute ${position} ${sizeHover} duration-300 
                                        group-hover:border-solid ${border} ${borderColor}`}>
                                </span>
                            ))}
                            <FaTwitter className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                        {/* Instagram icon */}
                        <div className='group relative cursor-pointer'>
                            <span className={`absolute w-full h-full ${borderColor} duration-300 
                                    group-hover:border-solid rounded-full
                                    group-hover:border-t-4 group-hover:border-l-4`}>
                            </span>
                            <FaInstagram className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                        {/* Youtube icon */}
                        <div className='group relative cursor-pointer'>
                            <span className={`absolute w-full h-full ${borderColor} duration-300 
                                    group-hover:border-solid rounded-2xl
                                    group-hover:border-4`}>
                            </span>
                            <FaYoutube className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                        {/* Github icon */}
                        <div className='group relative cursor-pointer'>
                            <span className={`absolute w-full h-full ${borderColor} duration-300 
                                    group-hover:border-solid
                                    group-hover:border-2`}>
                            </span>
                            <span className={`absolute w-full h-full ${borderColor} duration-300 
                                    group-hover:border-solid group-hover:rotate-45
                                    group-hover:border-4 group-hover:scale-[0.7]`}>
                            </span>
                            <FaGithub className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                        {/* Linkedin icon */}
                        <div className='group relative cursor-pointer'>
                            <span className={`absolute w-1/5 h-1/5 ${borderColor} duration-300 
                                    group-hover:border-solid rounded-full
                                    group-hover:border-2`}>
                            </span>
                            <FaLinkedin className='group-hover:scale-75 m-3 duration-300' />
                        </div>
                    </div>
                ))}
            </div>
        </Scaffold>
    );
}

export default HoverEffect;
