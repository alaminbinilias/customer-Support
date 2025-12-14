import React from 'react';

import plus from '../../assets/Plus.png'

const Navber = () => {
    return (
        <div className='bg-base-100 shadow-sm -mt-19'>
            <div className='w-full md:w-[1500px] mx-auto p-4'>
                <div className='flex items-center justify-between'>
                    <div className='p-0'>
                        <p className='text-[1.4rem] font-bold'>CS — Ticket System</p>
                    </div>

                    <div className="sm:block md:hidden">
                        <ul className="menu menu-horizontal px-1 p-2">
                            <li>
                                <details>
                                    <summary>Catalog</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><a>Home</a></li>
                                        <li><a>FAQ</a></li>
                                        <li><a>Changelog</a></li>
                                        <li><a>Blog</a></li>
                                        <li><a>Download</a></li>
                                        <li><a>Contact</a></li>
                                        <div className='flex items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white rounded-md text-[1rem] font-semibold px-2 py-1'>
                                            <button className='cursor-pointer'>New Ticket</button>
                                        </div>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:flex justify-evenly gap-8 items-center text-[1.1rem]'>
                        <a href="">Home</a>
                        <a href="">FAQ</a>
                        <a href="">Changelog</a>
                        <a href="">Blog</a>
                        <a href="">Download</a>
                        <a href="">Contact</a>
                        <div className='flex items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white px-3 py-2 rounded-md text-[1rem] font-semibold'>
                            <img className='mr-1' src={plus} alt="" />
                            <button className='cursor-pointer'>New Ticket</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Navber;