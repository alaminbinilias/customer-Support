import React from 'react';

import twitter from '../../assets/twitter.png'
import fb from '../../assets/FB.png'
import ldin from '../../assets/Linkdin.png'
import msg from '../../assets/mail.png'

const Footer = () => {
    return (
        <div className='bg-black pb-5 mt-40 '>
            <div className=' w-full grid grid-cols-1 p-2 sm:justify-items-start md:w-[1500px] mx-auto md:grid-cols-5 md:justify-items-end border-b-2 py-24 border-gray-800'>
                <div className='text-white text-wrap'>
                    <p className='font-bold text-[1.3rem] mb-2'>CS — Ticket System</p>
                    <p className='text-gray-400 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='text-white mt-4 md:mt-0 pl-5'>
                    <p className='font-medium text-[1.2rem] mb-2'>Company</p>
                    <p className='text-gray-400 mb-3'>About Us</p>
                    <p className='text-gray-400 mb-3'>Our Mission</p>
                    <p className='text-gray-400 mb-3'>Contact Saled</p>
                </div>

                <div className='text-white mt-4 md:mt-0 pl-5'>
                    <p className='font-medium text-[1.2rem] mb-2'>Services</p>
                    <p className='text-gray-400 mb-3'>Products & Services</p>
                    <p className='text-gray-400 mb-3'>Customer Stories</p>
                    <p className='text-gray-400 mb-3'>Download Apps</p>
                </div>

                <div className='text-white mt-4 md:mt-0 pl-5'>
                    <p className='font-medium text-[1.2rem] mb-2'>Information</p>
                    <p className='text-gray-400 mb-3'>Privacy Policy</p>
                    <p className='text-gray-400 mb-3'>Terms & Conditions</p>
                    <p className='text-gray-400 mb-3'>Join Us</p>
                </div>
                <div className='text-white mt-4 md:mt-0 pl-5'>
                    <p className='font-medium text-[1.2rem] mb-3'>Social Links</p>
                    <div className='flex mb-2 '>
                        <img className='mr-2' src={twitter} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex mb-2'>
                        <img className='mr-2' src={ldin} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex mb-2'>
                        <img className='mr-2' src={fb} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex mb-2'>
                        <img className='mr-2' src={msg} alt="" />
                        <p>support@cst.com</p>
                    </div>
                </div>
            </div>
            <div className='text-white mt-5'>
                <p className='text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Footer;