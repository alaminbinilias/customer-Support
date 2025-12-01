import React from 'react';
const Banner = () => {
    return (
        <div className=' w-full px-2 md:w-[1500px] mx-auto mt-20'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-center rounded-sm h-70 flex justify-center items-center'>
                    <div>
                        <p className='text-white  text-[2rem]'>In-Progress</p>
                        <p className='text-white  text-[4rem] font-semibold'>0</p>
                    </div>
                </div>
                <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] text-center rounded-sm h-70 flex justify-center items-center">
                    <div>
                        <p className='text-white  text-[2rem]'>Resolved</p>
                        <p className='text-white  text-[4rem] font-semibold'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;