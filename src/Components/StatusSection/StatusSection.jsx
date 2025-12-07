import React from 'react';

const StatusSection = ({tsk}) => {
    return (
        <div>
            <div className="card-body bg-white mb-2">
                <h2 className="card-title text-[1.2rem] mb-2">{tsk}</h2>
                <div className="justify-end card-actions w-full">
                    <button className="btn bg-[#02a63b] text-white w-full">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default StatusSection;