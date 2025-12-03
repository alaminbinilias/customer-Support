import React from 'react';
import calander from '../../assets/ri_calendar-line.png'
const Card = () => {
    return (
        <div>
            <div className='bg-white border-2 border-red-400 p-2'>
                <div className='flex gap-3 justify-between'>
                    <div>
                        <p className='font-medium text-[1.2rem]'>Login Issues - Can't Access Account</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2 bg-[#baf7cf] px-3 py-1 rounded-2xl'>
                            <div className='bg-[#02a63b] h-4 w-4 rounded-4xl flex items-center'>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-xl -mt-1'>open</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-1 text-gray-500'>
                    <p className='text-[1.1rem]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <div className=' flex '>
                        <div>
                            <p className='text-gray-400 mr-2 font-semibold'>#1001</p>
                        </div>
                        <div>
                            <p>HIGH PRIORITY</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <p className='text-gray-400'>John Smith</p>
                        </div>
                        <div className='flex'>
                            <img src={calander} alt="" />
                            <p className='ml-2 text-gray-400'>1/15/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;