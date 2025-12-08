import React from 'react';

const ResolveSection = ({resolveTask}) => {
    console.log(resolveTask);
    return (
        <div className=' p-1'>
            <div className="bg-[#e0e8ff] mb-1 w-full rounded-sm">
                <h2 className="font-semibold text-[1.2rem] text-center mb-1">{resolveTask.title}</h2>
            </div>
        </div>
    );
};

export default ResolveSection;